import { Link } from 'react-router-dom'
import logo from '../images/main-logo.jpg' // Put your company logo image here

export default function Navbar() {
  return (
    <nav className="bg-[#001F3F] text-white px-6 py-4 flex flex-wrap items-center justify-between">
      {/* Left side: Logo and company info */}
      <Link to="/" className="flex items-center space-x-3">
        <img src={logo} alt="Company Logo" className="h-10 w-10 object-contain" />
        <div>
          <h1 className="font-bold text-xl">MyTransfers</h1>
          <p className="text-sm font-light">Established 2025</p>
        </div>
      </Link>

      {/* Right side: Nav links */}
      <div className="space-x-8 text-lg font-semibold flex flex-wrap">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/transfers" className="hover:text-gray-300">Transfers</Link>
        <Link to="/fleet" className="hover:text-gray-300">Fleet</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      </div>
    </nav>
  )
}
