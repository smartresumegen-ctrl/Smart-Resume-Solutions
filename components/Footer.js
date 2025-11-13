import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Smart Resume Solutions</h3>
            <p className="text-gray-400 mb-4">
              Transform your career with AI-powered resume generation. 
              Create professional, ATS-optimized resumes in minutes.
            </p>
            <div className="text-gray-400">
              <p>Email: <a href="mailto:smartresumegen@gmail.com" className="text-primary-400 hover:text-primary-300">smartresumegen@gmail.com</a></p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition">Pricing</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Smart Resume Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}