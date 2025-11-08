const OpenAI = require('openai')

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateResume(userData) {
  const {
    fullName,
    email,
    phone,
    location,
    jobTitle,
    jobDescription,
    experience,
    education,
    skills,
    certifications
  } = userData

  const prompt = `You are a professional resume writer. Create a compelling, ATS-optimized resume for the following person:

TARGET JOB: ${jobTitle}
${jobDescription ? `JOB DESCRIPTION: ${jobDescription}` : ''}

CANDIDATE INFORMATION:
Name: ${fullName}
Email: ${email}
Phone: ${phone || 'N/A'}
Location: ${location || 'N/A'}

WORK EXPERIENCE:
${experience}

EDUCATION:
${education}

SKILLS:
${skills}

${certifications ? `CERTIFICATIONS:\n${certifications}` : ''}

Create a professional resume with these sections:
1. Professional Summary (3-4 sentences)
2. Work Experience (bullet points with achievements)
3. Education
4. Skills
5. Certifications (if provided)

Use strong action verbs and quantifiable achievements. Make it ATS-friendly.`

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an expert resume writer with 15 years of experience.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000,
    })

    return completion.choices[0].message.content
  } catch (error) {
    console.error('OpenAI API Error:', error)
    
    return `${fullName}
${email} | ${phone || ''} | ${location || ''}

PROFESSIONAL SUMMARY
${jobTitle} with expertise in ${skills}.

WORK EXPERIENCE
${experience}

EDUCATION
${education}

SKILLS
${skills}

${certifications ? `CERTIFICATIONS\n${certifications}` : ''}`
  }
}