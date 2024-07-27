export default function Security() {
  return (
    <section
      id="#fasilitas-keamanan"
      className="mt-32 w-full flex flex-col items-center justify-center py-20 space-y-5"
    >
      <header className="text-center text-xs space-y-2 w-full md:w-8/12 mb-3 md:mb-10">
        <h3 className="text-sm text-amber-600">FASILITAS KEAMANAN</h3>
        <h1 className="text-2xl md:text-3xl font-semibold font-playfair mb-4 text-center mx-10 md:mx-0">
          Keamanan barang kiriman Anda adalah prioritas utama. Kami menyediakan
          fasilitas keamanan canggih untuk memastikan setiap pengiriman tiba
          dengan selamat dan tepat waktu
        </h1>
      </header>
      <div className="px-7 md:px-0 flex flex-col md:flex-row items-center md:items-start lg:items-center justify-center space-x-0 md:space-x-10 space-y-7 md:space-y-0">
        <div className="w-full md:w-5/12 lg:w-4/12 bg-vintage rounded-xl px-4 py-4  shadow-xl shadow-gray-200">
          <h4 className="text-xl font-semibold mb-3 flex items-center justify-between">
            GPS Tracking{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="ml-2"
            >
              <path
                fill="currentColor"
                d="M6 23H3q-.825 0-1.412-.587T1 21v-3h2v3h3zm12 0v-2h3v-3h2v3q0 .825-.587 1.413T21 23zm-6-4.5q-3 0-5.437-1.775T3 12q1.125-2.95 3.563-4.725T12 5.5t5.438 1.775T21 12q-1.125 2.95-3.562 4.725T12 18.5m0-2q2.2 0 4.025-1.2t2.8-3.3q-.975-2.1-2.8-3.3T12 7.5T7.975 8.7t-2.8 3.3q.975 2.1 2.8 3.3T12 16.5m0-1q1.45 0 2.475-1.025T15.5 12t-1.025-2.475T12 8.5T9.525 9.525T8.5 12t1.025 2.475T12 15.5m0-2q-.625 0-1.063-.437T10.5 12t.438-1.062T12 10.5t1.063.438T13.5 12t-.437 1.063T12 13.5M1 6V3q0-.825.588-1.412T3 1h3v2H3v3zm20 0V3h-3V1h3q.825 0 1.413.588T23 3v3zm-9 6"
              ></path>
            </svg>
          </h4>
          <ul className="list-disc px-5 space-y-2">
            <li className="text-gray-600">
              <span className="bg-vintage-dark text-black">
                Pelacakan Langsung:
              </span>
              <p>Melacak lokasi truk secara real-time.</p>
            </li>
            <li className="text-gray-600">
              <span className="bg-vintage-dark text-black">Rute Terbaik: </span>
              <p>Mengoptimalkan rute untuk pengiriman tepat waktu.</p>
            </li>
            <li className="text-gray-600">
              <span className="bg-vintage-dark text-black">
                Keamanan Tambahan:
              </span>
              <p>Pemantauan terus-menerus untuk keamanan barang</p>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-5/12 lg:w-4/12 bg-vintage rounded-xl px-4 py-4 shadow-xl shadow-gray-200">
          <h4 className="text-xl font-semibold mb-3 flex items-center justify-between">
            Shareloc Live{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="ml-2"
            >
              <path
                fill="currentColor"
                d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
              ></path>
            </svg>
          </h4>
          <ul className="list-disc px-5 space-y-2">
            <li className="text-gray-600">
              <span className="bg-vintage-dark text-black">
                Pemantauan Real-Time:
              </span>
              <p>Akses lokasi pengiriman langsung.</p>
            </li>
            <li className="text-gray-600">
              <span className="bg-vintage-dark text-black">
                Notifikasi Instan:
              </span>
              <p>Pembaruan status pengiriman secara instan.</p>
            </li>
            <li className="text-gray-600">
              <span className="bg-vintage-dark text-black">Transparansi: </span>
              <p>Informasi pengiriman terbaru untuk Anda.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
