import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LibraryPage() {
  const books = [
    {
      id: 1,
      title: "Pendidikan Islam di Era Digital",
      description: "Buku ini mengupas tuntas tentang bagaimana pendidikan Islam dapat beradaptasi dengan perkembangan teknologi digital saat ini.",
      year: 2022,
      publisher: "Penerbit Akademik Iminda",
      isbn: "978-623-1234-56-7",
      pages: 320,
      category: "Pendidikan Islam",
      cover: "/book-cover-1.jpg",
      price: "Rp 85.000"
    },
    {
      id: 2,
      title: "Kurikulum dan Pembelajaran Berkelanjutan",
      description: "Panduan komprehensif untuk pengembangan kurikulum yang dapat berkembang sesuai dengan kebutuhan zaman.",
      year: 2019,
      publisher: "Jakarta Publishing House",
      isbn: "978-602-1234-89-0",
      pages: 280,
      category: "Kurikulum",
      cover: "/book-cover-2.jpg",
      price: "Rp 75.000"
    },
    {
      id: 3,
      title: "Inovasi Strategi Pembelajaran Kontekstual",
      description: "Pendekatan baru dalam pembelajaran yang menghubungkan teori dengan praktik kehidupan sehari-hari.",
      year: 2017,
      publisher: "Penerbit Universitas Jakarta",
      isbn: "978-979-1234-56-8",
      pages: 245,
      category: "Metodologi Pembelajaran",
      cover: "/book-cover-3.jpg",
      price: "Rp 65.000"
    },
    {
      id: 4,
      title: "Spiritualitas dalam Pendidikan Modern",
      description: "Mengintegrasikan nilai-nilai spiritual dalam sistem pendidikan kontemporer untuk mencetak generasi berkarakter.",
      year: 2021,
      publisher: "Penerbit Akademik Iminda",
      isbn: "978-623-5678-90-1",
      pages: 295,
      category: "Spiritualitas",
      cover: "/book-cover-4.jpg",
      price: "Rp 80.000"
    },
    {
      id: 5,
      title: "Pengembangan Karakter Siswa Berbasis Nilai Islam",
      description: "Strategi efektif untuk membentuk karakter siswa melalui pendekatan nilai-nilai Islam yang universal.",
      year: 2018,
      publisher: "Penerbit Universitas Jakarta",
      isbn: "978-979-8765-43-2",
      pages: 260,
      category: "Pengembangan Karakter",
      cover: "/book-cover-5.jpg",
      price: "Rp 70.000"
    },
    {
      id: 6,
      title: "Metodologi Penelitian Pendidikan Islam",
      description: "Panduan lengkap metodologi penelitian yang sesuai dengan konteks pendidikan Islam dan kebutuhan akademik.",
      year: 2020,
      publisher: "Jakarta Publishing House",
      isbn: "978-602-9876-54-3",
      pages: 340,
      category: "Penelitian",
      cover: "/book-cover-6.jpg",
      price: "Rp 90.000"
    }
  ];

  const categories = [...new Set(books.map(book => book.category))];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Library</h1>
          <p className="text-gray-600">Koleksi Buku Karya Budi Rahman Hakim, Ph.D.</p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
              Semua ({books.length})
            </button>
            {categories.map((category) => (
              <button key={category} className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-full font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition">
                {category} ({books.filter(book => book.category === category).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Book Cover */}
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-20 bg-blue-600 rounded-sm mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">BRH</span>
                    </div>
                    <p className="text-xs text-gray-600">Cover Book</p>
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {book.category}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">{book.price}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {book.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {book.description}
                  </p>

                  <div className="space-y-2 text-xs text-gray-500 mb-4">
                    <div className="flex justify-between">
                      <span>Penerbit:</span>
                      <span className="font-medium">{book.publisher}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tahun:</span>
                      <span className="font-medium">{book.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Halaman:</span>
                      <span className="font-medium">{book.pages}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition">
                      Beli Buku
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Statistik Karya</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">{books.length}</div>
              <div className="text-gray-600">Total Buku</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">{categories.length}</div>
              <div className="text-gray-600">Kategori</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">{books.reduce((sum, book) => sum + book.pages, 0)}</div>
              <div className="text-gray-600">Total Halaman</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">{new Date().getFullYear() - Math.min(...books.map(book => book.year))}</div>
              <div className="text-gray-600">Tahun Menulis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Tertarik dengan Karya Saya?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Dapatkan buku-buku karya Budi Rahman Hakim untuk memperkaya wawasan Anda dalam bidang pendidikan Islam dan metodologi pembelajaran.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Hubungi Penulis
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Lihat Semua Buku
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}