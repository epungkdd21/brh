export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-40 h-40 bg-black rounded-full flex items-center justify-center">
            <span className="text-5xl font-bold text-white">BRH</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Budi Rahman Hakim</h1>

        {/* Description */}
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Selamat datang di laman resmi www.brh.co.id — ruang perjumpaan pemikiran, spiritualitas, dan aksi sosial.
        </p>

        {/* CTA Button */}
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold mb-8 hover:bg-blue-700 transition">
          Tentang
        </button>

        {/* Social Share Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://wa.me/?text=Kunjungi%20website%20brh.co.id"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-green-600 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.27 9.903 9.903 0 00-1.57 1.034 9.868 9.868 0 013.282-5.456 9.84 9.84 0 013.238-.849z" />
            </svg>
            Share WhatsApp
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=brh.co.id"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-800 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Share Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
