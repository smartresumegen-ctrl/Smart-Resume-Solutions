import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Head>
        <title>Smart Resume Solutions - AI-Powered Resume Generator</title>
        <meta name="description" content="Get 3 AI-powered professional resumes for $9.99. Stop applying with boring resumes and start getting more interviews today." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navbar */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold text-blue-600">Smart Resume Solutions</div>
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a>
              </div>
              <Link href="/generate" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Generate Resume
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ⚡ Get Your Resume in 5 Minutes
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Stop Applying With a
                <span className="text-blue-600"> Boring Resume</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
                Get 3 AI-powered, professionally designed resumes for just <span className="font-bold text-blue-600">$9.99</span>. 
                Download instantly and start getting more interviews today.
              </p>
              <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                No subscription. No hidden fees. Pay once, download forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/generate" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg inline-block">
                  🚀 Create My Resume Now - $9.99
                </Link>
                <button 
                  onClick={() => setShowModal(true)}
                  className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition"
                >
                  👀 See Sample Resumes
                </button>
              </div>
              <p className="text-sm text-gray-500">✓ No credit card needed to preview</p>
            </div>

            {/* Social Proof Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">2,847</div>
                <div className="text-gray-600 font-medium">Resumes Created This Month</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
                <div className="text-gray-600 font-medium">Average Rating ⭐⭐⭐⭐⭐</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">3x</div>
                <div className="text-gray-600 font-medium">More Interview Callbacks</div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">From Generic to Outstanding in Minutes</h2>
              <p className="text-xl text-gray-600">See the difference AI-powered writing makes</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="border-4 border-red-200 rounded-lg p-6 bg-gray-50">
                <div className="bg-red-500 text-white px-4 py-2 rounded-t-lg -mx-6 -mt-6 mb-4 font-semibold text-center">
                  ❌ BEFORE (Generic Resume)
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <p className="font-semibold">EXPERIENCE</p>
                  <p>• Responsible for sales</p>
                  <p>• Worked with customers</p>
                  <p>• Handled daily tasks</p>
                  <p>• Managed team projects</p>
                  <p className="text-red-600 font-semibold mt-4">❌ Vague, boring, gets ignored by ATS systems</p>
                </div>
              </div>

              {/* After */}
              <div className="border-4 border-green-200 rounded-lg p-6 bg-green-50">
                <div className="bg-green-500 text-white px-4 py-2 rounded-t-lg -mx-6 -mt-6 mb-4 font-semibold text-center">
                  ✅ AFTER (AI-Optimized Resume)
                </div>
                <div className="space-y-3 text-sm text-gray-700">
                  <p className="font-semibold">PROFESSIONAL EXPERIENCE</p>
                  <p>• Drove 35% revenue growth through strategic B2B partnership development</p>
                  <p>• Enhanced customer satisfaction scores by 28% via data-driven service improvements</p>
                  <p>• Led cross-functional team of 8 in delivering $2M+ project under budget</p>
                  <p className="text-green-600 font-semibold mt-4">✅ Specific, impressive, ATS-optimized with keywords</p>
                </div>
              </div>
            </div>

            {/* View Samples CTA */}
            <div className="text-center mt-12">
              <button 
                onClick={() => setShowModal(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg"
              >
                👀 View All 3 Sample Resumes
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Real People, Real Results</h2>
              <p className="text-xl text-gray-600">Join thousands who've transformed their job search</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    S
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">Sarah M.</div>
                    <div className="text-sm text-gray-500">Software Engineer</div>
                  </div>
                </div>
                <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 italic">"Got 3 interviews within a week of using this resume! The AI really knows how to highlight your strengths. Worth every penny!"</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    M
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">Michael T.</div>
                    <div className="text-sm text-gray-500">Marketing Manager</div>
                  </div>
                </div>
                <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 italic">"I've been job hunting for months with no luck. Used this service and landed my dream job in 3 weeks. The templates are so professional!"</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    J
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold">Jessica R.</div>
                    <div className="text-sm text-gray-500">Recent Graduate</div>
                  </div>
                </div>
                <div className="text-yellow-400 mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 italic">"As a new grad with little experience, I was nervous. This AI made me sound like a rockstar! Already got 2 job offers."</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Resume in 3 Simple Steps</h2>
              <p className="text-xl text-gray-600">No design skills needed. Takes less than 5 minutes.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-semibold mb-3">Fill Quick Form</h3>
                <p className="text-gray-600 text-lg">
                  Enter your work history, skills, and education. Takes 3-4 minutes max.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-semibold mb-3">AI Creates 3 Styles</h3>
                <p className="text-gray-600 text-lg">
                  Our AI generates professional content and designs 3 different resume templates instantly.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-semibold mb-3">Download & Apply</h3>
                <p className="text-gray-600 text-lg">
                  Download all 3 PDFs immediately. Start applying to jobs in minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Simple, Honest Pricing</h2>
            <p className="text-xl text-blue-100 mb-12">One payment. Three resumes. Forever yours.</p>

            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
              <div className="mb-6">
                <div className="text-5xl font-bold text-blue-600 mb-2">$9.99</div>
                <div className="text-gray-500">One-time payment</div>
              </div>

              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>3 Professional Resume Templates (Classic, Modern, Executive)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>AI-Powered Content Writing</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>ATS-Optimized Keywords</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Instant PDF Downloads</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Download Links Emailed to You</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>No Subscription or Hidden Fees</span>
                </div>
              </div>

              <Link href="/generate" className="block w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg">
                Generate My Resume Now
              </Link>
              <p className="text-sm text-gray-500 mt-4">Secure payment via Stripe</p>
              
              <button 
                onClick={() => setShowModal(true)}
                className="mt-4 text-blue-600 hover:text-blue-700 font-semibold text-sm"
              >
                👀 View sample resumes first
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-semibold text-lg cursor-pointer">
                  How is this different from free resume builders?
                </summary>
                <p className="mt-3 text-gray-600">
                  Free builders use basic templates with no AI. We use GPT-4 to write professional, ATS-optimized content specifically tailored to YOUR experience. Plus you get 3 premium templates, not just one generic design.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-semibold text-lg cursor-pointer">
                  What does "ATS-optimized" mean?
                </summary>
                <p className="mt-3 text-gray-600">
                  90% of companies use Applicant Tracking Systems (ATS) to scan resumes before humans see them. Our AI formats your resume with the right keywords and structure so it passes these scans and reaches hiring managers.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-semibold text-lg cursor-pointer">
                  Can I edit the resume after downloading?
                </summary>
                <p className="mt-3 text-gray-600">
                  Yes! You download PDF files that you can edit using free tools like Adobe Acrobat Reader or online PDF editors. Make any changes you want after purchase.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-semibold text-lg cursor-pointer">
                  What if I'm not satisfied?
                </summary>
                <p className="mt-3 text-gray-600">
                  We offer a 100% money-back guarantee. If you're not happy with your resumes, email us within 7 days for a full refund, no questions asked.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-semibold text-lg cursor-pointer">
                  Do I need to create an account?
                </summary>
                <p className="mt-3 text-gray-600">
                  No account needed! Just fill out the form, pay, and download. We'll email you the download links too, so you can access them anytime.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md">
                <summary className="font-semibold text-lg cursor-pointer">
                  How long does it take to generate?
                </summary>
                <p className="mt-3 text-gray-600">
                  Usually 30-60 seconds after you submit the form. You'll be redirected to a page where you can download all 3 resumes immediately.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Land More Interviews?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 2,847 job seekers who upgraded their resumes this month
            </p>
            <Link href="/generate" className="inline-block bg-white text-blue-600 font-bold py-4 px-12 rounded-lg hover:bg-gray-100 transition text-lg shadow-xl">
              Create My Resume for $9.99
            </Link>
            <p className="text-blue-100 mt-4 text-sm">✓ Instant download ✓ 3 professional templates ✓ Money-back guarantee</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4 text-white font-semibold text-xl">Smart Resume Solutions</div>
            <div className="space-x-6 mb-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
            <p className="text-sm">© 2025 Smart Resume Solutions. All rights reserved.</p>
          </div>
        </footer>

        {/* Sample Resume Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl z-10">
                <h2 className="text-2xl font-bold text-gray-900">Sample Resume Styles</h2>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-3xl font-bold leading-none"
                >
                  ×
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <p className="text-center text-gray-600 mb-8">
                  All 3 styles are included with your $9.99 purchase. Choose your favorite or use all three for different job applications!
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Classic Style */}
                  <div className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 transition">
                    <div className="bg-gray-100 p-4 border-b">
                      <h3 className="font-bold text-lg text-gray-900">Classic Style</h3>
                      <p className="text-sm text-gray-600">Traditional, ATS-friendly format</p>
                    </div>
                    <div className="p-4">
                      <div className="mb-4 border border-gray-200 rounded overflow-hidden">
                        <img 
                          src="https://smart-resume-resolutions-pdfs.s3.us-east-2.amazonaws.com/Classic_Example_Resume.png"
                          alt="Classic Resume Style Preview"
                          className="w-full h-auto"
                        />
                      </div>
                      <a 
                        href="https://smart-resume-resolutions-pdfs.s3.us-east-2.amazonaws.com/sample_resume_classic_style.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                      >
                        View Full PDF
                      </a>
                    </div>
                  </div>

                  {/* Modern Style */}
                  <div className="border-2 border-blue-500 rounded-lg overflow-hidden">
                    <div className="bg-blue-50 p-4 border-b border-blue-200">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-lg text-gray-900">Modern Style</h3>
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">POPULAR</span>
                      </div>
                      <p className="text-sm text-gray-600">Clean, contemporary design</p>
                    </div>
                    <div className="p-4">
                      <div className="mb-4 border border-blue-200 rounded overflow-hidden">
                        <img 
                          src="https://smart-resume-resolutions-pdfs.s3.us-east-2.amazonaws.com/Modern_Example_Resume.png"
                          alt="Modern Resume Style Preview"
                          className="w-full h-auto"
                        />
                      </div>
                      <a 
                        href="https://smart-resume-resolutions-pdfs.s3.us-east-2.amazonaws.com/sample_resume_modern_style.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                      >
                        View Full PDF
                      </a>
                    </div>
                  </div>

                  {/* Executive Style */}
                  <div className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-500 transition">
                    <div className="bg-gray-100 p-4 border-b">
                      <h3 className="font-bold text-lg text-gray-900">Executive Style</h3>
                      <p className="text-sm text-gray-600">Professional, leadership-focused</p>
                    </div>
                    <div className="p-4">
                      <div className="mb-4 border border-gray-200 rounded overflow-hidden">
                        <img 
                          src="https://smart-resume-resolutions-pdfs.s3.us-east-2.amazonaws.com/Executive_Example_Resume.png"
                          alt="Executive Resume Style Preview"
                          className="w-full h-auto"
                        />
                      </div>
                      <a 
                        href="https://smart-resume-resolutions-pdfs.s3.us-east-2.amazonaws.com/sample_resume_executive_style.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                      >
                        View Full PDF
                      </a>
                    </div>
                  </div>
                </div>

                {/* CTA in Modal */}
                <div className="mt-8 text-center bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4 font-semibold">Love what you see? Get all 3 styles for just $9.99!</p>
                  <Link 
                    href="/generate"
                    onClick={() => setShowModal(false)}
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                  >
                    Create My Resume Now →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}