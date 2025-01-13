import Navbar from "../components/navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen mt-10 flex flex-col items-center px-6 md:px-12 py-12">
        {/* Header Section */}
        <div className="max-w-4xl text-center">
          <img
            src="/about.jpg"
            alt="Charity Illustration"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="mt-12 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Apa itu Charity?
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
            Charity adalah platform pengumpulan donasi yang bertujuan untuk
            membantu masyarakat di seluruh Indonesia. Kami menghubungkan para
            donatur yang peduli dengan individu atau komunitas yang membutuhkan
            bantuan, menjadikan kebaikan lebih mudah dijangkau dan memberikan
            dampak nyata.
          </p>
        </div>

        <div className="mt-16 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Misi Kami
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
            Kami berkomitmen untuk meningkatkan kesejahteraan masyarakat melalui
            penggalangan dana yang transparan, aman, dan efektif. Dengan
            dukungan dari para donatur, kami membantu mendanai berbagai
            inisiatif mulai dari pendidikan, kesehatan, hingga bantuan bencana.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            Mulai Donasi Sekarang
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
