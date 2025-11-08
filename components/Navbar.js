import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">Smart Resume Solutions</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 transition">
              Services
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary-600 transition">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition">
              Contact
            </Link>
            <Link href="/generate" className="btn-primary">
              Generate Resume
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded">
              About
            </Link>
            <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded">
              Services
            </Link>
            <Link href="/pricing" className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded">
              Pricing
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded">
              Contact
            </Link>
            <Link href="/generate" className="block px-3 py-2 bg-primary-600 text-white rounded hover:bg-primary-700">
              Generate Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}