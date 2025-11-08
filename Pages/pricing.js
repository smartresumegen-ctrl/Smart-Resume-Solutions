import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - Smart Resume Solutions</title>
      </Head>

      <Navbar />

      <div className="bg-white">
        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One affordable price for a professionally crafted, ATS-optimized resume
            </p>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">AI-Generated Resume</h2>
                <p className="text-blue-100 mb-8">Everything you need to land your dream job</p>
                
                <div className="mb-8">
                  <div className="text-6xl font-bold text-white mb-2">$29.99</div>
                  <div className="text-blue-100">One-time payment</div>
                </div>

                <Link href="/generate" className="inline-block bg-white text-primary-600 font-semibold py-4 px-12 rounded-lg hover:bg-gray-100 transition text-lg mb-12">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary-600 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Land More Interviews?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get your AI-powered resume today for just $29.99
            </p>
            <Link href="/generate" className="inline-block bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition text-lg">
              Start Now
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}