export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/dashboard/"] }],
    sitemap: "https://sadawira-yasa-utama.vercel.app/sitemap.xml",
  };
}
