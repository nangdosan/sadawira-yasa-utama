import Image from "next/image";
import Link from "next/link";

export default function CardBlog({ title, description, imageURL, date, url }) {
  return (
    <div
      className="w-full md:w-[650px] flex flex-col md:flex-row items-center justify-between space-x-0
     md:space-x-10 mb-5 scale-90"
    >
      <div className="w-full md:w-4/12">
        <Image
          src={imageURL}
          width={400}
          height={300}
          alt={title}
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-7 md:mt-0 w-full md:w-8/12 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-playfair font-bold">{title}</h1>
          <p className="text-sm text-gray-500 mt-2">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-5">
          <p className="text-xs text-gray-400">{date}</p>
          <Link
            href={url}
            className="text-white bg-black w-40 py-3 text-center text-xs flex items-center justify-evenly scale-75 rounded-lg shadow-lg"
          >
            Baca Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
}
