const AWS = require('aws-sdk')

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION || 'us-east-1',
})

export async function uploadToS3(resumeId, resumeContent) {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME || 'smart-resume-solutions',
    Key: `resumes/${resumeId}.txt`,
    Body: resumeContent,
    ContentType: 'text/plain',
  }

  try {
    const result = await s3.upload(params).promise()
    console.log('Resume uploaded to S3:', result.Location)
    return result.Location
  } catch (error) {
    console.error('S3 Upload Error:', error)
    throw error
  }
}

export async function downloadFromS3(resumeId) {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME || 'smart-resume-solutions',
    Key: `resumes/${resumeId}.txt`,
  }

  try {
    const result = await s3.getObject(params).promise()
    return result.Body.toString('utf-8')
  } catch (error) {
    console.error('S3 Download Error:', error)
    throw error
  }
}