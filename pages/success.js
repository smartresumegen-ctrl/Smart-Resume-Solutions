import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useReactToPrint } from 'react-to-print'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ResumeTemplate from '../components/ResumeTemplate'

export default function Success() {
  const [resumeData, setResumeData] = useState(null)
  const [selectedTemplate, setSelectedTemplate] = useState('modern')
  const componentRef = useRef()

  useEffect(() => {
    // Sample resume data - in production, this would come from your API
    const sampleResume = {
      name: "JOHN DOE",
      email: "john.doe@email.com",
      phone: "(555) 123-4567",
      location: "New York, NY",
      content: `PROFESSIONAL SUMMARY
Accomplished professional with 5+ years of experience driving results and exceeding expectations. Proven track record of leadership, innovation, and delivering high-impact solutions.

WORK EXPERIENCE
Senior Project Manager | Tech Innovations Inc.
January 2021 - Present
- Led cross-functional team of 12 members to deliver $2M project 3 weeks ahead of schedule
- Implemented agile methodologies resulting in 40% increase in team productivity
- Managed stakeholder relationships and presented quarterly reports to C-suite executives
- Reduced project costs by 25% through strategic vendor negotiations

Project Coordinator | Digital Solutions LLC
June 2018 - December 2020
- Coordinated 15+ concurrent projects with budgets ranging from $50K to $500K
- Developed project documentation and maintained 98% on-time delivery rate
- Trained and mentored 8 junior team members on project management best practices
- Streamlined communication processes reducing meeting time by 30%

EDUCATION
Bachelor of Science in Business Administration
University of California, Berkeley
Graduated: May 2018 | GPA: 3.8/4.0

SKILLS
Project Management • Agile/Scrum • Stakeholder Relations • Budget Management • Risk Analysis • Team Leadership • Microsoft Project • JIRA • Salesforce • Data Analysis • Strategic Planning

CERTIFICATIONS
- Project Management Professional (PMP) - PMI, 2021
- Certified ScrumMaster (CSM) - Scrum Alliance, 2020
- Six Sigma Green Belt - ASQ, 2019`
    }
    setResumeData(sampleResume)
  }, [])

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Resume',
  })

  const downloadText = () => {
    if (!resumeData) return
    
    const fullContent = `${resumeData.name}\n${resumeData.email} | ${resumeData.phone} | ${resumeData.location}\n\n${resumeData.content}`
    const blob = new Blob([fullContent], { type: 'text/plain' })
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Actions */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-xl p-8 sticky top-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  Success!
                </h1>
                <p className="text-gray-600 mb-6 text-center text-sm">
                  Your resume is ready
                </p>

                {/* Template Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Choose Template:
                  </label>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedTemplate('modern')}
                      className={`w-full py-3 px-4 rounded-lg border-2 transition ${
                        selectedTemplate === 'modern'
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="font-semibold">Modern</div>
                      <div className="text-xs text-gray-500">Clean & contemporary</div>
                    </button>
                    <button
                      onClick={() => setSelectedTemplate('classic')}
                      className={`w-full py-3 px-4 rounded-lg border-2 transition ${
                        selectedTemplate === 'classic'
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="font-semibold">Classic</div>
                      <div className="text-xs text-gray-500">Traditional & professional</div>
                    </button>
                    <button
                      onClick={() => setSelectedTemplate('professional')}
                      className={`w-full py-3 px-4 rounded-lg border-2 transition ${
                        selectedTemplate === 'professional'
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="font-semibold">Professional</div>
                      <div className="text-xs text-gray-500">Balanced & elegant</div>
                    </button>
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="space-y-3 mb-6">
                  <button 
                    onClick={handlePrint}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </button>
                  <button 
                    onClick={downloadText}
                    className="w-full btn-secondary flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Text
                  </button>
                </div>

                {/* Pro Tips */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">💡 Pro Tips</h3>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li>• Save as PDF to preserve formatting</li>
                    <li>• Tailor for each job application</li>
                    <li>• Proofread carefully before sending</li>
                    <li>• Keep to 1-2 pages maximum</li>
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Link href="/" className="block w-full text-center btn-secondary">
                    Back to Home
                  </Link>
                  <Link href="/generate" className="block w-full text-center text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Create Another Resume
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Resume Preview</h2>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <div style={{ transform: 'scale(0.75)', transformOrigin: 'top left', width: '133.33%' }}>
                    <div ref={componentRef}>
                      {resumeData && (
                        <ResumeTemplate 
                          resumeData={resumeData}
                          template={selectedTemplate}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}