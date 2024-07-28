"use client";

import CardBlog from "@/components/CardBlog";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlogDetail({ params }) {
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const id = params.id;
  const { data: blog, error: blogError } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/blog?id=${id}`,
    fetcher
  );

  const { data: randomBlogs, error: randomError } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/blog?random=3`,
    fetcher
  );

  if (blogError || randomError) {
    return <div>Failed to load</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  const filteredRandomBlogs = randomBlogs?.filter(
    (randomBlog) => randomBlog.id.toString() !== id.toString()
  );

  return (
    <>
      <title>{blog.title}</title>
      <meta name="description" content={blog.content.slice(0, 100)} />
      <Navbar />
      <article className="mx-7 md:mx-24 py-20 flex flex-col justify-center items-center mt-5">
        <header className="mb-12 w-full md:w-3/4">
          <h1 className="text-4xl font-playfair font-bold text-center mb-5 flex flex-col">
            {blog.title}
            <span className="text-sm text-gray-500 text-sans mt-5">
              {new Date(blog.createdAt.seconds * 1000).toLocaleDateString(
                "id-ID",
                { day: "numeric", month: "long", year: "numeric" }
              )}
            </span>
          </h1>
          <div className="relative flex justify-center mx-auto w-full h-64 md:h-96 mb-0 md:mb-5">
            {isLoadingImage && (
              <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
            )}
            <Image
              src={blog.imageBanner}
              alt="Banner Image"
              fill
              className="object-cover"
              onLoadingComplete={() => setIsLoadingImage(false)}
            />
          </div>
        </header>
        <div
          className="prose md:prose-md lg:prose-lg text-justify w-full md:w-3/4"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
        <section className="mx-7 md:mx-24 py-20">
          <h2 className="text-2xl font-bold mb-5 underline text-center">
            Blog Lainnya
          </h2>
          <div className="flex items-center justify-evenly flex-wrap">
            {filteredRandomBlogs?.map((randomBlog) => (
              <CardBlog
                title={
                  randomBlog.title.length > 35
                    ? `${randomBlog.title.slice(0, 35)}...`
                    : randomBlog.title
                }
                description={
                  randomBlog.content.replace(/<\/?[^>]+(>|$)/g, "").length > 100
                    ? `${randomBlog.content
                        .replace(/<\/?[^>]+(>|$)/g, "")
                        .slice(0, 100)}...`
                    : randomBlog.content.replace(/<\/?[^>]+(>|$)/g, "")
                }
                imageURL={randomBlog.imageBanner}
                date={new Date(
                  randomBlog.createdAt.seconds * 1000
                ).toDateString()}
                url={`/blog/${blog.id}`}
              />
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
