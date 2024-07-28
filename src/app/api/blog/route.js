import { db } from "@/lib/firebaseConfig";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    const blogs = await getDocs(collection(db, "blogs"));
    const snapshot = blogs.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return new Response(JSON.stringify(snapshot));
  } else {
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return new Response(JSON.stringify(docSnap.data()));
    } else {
      return Response.json({
        status: 404,
        message: "Blog not found",
      });
    }
  }
}
