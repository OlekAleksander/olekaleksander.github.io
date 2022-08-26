import { formatDistance, format } from "date-fns";
export default function BlogGrid({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 ">
      {posts && posts.length > 0
        ? posts.map((post) => {
            return <BlogGridItem post={post} />;
          })
        : "No posts found"}
    </div>
  );
}
export function BlogGridItem({ post }) {
  return (
    <a
      href={`/blog/${post.attributes.slug}`}
      className="bg-neutral-800 w-256 content-center py-10 rounded-lg duration-300 hover:-translate-y-2 mt-6"
    >
      <img
        src={`http://localhost:1337${post.attributes.featuredImage.data.attributes.url}`}
        width="256px"
        className="mx-auto rounded-md"
      />
      <h2 className="mt-6 font-semibold text-2xl text-clip">
        {post.attributes.title}
      </h2>
      <p className="text-violet-400">
        {format(new Date(post.attributes.updatedAt), "MM/dd/yyyy")}&nbsp; &bull;
        <br></br>
        <span className="text-neutral-200">OlekAleksander</span>
      </p>
    </a>
  );
}
