import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Success() {
  const router = useRouter()
  const { session_id } = router.query
  const [resumeData, setResumeData] = useState(null)
  const [loading, setLoading] = useState(true)
  const hasLoadedData = useRef(false)

  useEffect(() => {
    // Prevent running twice in dev mode
    if (hasLoadedData.current) {
      console.log('🔒 Already loaded data, skipping...')
      return
    }

    console.log('🔍 Success page loaded - checking for resume data...')
    
    if (typeof window !== 'undefined') {
      const storedData = sessionStorage.getItem('resumeData')
      console.log('🔍 Raw data from sessionStorage:', storedData)

      if (storedData) {
        try {
          const parsed = JSON.parse(storedData)
          console.log('✅ Successfully parsed resume data:', parsed)
          setResumeData(parsed)
          hasLoadedData.current = true
          
          // Clear from storage after successfully loading
          sessionStorage.removeItem('resumeData')
          console.log('✅ Resume data set and cleared from storage!')
        } catch (error) {
          console.error('❌ Error parsing resume data:', error)
        }
      } else {
        console.log('⚠️ No resume data found in sessionStorage')
        
        // Use sample data as fallback
        console.log('⚠️ Using sample resume data')
        setResumeData({
          content: `PROFESSIONAL SUMMARY
Experienced professional seeking new opportunities to leverage skills and expertise.

WORK EXPERIENCE
• Sample work experience entry
• Demonstrated results and achievements
• Led successful projects and initiatives

EDUCATION
• Bachelor's Degree in Business Administration
• Relevant coursework and certifications

SKILLS
• Communication and Leadership
• Project Management
• Technical Proficiency`,
          name: 'Sample User',
          email: 'sample@example.com',
          phone: '(555) 123-4567',
          location: 'Sample City, ST',
          resumeId: 'sample_resume_id',
          downloadUrls: {
            classic: '#',
            modern: '#',
            executive: '#'
          }
        })
        hasLoadedData.current = true
      }
    }
    
    setLoading(false)
  }, [])

  const handleDownloadPDF = (style) => {
    if (!resumeData || !resumeData.downloadUrls) {
      alert('Download URLs not available')
      return
    }

    const url = resumeData.downloadUrls[style]
    if (url && url !== '#') {
      window.open(url, '_blank')
    } else {
      alert('PDF not available yet. Please try again.')
    }
  }

  const handleDownloadTXT = () => {
    if (!resumeData) return

    const element = document.createElement('a')
    const file = new Blob([resumeData.content], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `resume_${resumeData.resumeId}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleCopy = () => {
    if (!resumeData) return
    
    navigator.clipboard.writeText(resumeData.content)
    alert('Resume copied to clipboard!')
  }

  if (loading) {
    return (
      <>
        <Head>
          <title>Loading... - Smart Resume Solutions</title>
        </Head>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading your resume...</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Success - Your Resume is Ready! - Smart Resume Solutions</title>
      </Head>

      <Navbar />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">🎉 Payment Successful!</h1>
              <p className="text-gray-600 mb-4">Your AI-generated resume is ready in 3 professional styles</p>
              {resumeData && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-900">
                    <strong>Resume ID:</strong> {resumeData.resumeId}
                  </p>
                  <p className="text-sm text-blue-700 mt-1">
                    Save this ID for your records
                  </p>
                </div>
              )}
            </div>

            {/* Contact Info Display */}
            {resumeData && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Resume Generated For:</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Name:</strong> {resumeData.name || 'Not provided'}</p>
                  <p><strong>Email:</strong> {resumeData.email || 'Not provided'}</p>
                  {resumeData.phone && <p><strong>Phone:</strong> {resumeData.phone}</p>}
                  {resumeData.location && <p><strong>Location:</strong> {resumeData.location}</p>}
                </div>
              </div>
            )}
          </div>

          {/* Resume Styles Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Choose Your Style</h2>
            <p className="text-gray-600 text-center mb-6">Select and download your preferred resume format</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Classic Style */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Classic</h3>
                  <p className="text-sm text-gray-600 mb-4">Traditional black & white format. Perfect for conservative industries and ATS systems.</p>
                </div>
                <button
                  onClick={() => handleDownloadPDF('classic')}
                  className="w-full btn-primary mb-2"
                >
                  📄 Download PDF
                </button>
              </div>

              {/* Modern Style */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-500 hover:border-blue-600 transition-colors">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Modern</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-2">RECOMMENDED</span>
                  <p className="text-sm text-gray-600 mb-4">Contemporary design with blue accents. Great for tech and creative roles.</p>
                </div>
                <button
                  onClick={() => handleDownloadPDF('modern')}
                  className="w-full btn-primary mb-2"
                >
                  📄 Download PDF
                </button>
              </div>

              {/* Executive Style */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200 hover:border-primary-500 transition-colors">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Executive</h3>
                  <p className="text-sm text-gray-600 mb-4">Bold, premium format. Ideal for senior leadership and C-suite positions.</p>
                </div>
                <button
                  onClick={() => handleDownloadPDF('executive')}
                  className="w-full btn-primary mb-2"
                >
                  📄 Download PDF
                </button>
              </div>
            </div>
          </div>

          {/* Text Options */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Options</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownloadTXT}
                className="btn-secondary inline-flex items-center justify-center flex-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download as Text File
              </button>
              <button
                onClick={handleCopy}
                className="btn-secondary inline-flex items-center justify-center flex-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                Copy to Clipboard
              </button>
            </div>
          </div>

          {/* Resume Preview */}
          {resumeData && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Resume Preview</h2>
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-gray-800 bg-gray-50 p-6 rounded-lg border border-gray-200 text-sm leading-relaxed">
                  {resumeData.content}
                </pre>
              </div>
            </div>
          )}

          {/* What's Next */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">What's Next?</h3>
            <ul className="text-blue-800 space-y-2">
              <li>✓ Download your preferred resume style (or all three!)</li>
              <li>✓ Customize further in your word processor if needed</li>
              <li>✓ Start applying to your dream jobs</li>
              <li>✓ A confirmation email has been sent to your inbox</li>
            </ul>
          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <button
              onClick={() => router.push('/')}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}