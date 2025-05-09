import React, { useState, useEffect } from "react";
import ImageGrid from "../components/ImageGrid";
import Head from "next/head";
import Layout from '../components/Layout';

export default function Famous() {
  const [figures, setFigures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/famous-figures');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFigures(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredFigures = figures.filter(figure =>
    figure.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-yellow-500 text-xl">Түүхэн хүмүүсийн мэдээлэл ачаалж байна...</div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-red-500 text-xl">Алдаа гарлаа: {error}</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <Head>
          <title>Алдарт түүхэн хүмүүс</title>
          <meta 
            name="description" 
            content="Монголын алдарт түүхэн хүмүүсийн талаарх дэлгэрэнгүй мэдээлэл" 
          />
          <meta 
            name="keywords" 
            content="Монголын түүх, Чингис хаан, Алдарт хүмүүс, Монголын эзэнт гүрэн" 
          />
        </Head>
        
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Алдарт түүхэн хүмүүс
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Монголын түүхэнд гэрэлтсэн алдарт хүмүүсийн талаарх дэлгэрэнгүй мэдээлэл
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Нэрээр хайх..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 rounded-full bg-yellow-600 text-white text-sm font-medium">
                Бүгд
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 text-sm font-medium">
                Хаадууд
              </button>
              <button className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 text-sm font-medium">
                Баатарчууд
              </button>
            </div>
          </div>

          {/* Image Grid */}
          {filteredFigures.length > 0 ? (
            <ImageGrid figures={filteredFigures} />
          ) : (
            <div className="text-center py-12 text-gray-400">
              Хайлтанд тохирох үр дүн олдсонгүй
            </div>
          )}

          {/* Historical Context Section */}
          <div className="mt-16 bg-gray-800/50 rounded-xl p-6 border border-yellow-600/30">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Монголын түүхэн дэх алдартнууд</h2>
            <p className="text-gray-300">
              Монголын эзэнт гүрний үеэс эхлэн өнөөдрийг хүртэлх түүхэнд манай үндэстнийг дэлхийд таниулсан олон алдарт хүмүүс төрсөн. Тэд улс төр, цэргийн урлаг, соёл, шашин буддизм зэрэг олон салбарт үлэмж хувь нэмэр оруулсан юм.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}