export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">BRH</h3>
            <p className="text-sm">
              Budi Rahman Hakim - Ruang perjumpaan pemikiran, spiritualitas, dan aksi sosial.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Beranda</a></li>
              <li><a href="#" className="hover:text-white transition">Biografi</a></li>
              <li><a href="#" className="hover:text-white transition">Karya</a></li>
              <li><a href="#" className="hover:text-white transition">Kontak</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kategori</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Artikel</a></li>
              <li><a href="#" className="hover:text-white transition">Jurnal</a></li>
              <li><a href="#" className="hover:text-white transition">Buku</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: budi.rahman@uinjkt.ac.id</li>
              <li>Telepon: +62 (21) XXXX XXXX</li>
              <li>Lokasi: Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © 2024 Budi Rahman Hakim. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
