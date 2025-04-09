"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Academics',
      href: '/academics',
      submenu: [
        { name: 'Engineering', href: '/academics/engineering' },
        { name: 'Science & Humanities', href: '/academics/science-humanities' },
        { name: 'Research Centers', href: '/academics/research-centers' },
      ]
    },
    { 
      name: 'Admissions',
      href: '/admissions',
      submenu: [
        { name: 'UG Programs', href: '/admissions/undergraduate' },
        { name: 'PG Programs', href: '/admissions/postgraduate' },
        { name: 'International', href: '/admissions/international' },
      ]
    },
    { name: 'Research', href: '/research' },
    { name: 'Campus Life', href: '/campus-life' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[#800000]">SIST</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-[#800000] px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                {item.submenu && (
                  <div className="absolute z-10 hidden group-hover:block w-48 bg-white rounded-md shadow-lg py-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button className="bg-[#800000] hover:bg-[#600000] text-white">
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full mt-4 bg-[#800000] hover:bg-[#600000] text-white">
                Login
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header