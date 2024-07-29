"use client";

import Aside from "@/components/Aside";
import CardBlog from "@/components/CardBlog";
import useSWR from "swr";
import NavbarPhone from "@/components/NavbarPhone";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Loading from "../loading";
import Error from "./error";
import { FiX } from "react-icons/fi";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Dashboard() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const { data: session, status } = useSession();

  const modules = {
    toolbar: [
      [{ header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
  ];

  if (status === "unauthenticated") {
    signIn();
  }

  const toggleAside = () => setIsAsideOpen(!isAsideOpen);

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/blog`,
    fetcher
  );

  if (error) {
    return <Error />;
  }
  if (!data) {
    return <Loading />;
  }

  const deleteHandler = async (id) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blog?id=${id}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      alert("Blog Berhasil Dihapus");
    }
  };

  const showEditHandler = (id) => {
    const blog = data.find((blog) => blog.id === id);
    setSelectedBlog(blog);
    setIsEditOpen(true);
  };

  const editHandler = async (event) => {
    event.preventDefault();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blog?id=${selectedBlog.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedBlog),
      }
    );

    if (res.ok) {
      alert("Blog Berhasil Diubah");
      setIsEditOpen(false);
      setSelectedBlog(null);
    }
  };

  return (
    <>
      <title>Dashboard</title>
      <NavbarPhone toggleAside={toggleAside} isAsideOpen={isAsideOpen} />
      <div className="flex md:justify-between justify-center">
        <Aside isAsideOpen={isAsideOpen} />
        <main className="w-3/4 mt-10 ml-0 md:ml-64">
          {data.map((blog, index) => (
            <div
              key={index}
              className="scale-90 border-b-[1px] md:scale-100 md:mb-0"
            >
              <div className="flex items-center flex-wrap space-x-3 justify-between p-7 -mb-10 md:mb-0">
                <div className="w-full md:w-3/12 flex space-x-5 md:space-x-0 justify-between">
                  <button
                    className="text-orange-300"
                    onClick={() => showEditHandler(blog.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => deleteHandler(blog.id)}
                  >
                    Hapus
                  </button>
                </div>
                <div className="w-full md:w-9/12 text-gray-500 text-center">
                  Status Publik : {blog.isPublish === "true" ? "Ya" : "Tidak"}
                </div>
              </div>
              <CardBlog
                title={
                  blog.title.length > 35
                    ? `${blog.title.slice(0, 35)}...`
                    : blog.title
                }
                description={
                  blog.content.replace(/<\/?[^>]+(>|$)/g, "").length > 100
                    ? `${blog.content
                        .replace(/<\/?[^>]+(>|$)/g, "")
                        .slice(0, 100)}...`
                    : blog.content.replace(/<\/?[^>]+(>|$)/g, "")
                }
                imageURL={blog.imageBanner}
                url={`/blog/${blog.id}`}
                date={new Date(
                  blog.createdAt.seconds * 1000
                ).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              />
            </div>
          ))}
        </main>
      </div>

      {isEditOpen && (
        <form
          className="fixed inset-0 flex flex-col justify-center items-center bg-white overflow-hidden"
          onSubmit={editHandler}
        >
          <FiX
            className="absolute top-5 right-5 text-2xl cursor-pointer"
            onClick={() => setIsEditOpen(false)}
          />
          <div className="w-3/4 flex flex-col space-y-1 md:w-1/2">
            <label htmlFor="title">Judul</label>
            <input
              type="text"
              id="title"
              name="title"
              className="px-4 py-1.5 border border-vintage-dark rounded-lg focus:outline-none focus:ring focus:ring-vintage-dark"
              value={selectedBlog?.title || ""}
              onChange={(e) =>
                setSelectedBlog({ ...selectedBlog, title: e.target.value })
              }
            />
          </div>
          <div className="w-3/4 flex flex-col space-y-1 md:w-1/2">
            <label htmlFor="content">Content</label>
            <ReactQuill
              value={selectedBlog?.content || ""}
              onChange={(value) =>
                setSelectedBlog({ ...selectedBlog, content: value })
              }
              modules={modules}
              formats={formats}
            />
          </div>
          <div className="mt-28 md:mt-20">
            <label htmlFor="isPublish">Publish?</label>
            <select
              name="isPublish"
              id="isPublish"
              className="p-1 px-4 border border-vintage-dark rounded-lg focus:outline-none focus:ring focus:ring-vintage-dark ml-3 cursor-pointer"
              required
              value={selectedBlog?.isPublish || "false"}
              onChange={(e) =>
                setSelectedBlog({ ...selectedBlog, isPublish: e.target.value })
              }
            >
              <option value="true">Ya</option>
              <option value="false">Tidak</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-vintage-dark hover:bg-vintage text-white p-2 rounded-lg w-1/2 mt-5"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
}
