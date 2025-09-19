import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api-inference.huggingface.co/models/gpt2', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: 'Basel Baqaloq ismli mushuk haqida qiziqarli fakt:',
        }),
      });
      const data = await response.json();
      setFact(data[0]?.generated_text || 'Xatolik yuz berdi.');
    } catch (error) {
      setFact('AI bilan bog‘lanishda xatolik!');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100">
      <Head>
        <title>Basel Baqaloq - Mening Sevimli Mushugim</title>
        <meta name="description" content="Basel Baqaloq - dunyodagi eng yoqimli mushuk! Uning hikoyalari, rasmlari va qiziqarli faktlarni kashf eting." />
        <meta name="keywords" content="Basel Baqaloq, mushuk, cute cat, pet website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Basel Baqaloq - Mening Mushugim" />
        <meta property="og:description" content="Basel Baqaloq haqida hamma narsa: rasmlar, hikoyalar va AI orqali qiziqarli faktlar!" />
        <meta property="og:image" content="/images/basel.jpg" />
      </Head>

      <header className="text-center py-20 bg-cover bg-center" style={{ backgroundImage: 'url(/images/basel-hero.jpg)' }}>
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">Basel Baqaloq</h1>
        <p className="text-xl text-white mt-4">Dunyodagi eng yoqimli mushuk bilan tanishing!</p>
        <a href="/gallery" className="mt-6 inline-block bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600">Galereyani ko'ring</a>
      </header>

      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold text-gray-800">Basel Baqaloq haqida</h2>
        <p className="mt-4 text-lg text-gray-600">
          Basel Baqaloq - bu mening sevimli mushugim! U o'ynoqi, aqlli va har doim kulgili harakatlari bilan meni quvontiradi. Bu saytda uning rasmlari, hikoyalari va AI yordamida yaratilgan qiziqarli faktlarni topasiz.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800">AI bilan suhbat</h2>
        <p className="mt-4 text-lg text-gray-600">Basel Baqaloq haqida qiziqarli faktlarni bilmoqchimisiz?</p>
        <button
          onClick={fetchCatFact}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Yuklanmoqda...' : 'Faktni generatsiya qil'}
        </button>
        {fact && <p className="mt-4 text-lg text-gray-600">{fact}</p>}
      </section>
    </div>
  );
}
