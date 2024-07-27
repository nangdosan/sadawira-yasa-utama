import CardBlog from "./CardBlog";

const blogs = [
  {
    id: 1,
    title: "Mengapa Filsafat Stoik Tetap Relevan Hingga Saat Ini?",
    description:
      "Filsafat Stoik, yang berakar pada pemikiran Yunani kuno, telah memberikan panduan bagi banyak orang dalam menghadapi tantangan hidup...",
    image: "/images/banner/1.png",
    date: "2022-01-01",
  },
  {
    id: 2,
    title: "Stoikisme dan Seni Menghadapi Ketidakpastian",
    description:
      "Di dunia yang penuh ketidakpastian, Stoikisme menawarkan panduan untuk menghadapi tantangan hidup dengan tenang dan bijaksana...",
    image: "/images/banner/2.png",
    date: "2022-01-11",
  },
  {
    id: 3,
    title: "Mengapa Stoikisme Penting untuk Kesehatan Mental",
    description:
      "Filsafat Stoik telah terbukti bermanfaat untuk kesehatan mental, terutama dalam mengelola stres dan kecemasan...",
    image: "/images/banner/3.png",
    date: "2022-01-23",
  },
  {
    id: 4,
    title:
      "Stoikisme di Tempat Kerja: Meningkatkan Produktivitas dan Kepuasan Kerja",
    description: "Stoikisme bukan hanya relevan untuk kehidupan...",
    image: "/images/banner/4.png",
    date: "2022-02-27",
  },
];

export default function OurBlog() {
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
              description={blog.description}
              imageURL={blog.image}
              date={blog.date}
              url={`/blog/${blog.id}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
