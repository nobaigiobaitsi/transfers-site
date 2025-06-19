import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </>
  )
}
