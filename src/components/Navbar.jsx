import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl hover:text-gray-300">MyTransfers</Link>
      <div className="space-x-6">
        <Link to="/transfers" className="hover:text-gray-300">Transfers</Link>
        <Link to="/fleet" className="hover:text-gray-300">Fleet</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      </div>
    </nav>
  )
}
