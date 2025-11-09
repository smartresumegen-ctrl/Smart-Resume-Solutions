import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Smart Resume Solutions</title>
      </Head>

      <Navbar />

      <div className="bg-white">
        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions to help you land your dream job
            </p>
          </div>
        </div>

        {/* Main Service */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-12 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Resume Generation</h2>
                <p className="text-xl text-gray-600">Our flagship service that transforms your career story</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    🤖
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
                  <p className="text-gray-600">
                    Our AI analyzes job descriptions and matches them with your experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    ✍️
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Professional Writing</h3>
                  <p className="text-gray-600">
                    Generates compelling content that highlights your achievements
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    🎯
                  </div>
                  <h3 className="text-lg font-semibold mb-2">ATS Optimization</h3>
                  <p className="text-gray-600">
                    Ensures your resume passes automated screening systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary-600 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of successful job seekers who've transformed their careers
            </p>
            <Link href="/generate" className="inline-block bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition text-lg">
              Generate Your Resume Now
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}