export default function QuoteSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Quote of The Day */}
          <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center">
                <span className="text-xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Quote Of The Day</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              "Pendidikan yang baik ialah pendidikan yang mengembangkan potensi manusia sepenuh-penuhnya. Pendidikan bukan hanya tentang ilmu, tetapi juga tentang karakter dan akhlak."
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
              Baca Selengkapnya →
            </a>
          </div>

          {/* BRH Insight */}
          <div className="bg-purple-50 p-8 rounded-xl border border-purple-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                <span className="text-xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">BRH Insight</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Perkembangan pendidikan Islam di era modern memerlukan pendekatan yang integral, menggabungkan nilai-nilai tradisional dengan metodologi kontemporer untuk menjawab tantangan zaman.
            </p>
            <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
              Baca Selengkapnya →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
