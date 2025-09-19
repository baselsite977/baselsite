import Head from 'next/head';

export default function Gallery() {
  const images = [
    '/images/basel1.jpg',
    '/images/basel2.jpg',
    '/images/basel3.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100">
      <Head>
        <title>Basel Baqaloq - Galereya</title>
        <meta name="description" content="Basel Baqaloq mushugining eng yoqimli rasmlarini ko'ring!" />
        <meta name="keywords" content="Basel Baqaloq, mushuk rasmlari, cat gallery" />
      </Head>

      <section className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-800 text-center">Basel Baqaloq Galereyasi</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img src={src} alt={`Basel Baqaloq ${index + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
