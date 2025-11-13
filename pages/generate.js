import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Generate() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    jobTitle: '',
    jobDescription: '',
    experience: '',
    education: '',
    skills: '',
    certifications: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Generate resume
      const response = await fetch('/api/resume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        // Redirect to checkout
        const checkoutResponse = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            resumeId: data.resumeId,
            email: formData.email
          }),
        })

        const checkoutData = await checkoutResponse.json()

        if (checkoutData.url) {
          window.location.href = checkoutData.url
        }
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Generate Resume - Smart Resume Solutions</title>
      </Head>

      <Navbar />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Generate Your Resume</h1>
            <p className="text-gray-600 mb-8">Fill in your information and let AI create your perfect resume</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="New York, NY"
                    />
                  </div>
                </div>
              </div>

              {/* Job Target */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Target Job</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      required
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="e.g., Senior Software Engineer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Description (paste the full job posting)
                    </label>
                    <textarea
                      name="jobDescription"
                      value={formData.jobDescription}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Paste the complete job description here to help AI tailor your resume..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Work Experience</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Details *
                  </label>
                  <textarea
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    rows="8"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="List your work experience including:&#10;- Company name and position&#10;- Dates worked&#10;- Key responsibilities and achievements&#10;- Technologies/tools used&#10;&#10;Example:&#10;Software Engineer at Tech Corp (2020-2023)&#10;- Developed web applications using React and Node.js&#10;- Led team of 5 developers&#10;- Increased app performance by 40%"
                  ></textarea>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Education Details *
                  </label>
                  <textarea
                    name="education"
                    required
                    value={formData.education}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="List your educational background:&#10;- Degree and major&#10;- University name&#10;- Graduation year&#10;- GPA (if impressive)&#10;- Relevant coursework"
                  ></textarea>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Skills *
                  </label>
                  <textarea
                    name="skills"
                    required
                    value={formData.skills}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="List your skills (separate with commas or new lines):&#10;- Technical skills&#10;- Soft skills&#10;- Languages&#10;- Tools and technologies"
                  ></textarea>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Certifications (Optional)</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Certifications & Awards
                  </label>
                  <textarea
                    name="certifications"
                    value={formData.certifications}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="List any certifications, awards, or achievements"
                  ></textarea>
                </div>
              </div>

              {/* Pricing Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-900 font-medium">
                  💳 Price: $9.99 for your AI-generated resume
                </p>
                <p className="text-blue-700 text-sm mt-1">
                  You'll be redirected to secure payment after submitting your information
                </p>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Generate Resume & Proceed to Payment'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}