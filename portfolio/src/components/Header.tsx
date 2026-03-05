import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-gray-900">
            BRH
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="#biografi" className="text-gray-700 hover:text-blue-600 transition">
              Biografi
            </Link>
            <Link href="#buku" className="text-gray-700 hover:text-blue-600 transition">
              Buku
            </Link>
            <Link href="#artikel" className="text-gray-700 hover:text-blue-600 transition">
              Artikel
            </Link>
            <Link href="#jurnal" className="text-gray-700 hover:text-blue-600 transition">
              Jurnal
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-blue-600 transition">
              BRH FAQ
            </Link>
            <Link href="#kontak" className="text-gray-700 hover:text-blue-600 transition">
              Kontak
            </Link>
            <Link href="/login" className="text-blue-600 font-semibold hover:text-blue-700 transition">
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
