"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlogDetail({ params }) {
  const [isLoadingImage, setIsloadingImage] = useState(true);

  const id = params.id;
  const { data: blog, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/blog?id=${id}`,
    fetcher
  );

  if (error) {
    return <div>Failed to load</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <title>{blog.title}</title>
      <meta name="description" content={blog.content.slice(0, 100, "...")} />
      <Navbar />
      <main className="mx-7 md:mx-24 py-20 flex flex-col justify-center items-center mt-5">
        <header className="mb-12 w-full md:w-3/4">
          <h1 className="text-4xl font-playfair font-bold text-center mb-5 flex flex-col">
            {blog.title}
            <span className="text-sm text-gray-500 text-sans">
              {new Date(blog.createdAt.seconds * 1000).toLocaleDateString(
                "id-ID",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }
              )}
            </span>
          </h1>
          <div className="relative flex justify-center mx-auto w-full h-96 mb-0 md:mb-5">
            {isLoadingImage && (
              <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
            )}
            <Image
              src={blog.imageBanner}
              alt="Banner Image"
              fill
              className="object-cover"
              onLoadingComplete={() => setIsloadingImage(false)}
            />
          </div>
        </header>
        <div className="w-full md:w-3/4">
          <p className="text-gray-600 tracking-wide leading-5 text-justify">
            {blog.content}
          </p>
        </div>
      </main>
    </>
  );
}
