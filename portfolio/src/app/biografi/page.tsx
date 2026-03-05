import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BiografiPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Biografi</h1>
          <p className="text-gray-600">Budi Rahman Hakim, Ph.D.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Tentang Saya */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">Tentang Saya</h2>
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Saya adalah seorang dosen dan peneliti di UIN Syarif Hidayatullah Jakarta yang berdedikasi untuk mengembangkan pendidikan Islam kontemporer. Dengan pengalaman lebih dari 15 tahun di dunia akademik, saya telah berkontribusi dalam berbagai aspek pendidikan tinggi.
              </p>
              <p>
                Fokus penelitian saya mencakup metodologi pengajaran, pengembangan kurikulum, dan integrasi nilai-nilai spiritual dalam pendidikan modern. Saya percaya bahwa pendidikan yang berkualitas adalah kunci untuk perubahan sosial yang berkelanjutan.
              </p>
              <p>
                Selain mengajar, saya aktif dalam kegiatan penelitian, penulisan, dan konsultasi di berbagai lembaga pendidikan nasional dan internasional. Komitmen saya adalah memberikan kontribusi nyata untuk kemajuan pendidikan Indonesia.
              </p>
            </div>
          </div>

          {/* Riwayat Pendidikan */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">Riwayat Pendidikan</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900">Gelar Doktor (Ph.D.)</h3>
                <p className="text-gray-700">Program Studi Pendidikan Islam</p>
                <p className="text-sm text-gray-600">UIN Syarif Hidayatullah Jakarta | 2015</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900">Magister (M.Ag.)</h3>
                <p className="text-gray-700">Program Studi Pendidikan Agama Islam</p>
                <p className="text-sm text-gray-600">UIN Syarif Hidayatullah Jakarta | 2008</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900">Sarjana (S.Ag.)</h3>
                <p className="text-gray-700">Program Studi Pendidikan Agama Islam</p>
                <p className="text-sm text-gray-600">IAIN Jakarta | 2005</p>
              </div>
            </div>
          </div>

          {/* Pengalaman Kerja */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">Pengalaman Kerja</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">Dosen Tetap - Departemen Pendidikan Islam</h3>
                <p className="text-gray-700 font-medium">UIN Syarif Hidayatullah Jakarta</p>
                <p className="text-sm text-gray-600">2016 - Sekarang</p>
                <p className="text-gray-700 mt-3">Mengajar berbagai mata kuliah terkait pendidikan Islam, metodologi penelitian, dan pengembangan kurikulum di tingkat sarjana dan pascasarjana.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">Peneliti dan Pengembang Kurikulum</h3>
                <p className="text-gray-700 font-medium">Lembaga Penelitian dan Pengabdian Masyarakat UIN Jakarta</p>
                <p className="text-sm text-gray-600">2010 - Sekarang</p>
                <p className="text-gray-700 mt-3">Melakukan penelitian dalam bidang pendidikan Islam, pengembangan model pembelajaran, dan inovasi pendidikan.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">Konsultan Pendidikan</h3>
                <p className="text-gray-700 font-medium">Berbagai Institusi Pendidikan</p>
                <p className="text-sm text-gray-600">2008 - Sekarang</p>
                <p className="text-gray-700 mt-3">Memberikan konsultasi dan pendampingan dalam pengembangan kurikulum dan strategi pembelajaran di berbagai sekolah dan perguruan tinggi.</p>
              </div>
            </div>
          </div>

          {/* Keahlian */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">Keahlian dan Ketertarikan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Bidang Pendidikan</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">▸</span>
                    <span>Pendidikan Islam Kontemporer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">▸</span>
                    <span>Metodologi dan Strategi Pembelajaran</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">▸</span>
                    <span>Pengembangan Kurikulum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">▸</span>
                    <span>Inovasi Pendidikan</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Keahlian Teknis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">▸</span>
                    <span>Penelitian Kualitatif dan Kuantitatif</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">▸</span>
                    <span>Analisis Data Statistik</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">▸</span>
                    <span>Penulisan Ilmiah dan Publikasi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">▸</span>
                    <span>Pelatihan dan Fasilitasi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Publikasi */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">Publikasi</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Buku</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-gray-300 pl-4">
                  <span className="font-semibold">Pendidikan Islam di Era Digital</span>
                  <p className="text-sm text-gray-600">Penerbit Akademik Iminda | 2022</p>
                </li>
                <li className="border-l-4 border-gray-300 pl-4">
                  <span className="font-semibold">Kurikulum dan Pembelajaran Berkelanjutan</span>
                  <p className="text-sm text-gray-600">Jakarta Publishing House | 2019</p>
                </li>
                <li className="border-l-4 border-gray-300 pl-4">
                  <span className="font-semibold">Inovasi Strategi Pembelajaran Kontekstual</span>
                  <p className="text-sm text-gray-600">Penerbit Universitas Jakarta | 2017</p>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Artikel Jurnal Internasional</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-gray-300 pl-4">
                  <span className="font-semibold">Islamic Education in Contemporary Context: Challenges and Opportunities</span>
                  <p className="text-sm text-gray-600">International Journal of Islamic Education | Vol. 5, No. 2 (2023)</p>
                </li>
                <li className="border-l-4 border-gray-300 pl-4">
                  <span className="font-semibold">Curriculum Development Models for Digital Age Learning</span>
                  <p className="text-sm text-gray-600">Asian Journal of Educational Research | Vol. 9, No. 1 (2021)</p>
                </li>
                <li className="border-l-4 border-gray-300 pl-4">
                  <span className="font-semibold">Integrating Spiritual Values in Modern Pedagogy</span>
                  <p className="text-sm text-gray-600">Journal of Asian Education | Vol. 18, No. 3 (2020)</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Artikel Prosiding Konferensi</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="border-l-4 border-gray-300 pl-4">
                  <span className="font-semibold">Teaching Islamic Values Through Contemporary Approaches</span>
                  <p className="text-sm text-gray-600">International Conference on Islamic Education Asia 2023</p>
                </li>
                <li className="border-l-4 border-gray-300 pl-4">
                  <span className="font-semibold">Technology Integration in Traditional Islamic Education</span>
                  <p className="text-sm text-gray-600">Asian Forum on Educational Leadership 2022</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Penghargaan dan Sertifikasi */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">Penghargaan dan Sertifikasi</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Penghargaan</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Dosen Berprestasi UIN Jakarta (2021)</li>
                  <li>• Best Researcher Award LPPM (2020)</li>
                  <li>• Penghargaan Inovasi Pendidikan Nasional (2019)</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Sertifikasi</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Sertifikat Pendidik Profesional</li>
                  <li>• Training Metodologi Penelitian Internasional</li>
                  <li>• Sertifikat Kurikulum dan Pembelajaran</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Keanggotaan */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">Keanggotaan Organisasi</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-gray-700">
                <p className="flex items-start mb-3">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Asosiasi Peneliti Pendidikan Indonesia (APPI)</span>
                </p>
                <p className="flex items-start mb-3">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Kelompok Studi Pendidikan Islam Asia Tenggara</span>
                </p>
                <p className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Forum Dekan Pendidikan Islam Se-Indonesia</span>
                </p>
              </div>
              <div className="text-gray-700">
                <p className="flex items-start mb-3">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>International Society for Islamic Education</span>
                </p>
                <p className="flex items-start mb-3">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Jaringan Universitas untuk Pembangunan Berkelanjutan</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
