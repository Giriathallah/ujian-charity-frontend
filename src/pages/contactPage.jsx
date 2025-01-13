import Navbar from "../components/navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 mt-10 min-h-screen flex flex-col items-center px-6 md:px-12 py-12">
        {/* Header Section */}
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Hubungi Kami
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Jika Anda memiliki pertanyaan, saran, atau membutuhkan bantuan,
            jangan ragu untuk menghubungi kami melalui form di bawah ini.
          </p>
        </div>

        {/* Form Section */}
        <div className="mt-12 w-full max-w-lg">
          <form className="bg-white shadow-lg rounded-lg p-8">
            {/* Nama */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Nama Anda
              </label>
              <input
                type="text"
                id="name"
                placeholder="Masukkan nama Anda"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Anda
              </label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan email Anda"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>

            {/* Pesan */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Pesan Anda
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tulis pesan Anda di sini"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              ></textarea>
            </div>

            {/* Tombol Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
