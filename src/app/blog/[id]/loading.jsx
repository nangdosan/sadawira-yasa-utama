// components/LoadingSkeleton.jsx
export default function Loading() {
  return (
    <article className="mx-7 md:mx-24 py-20 flex flex-col justify-center items-center mt-5">
      <header className="mb-12 w-full md:w-3/4">
        <div className="h-10 bg-gray-300 rounded-md animate-pulse mb-5"></div>
        <div className="h-6 bg-gray-300 rounded-md animate-pulse w-1/3 mx-auto mb-5"></div>
        <div className="relative flex justify-center mx-auto w-full h-64 md:h-96 mb-0 md:mb-5 bg-gray-300 animate-pulse rounded-md"></div>
      </header>
      <div className="prose md:prose-md lg:prose-lg text-justify w-full md:w-3/4">
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
      </div>
    </article>
  );
}
