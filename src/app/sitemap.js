export default async function sitemap() {
  const baseUrl = "https://sadawira-yasa-utama.vercel.app";

  const response = await fetch(`${baseUrl}/api/blog`);
  const blogs = await response.json();

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: new Date(blog.createdAt.seconds * 1000).toISOString(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      priority: 1,
    },
    ...blogUrls,
  ];
}
