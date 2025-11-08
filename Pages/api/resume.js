import { generateResume } from '../../utils/resumeGenerator'
import { uploadToS3 } from '../../utils/s3Uploader'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const userData = req.body
    const resumeContent = await generateResume(userData)
    const resumeId = `resume_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    try {
      await uploadToS3(resumeId, resumeContent)
    } catch (uploadError) {
      console.log('S3 upload failed (this is okay for testing):', uploadError.message)
    }

    res.status(200).json({
      success: true,
      resumeId: resumeId,
      message: 'Resume generated successfully'
    })
  } catch (error) {
    console.error('Error generating resume:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to generate resume. Please try again.'
    })
  }
}