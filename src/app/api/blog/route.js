import { db, storage } from "@/lib/firebaseConfig";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const randomCount = parseInt(searchParams.get("random")) || 0;

  if (!id) {
    const blogs = await getDocs(collection(db, "blogs"));
    const snapshot = blogs.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return new Response(JSON.stringify(snapshot));
  } else {
    try {
      const docRef = doc(db, "blogs", id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        return new Response(
          JSON.stringify({ status: 404, message: "Blog not found" }),
          { status: 404 }
        );
      }

      const blogData = { id: docSnap.id, ...docSnap.data() };

      // Get all blogs excluding the current one
      const blogsSnapshot = await getDocs(collection(db, "blogs"));
      const allBlogs = blogsSnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((blog) => blog.id !== id);

      // Shuffle and pick random blogs
      const shuffledBlogs = allBlogs.sort(() => 0.5 - Math.random());
      const randomBlogs = shuffledBlogs.slice(0, randomCount);

      return new Response(JSON.stringify({ blog: blogData, randomBlogs }), {
        status: 200,
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ status: 500, message: "Internal Server Error" }),
        { status: 500 }
      );
    }
  }
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response(
      JSON.stringify({ status: 400, message: "Missing blog ID" }),
      { status: 400 }
    );
  }

  try {
    const docRef = doc(db, "blogs", id);
    await deleteDoc(docRef);
    return new Response(JSON.stringify({ status: 200, message: "Deleted" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ status: 500, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { title, imageBannerUrl, content, isPublish } = await req.json();

    const blog = {
      title,
      imageBanner: imageBannerUrl,
      content,
      isPublish,
      createdAt: new Date(),
    };

    const docRef = collection(db, "blogs");
    await addDoc(docRef, blog);

    return new Response(JSON.stringify({ status: 200, message: "Created" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      console.log(error),
      JSON.stringify({ status: 500, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const { title, imageBanner, content, isPublish } = await req.json();

  const blog = {
    title,
    imageBanner,
    content,
    isPublish,
    updatedAt: new Date(),
  };

  const docRef = doc(db, "blogs", id);
  await updateDoc(docRef, blog);

  return new Response(JSON.stringify({ status: 200, message: "Updated" }), {
    status: 200,
  });
}
