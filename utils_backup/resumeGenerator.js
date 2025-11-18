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

  // Check if OpenAI API key is available
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'sk-proj-your-key-here') {
    console.log('OpenAI not configured, using basic formatting');
    
    // Return formatted resume without AI if no API key
    return formatBasicResume(userData);
  }

  try {
    // Dynamic import of OpenAI
    const { default: OpenAI } = await import('openai');
    
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

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

Use strong action verbs and quantifiable achievements. Make it ATS-friendly.`;

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
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    
    // Fallback to basic formatting if API fails
    return formatBasicResume(userData);
  }
}

// Fallback function to format resume without AI
function formatBasicResume(userData) {
  const {
    fullName,
    email,
    phone,
    location,
    jobTitle,
    experience,
    education,
    skills,
    certifications
  } = userData;

  return `PROFESSIONAL SUMMARY
${jobTitle} seeking to leverage experience and skills in a challenging role.

WORK EXPERIENCE
${experience}

EDUCATION
${education}

SKILLS
${skills}

${certifications ? `CERTIFICATIONS\n${certifications}` : ''}`;
}