import moment from "moment";
import Link from "next/link";

const MenuLists = ({ recentPost }: any) => {
  const extractImageUrl = (content: any) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const imgElement = doc.querySelector("img");
    return imgElement ? imgElement.src : null;
  };

  return (
    <div>
      <div className="white_glass shadow-lg rounded-lg p-8 pb-4 mb-8">
        <h3 className="text-2xl text-center mb-3 font-semibold border-b pb-4">
          Recent Posts
        </h3>

        {recentPost.map((post: any, index: number) => {
          const imageUrl = extractImageUrl(post.content);
          return (
            <div
              key={index}
              className="flex items-center w-full rounded-lg hover:shadow-lg px-2 py-1 hover:bg-slate-300 hover:shadow-black border-0 mb-4"
            >
              {/* <div className="w-16 flex-none">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={`Image for ${post.title}`}
                    className="object-top absolute h-full w-full object-fill shadow-lg rounded-t-lg lg:rounded-lg"
                  />
                )}
              </div> */}
              <div className="flex-grow ml-4">
                <p className="text-gray-900 font-xs">
                  {moment(post.pubDate).format("DD/MM/YYYY")}
                </p>
                <Link href={`/blogs/blog/${post.id}`} className="text-md">
                  {post.title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuLists;
