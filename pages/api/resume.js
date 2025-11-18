import OpenAI from 'openai'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
const { generateClassicPDF, generateModernPDF, generateExecutivePDF } = require('../../utils/pdfGenerator')

// Initialize AWS S3 client
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const userData = req.body
    
    console.log('📝 Resume API called for:', userData.fullName)

    // Validate required fields
    if (!userData.fullName || !userData.email || !userData.jobTitle || !userData.experience || !userData.education || !userData.skills) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      })
    }

    // Check environment variables
    if (!process.env.OPENAI_API_KEY) {
      console.error('❌ OpenAI API key not found')
      return res.status(500).json({
        success: false,
        message: 'OpenAI API is not configured'
      })
    }

    if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY || !process.env.AWS_S3_BUCKET) {
      console.error('❌ AWS credentials not found')
      return res.status(500).json({
        success: false,
        message: 'AWS S3 is not configured'
      })
    }

    // Initialize OpenAI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    console.log('🤖 Calling OpenAI to generate resume...')

    // Create the prompt for OpenAI
    const prompt = `You are a professional resume writer with 15+ years of experience. Create a compelling, ATS-optimized resume that will help the candidate stand out.

TARGET JOB: ${userData.jobTitle}
${userData.jobDescription ? `\nJOB DESCRIPTION:\n${userData.jobDescription}\n` : ''}

CANDIDATE INFORMATION:
Name: ${userData.fullName}
Email: ${userData.email}
Phone: ${userData.phone || 'Not provided'}
Location: ${userData.location || 'Not provided'}

WORK EXPERIENCE:
${userData.experience}

EDUCATION:
${userData.education}

SKILLS:
${userData.skills}

${userData.certifications ? `CERTIFICATIONS:\n${userData.certifications}\n` : ''}

CRITICAL: Output ONLY plain text. Do NOT use markdown formatting, code blocks, backticks, or ''' symbols. Just write the resume content directly without any markup.

INSTRUCTIONS:
1. Create a professional resume with these sections in order:
   - PROFESSIONAL SUMMARY (3-4 compelling sentences)
   - WORK EXPERIENCE (rewrite with strong action verbs and quantifiable achievements)
   - EDUCATION (format properly)
   - SKILLS (organize effectively)
   - CERTIFICATIONS (if provided)

2. Use strong action verbs (Led, Developed, Achieved, Implemented, etc.)
3. Include quantifiable achievements where possible
4. Make it ATS-friendly
5. Tailor content to the target job${userData.jobDescription ? ' and job description' : ''}
6. Keep it concise but impactful
7. Use clear section headers in ALL CAPS

Format in plain text with clear section breaks. Each section header should be on its own line in ALL CAPS.`

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are an expert professional resume writer who creates compelling, ATS-optimized resumes. You output ONLY plain text without any markdown formatting or code blocks.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2500,
    })

    let resumeContent = completion.choices[0].message.content

    if (!resumeContent) {
      throw new Error('OpenAI returned empty content')
    }

    // Clean up any markdown formatting that might have slipped through
    resumeContent = resumeContent.replace(/```[\s\S]*?\n/g, '').replace(/```/g, '').trim()

    console.log('✅ OpenAI generated resume successfully!')

    // Generate unique resume ID
    const resumeId = `resume_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const timestamp = Date.now()

    console.log('📄 Generating PDFs for all 3 styles...')

    // Prepare resume data for PDF generation
    const pdfData = {
      name: userData.fullName,
      email: userData.email,
      phone: userData.phone || '',
      location: userData.location || '',
      content: resumeContent
    }

    // Generate all 3 PDF styles
    const [classicPDF, modernPDF, executivePDF] = await Promise.all([
      generateClassicPDF(pdfData),
      generateModernPDF(pdfData),
      generateExecutivePDF(pdfData)
    ])

    console.log('☁️ Uploading PDFs to S3...')

    // Upload all PDFs to S3
    const uploadPromises = [
      {
        key: `resumes/${resumeId}_classic_${timestamp}.pdf`,
        buffer: classicPDF,
        style: 'classic'
      },
      {
        key: `resumes/${resumeId}_modern_${timestamp}.pdf`,
        buffer: modernPDF,
        style: 'modern'
      },
      {
        key: `resumes/${resumeId}_executive_${timestamp}.pdf`,
        buffer: executivePDF,
        style: 'executive'
      }
    ].map(async ({ key, buffer, style }) => {
      const command = new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: key,
        Body: buffer,
        ContentType: 'application/pdf',
      })

      await s3Client.send(command)

      // Generate public URL
      const url = `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`
      
      return { style, url, key }
    })

    const uploadResults = await Promise.all(uploadPromises)

    console.log('✅ All PDFs uploaded successfully!')

    // Create download URLs object
    const downloadUrls = {
      classic: uploadResults.find(r => r.style === 'classic').url,
      modern: uploadResults.find(r => r.style === 'modern').url,
      executive: uploadResults.find(r => r.style === 'executive').url,
    }

    // Return success response
    return res.status(200).json({
      success: true,
      resumeId: resumeId,
      resumeContent: resumeContent,
      downloadUrls: downloadUrls,
      userData: {
        name: userData.fullName,
        email: userData.email,
        phone: userData.phone || '',
        location: userData.location || ''
      },
      message: 'Resume generated successfully'
    })
    
  } catch (error) {
    console.error('❌ Error in resume API:', error)
    
    // Check for specific errors
    if (error.code === 'insufficient_quota') {
      return res.status(402).json({
        success: false,
        message: 'OpenAI API quota exceeded. Please check your OpenAI account billing.'
      })
    }
    
    if (error.code === 'invalid_api_key') {
      return res.status(401).json({
        success: false,
        message: 'Invalid OpenAI API key. Please check your configuration.'
      })
    }

    if (error.name === 'CredentialsProviderError') {
      return res.status(500).json({
        success: false,
        message: 'AWS credentials are invalid. Please check your configuration.'
      })
    }

    // Generic error response
    return res.status(500).json({
      success: false,
      message: 'Failed to generate resume: ' + error.message
    })
  }
}