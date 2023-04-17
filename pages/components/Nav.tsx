import Link from 'next/link'
import Logo from '../../public/letter-c-1641882.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-10 py-4 ${scrolled ? 'bg-white shadow-md transition-all duration-500' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <Image src={Logo} alt="Task Wizard logo" className="h-6 w-6 mr-2" width={14} height={14} />
            <span className={`${scrolled ? 'text-gray-800' : 'text-white'} text-lg font-bold transition-colors duration-500`}>Task Wizard</span>
          </a>
        </Link>

        <div className="flex items-center">
        <button className={`border ${scrolled ? 'text-black' : 'text-white'} rounded-full text-sm font-medium py-2 px-4 mr-4 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
          Post a Job
        </button>


          <Link href="/register" legacyBehavior>
          <button className="bg-gradient-to-br from-blue-200 to-green-200 rounded-full text-sm font-medium py-2 px-4 mr-4">
            Register
          </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
