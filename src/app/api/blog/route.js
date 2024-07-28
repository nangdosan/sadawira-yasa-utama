import { db } from "@/lib/firebaseConfig";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  limit,
  orderBy,
} from "firebase/firestore";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const randomCount = parseInt(searchParams.get("random"), 10);

  if (!isNaN(randomCount) && randomCount > 0) {
    const allDocsSnapshot = await getDocs(collection(db, "blogs"));
    const allDocs = allDocsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Pilih secara acak `randomCount` dokumen
    const randomDocs = [];
    const docCount = allDocs.length;

    for (let i = 0; i < randomCount; i++) {
      if (docCount === 0) break; // Tidak ada dokumen yang tersedia
      const randomIndex = Math.floor(Math.random() * docCount);
      randomDocs.push(allDocs[randomIndex]);
      allDocs.splice(randomIndex, 1); // Menghapus elemen yang dipilih dari array
    }

    return new Response(JSON.stringify(randomDocs));
  }

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
