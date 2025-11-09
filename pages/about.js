import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Smart Resume Solutions</title>
      </Head>

      <Navbar />

      <div className="bg-white">
        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Smart Resume Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering job seekers with cutting-edge AI technology to create resumes that open doors
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in 2023, Smart Resume Solutions was born from a simple observation: talented 
                  professionals were struggling to land interviews despite having impressive qualifications.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We realized the problem wasn't their experience—it was how they presented it. Resumes 
                  were either too generic, poorly formatted, or missing keywords that Applicant Tracking 
                  Systems (ATS) look for.
                </p>
                <p className="text-lg text-gray-600">
                  That's when we decided to leverage artificial intelligence to level the playing field. 
                  Today, we've helped over 50,000 job seekers transform their careers with AI-powered, 
                  ATS-optimized resumes.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-purple-100 rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-2xl font-bold text-gray-900">50,000+ Success Stories</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To democratize access to professional-quality resume writing by combining the power 
                  of artificial intelligence with expert career knowledge, helping every job seeker 
                  present their best self to potential employers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become the world's most trusted career advancement platform, where technology 
                  and human expertise combine to create opportunities for millions of professionals 
                  to achieve their career dreams.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  ✨
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push boundaries with AI technology to deliver cutting-edge solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  🤝
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of honesty and transparency in everything we do.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  ⭐
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We're committed to delivering exceptional quality in every resume we generate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}