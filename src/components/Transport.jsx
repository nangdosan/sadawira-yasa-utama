import Image from "next/image";

const transportImages = [
  {
    id: 1,
    name: "Truck Fuso",
    src: "/images/transport/fuso.png",
  },
  {
    id: 2,
    name: "Truck Colt Diesel",
    src: "/images/transport/colt.png",
  },
  {
    id: 3,
    name: "Truck Tronton/Interculer",
    src: "/images/transport/tronton.png",
  },
  {
    id: 4,
    name: "Truck Trado",
    src: "/images/transport/trado.png",
  },
  {
    id: 5,
    name: "Kapal Breakbulk/Curah",
    src: "/images/transport/curah.png",
  },
  {
    id: 6,
    name: "Kapal Tongkang",
    src: "/images/transport/tongkang.png",
  },
];

export default function Transport() {
  return (
    <section
      id="transport"
      className="mt-32 w-full flex flex-col items-center justify-center py-20 space-y-5"
    >
      <header className="text-center text-xs space-y-2 w-10/12 md:w-1/2 mb-10">
        <h3 className="text-amber-600 text-sm">ARMADA TRANSPORTASI</h3>
        <h1 className="text-3xl md:text-4xl font-semibold font-playfair mb-4">
          Solusi Pengiriman Darat dan Laut yang Handal
        </h1>
      </header>
      <div className="flex items-center justify-evenly flex-wrap w-full md:w-8/12 space-x-3 md:space-x-9 space-y-7 md:space-y-4">
        {transportImages.map((data, index) => (
          <div
            className="flex flex-col items-center scale-90 md:scale-100"
            key={index}
          >
            <Image src={data.src} width={200} height={300} alt={data.name} />
            <span>{data.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
