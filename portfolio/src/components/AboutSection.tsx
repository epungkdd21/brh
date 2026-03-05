export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/300x400"
              alt="Budi Rahman Hakim"
              className="rounded-lg shadow-lg w-72"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Tentang Saya</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Saya adalah seorang dosen dan peneliti di UIN Syarif Hidayatullah Jakarta yang berdedikasi untuk mengembangkan pendidikan Islam kontemporer. Dengan pengalaman lebih dari 15 tahun di dunia akademik, saya telah berkontribusi dalam berbagai aspek pendidikan tinggi.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Fokus penelitian saya mencakup metodologi pengajaran, pengembangan kurikulum, dan integrasi nilai-nilai spiritual dalam pendidikan modern. Saya percaya bahwa pendidikan yang berkualitas adalah kunci untuk perubahan sosial yang berkelanjutan.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Baca Biodata Lengkap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
