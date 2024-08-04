"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";
import Aside from "@/components/Aside";
import NavbarPhone from "@/components/NavbarPhone";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function PostBlog() {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const { status } = useSession();

  if (status === "unauthenticated") {
    router.push("/login");
  }

  const toggleAside = () => setIsAsideOpen(!isAsideOpen);

  const modules = {
    toolbar: [
      [{ header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
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
  ];

  const createHandler = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = Object.fromEntries(form);

    // upload image
    const imageBannerRef = ref(storage, `imageBanner/${data.imageBanner.name}`);
    const snapshot = await uploadBytesResumable(
      imageBannerRef,
      data.imageBanner
    );
    const imageBannerUrl = await getDownloadURL(snapshot.ref);

    const blog = {
      title: data.title,
      imageBannerUrl,
      content,
      isPublish: data.isPublish,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    console.log(blog);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
        method: "POST",
        body: JSON.stringify(blog),
      });

      if (response.status == 200) {
        const result = await response.json();
        alert("Berhasil membuat blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <title>Membuat Blog</title>
      <div className="flex flex-col md:flex-row">
        <NavbarPhone toggleAside={toggleAside} isAsideOpen={isAsideOpen} />
        <Aside isAsideOpen={isAsideOpen} />
        <section className="w-full md:w-3/4 min-h-screen ml-0 md:ml-44 flex flex-col items-center justify-start mt-10">
          <form
            className="space-y-2 w-full md:w-3/4 px-5 md:px-0"
            onSubmit={createHandler}
          >
            <div className="flex flex-col space-y-1">
              <label htmlFor="title">Judul</label>
              <input
                type="text"
                id="title"
                name="title"
                className="px-4 py-1.5 border border-vintage-dark rounded-lg focus:outline-none focus:ring focus:ring-vintage-dark"
                required
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="imageBanner">Gambar Banner</label>
              <input
                type="file"
                name="imageBanner"
                id="imageBanner"
                placeholder="Image Banner"
                className="py-2 px-4 rounded-md border-2 border-gray-300"
                required
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="content">Content</label>
              <ReactQuill
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                theme="snow"
                className="border border-vintage-dark rounded-lg focus:outline-none focus:ring focus:ring-vintage-dark"
                required
              />
            </div>
            <label htmlFor="isPublish">Publish?</label>
            <select
              name="isPublish"
              id="isPublish"
              className="p-1 px-4 border border-vintage-dark rounded-lg focus:outline-none focus:ring focus:ring-vintage-dark ml-3"
              required
            >
              <option value="true">Ya</option>
              <option value="false">Tidak</option>
            </select>
            <div className="mt-24 w-full">
              <button
                type="submit"
                className="px-4 py-1.5 bg-vintage-dark text-white rounded"
              >
                Simpan
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
