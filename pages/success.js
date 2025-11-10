import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Success() {
  const [resumeData, setResumeData] = useState(null)

  useEffect(() => {
    // In a real app, you'd fetch the resume data from your backend
    // For now, we'll create a sample resume
    const sampleResume = {
      name: "Sample Resume",
      content: `JOHN DOE
john@example.com | (555) 123-4567 | New York, NY

PROFESSIONAL SUMMARY
Results-driven professional with expertise in delivering high-quality solutions and exceeding expectations.

WORK EXPERIENCE
Senior Professional | Example Company | 2020-Present
- Led successful projects resulting in measurable improvements
- Collaborated with cross-functional teams to achieve objectives
- Implemented innovative solutions to complex challenges

EDUCATION
Bachelor's Degree | University Name | 2016-2020

SKILLS
- Professional Communication
- Project Management
- Problem Solving
- Team Leadership`
    }
    setResumeData(sampleResume)
  }, [])

  const downloadPDF = async () => {
    try {
      const { jsPDF } = await import('jspdf')
      const doc = new jsPDF()
      
      // Add content to PDF
      const lines = resumeData.content.split('\n')
      let yPosition = 20
      
      lines.forEach((line) => {
        if (yPosition > 280) {
          doc.addPage()
          yPosition = 20
        }
        doc.text(line, 20, yPosition)
        yPosition += 7
      })
      
      // Save the PDF
      doc.save('resume.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again.')
    }
  }

  const downloadText = () => {
    if (!resumeData) return
    
    const blob = new Blob([resumeData.content], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'resume.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  return (
    <>
      <Head>
        <title>Success - Smart Resume Solutions</title>
      </Head>

      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Payment Successful!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your resume has been generated and is ready to download.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Download Your Resume</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={downloadPDF}
                  className="btn-primary flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </button>
                <button 
                  onClick={downloadText}
                  className="btn-secondary flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Text
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                A copy has also been sent to your email address.
              </p>
            </div>

            <div className="text-left mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary-600 text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-600">Review your resume and make any personal adjustments if needed</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary-600 text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-600">Save it in multiple formats for different application systems</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary-600 text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-600">Start applying to your dream jobs with confidence!</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Pro Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Tailor your resume slightly for each job application</li>
                <li>• Use keywords from the job description</li>
                <li>• Keep your resume to 1-2 pages maximum</li>
                <li>• Proofread carefully before submitting</li>
                <li>• Save as PDF to preserve formatting</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary">
                Back to Home
              </Link>
              <Link href="/generate" className="btn-secondary">
                Create Another Resume
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                Need help? <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">Contact our support team</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}