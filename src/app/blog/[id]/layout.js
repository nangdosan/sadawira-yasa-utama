export async function generateMetadata({ params }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blog?id=${params.id}`
  );
  const data = await response.json();
  const blog = data.blog;
  return {
    title: blog.title,
    description: blog.content.slice(0, 150).replace(/<\/?[^>]+(>|$)/g, ""),
    openGraph: {
      title: blog.title,
      description: blog.content.slice(0, 150).replace(/<\/?[^>]+(>|$)/g, ""),
      images: blog.imageBanner,
    },
  };
}

export default function BlogLayout({ children }) {
  return <div>{children}</div>;
}
