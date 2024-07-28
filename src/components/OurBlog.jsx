import CardBlog from "./CardBlog";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function OurBlog() {
  const { data: blogs, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/blog`,
    fetcher
  );

  if (error) {
    return <div>Terjadi Error!</div>;
  }

  if (!blogs) {
    return <div>Loading...</div>;
  }

  return (
    <section
      id="blog"
      className="mt-32 w-full flex flex-col bg-vintage items-center justify-center py-20 space-y-5 mb-56"
    >
      <h3 className="text-sm text-amber-600">BLOG KAMI</h3>
      <div className="w-full flex flex-wrap justify-evenly items-center mx-0 md:mx-24">
        {blogs.map((blog, index) => (
          <div key={index} className="scale-90 md:scale-100 -mb-20 md:mb-0">
            <CardBlog
              title={blog.title}
              description={blog.content.slice(0, 100, "...")}
              imageURL={blog.imageBanner}
              date={new Date(blog.createdAt.seconds * 1000).toDateString()}
              url={`/blog/${blog.id}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
