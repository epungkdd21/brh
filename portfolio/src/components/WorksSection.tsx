export default function WorksSection() {
  const works = [
    {
      id: 1,
      title: 'Jabojarakat: Pendidikan Spiritual & Transformasi Sosial',
      description: 'Karya monumental yang membahas integrasi antara pendidikan spiritual dengan aksi perubahan sosial dalam konteks masyarakat Indonesia.',
      icon: '📚',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 2,
      title: 'Perspektif Baru Pendidikan Islam',
      description: 'Pemikiran dan artikel tentang pendekatan inovatif dalam pendidikan Islam yang relevan dengan tantangan zaman modern.',
      icon: '✍️',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      id: 3,
      title: 'Seminar Internasional Pendidikan',
      description: 'Partisipasi dalam berbagai konferensi dan seminar internasional tentang pengembangan kurikulum dan metodologi pengajaran.',
      icon: '🎓',
      color: 'bg-green-50 border-green-200'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Karya dan Pemikiran</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {works.map(work => (
            <div
              key={work.id}
              className={`p-8 rounded-lg border transition hover:shadow-lg ${work.color}`}
            >
              <div className="text-4xl mb-4">{work.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {work.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {work.description}
              </p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:text-blue-700 transition"
              >
                Lihat Detail →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
