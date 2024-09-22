"use client";
import MenuLists from "@/components/menuList/MenuLists";
import PostDetails from "@/components/postdetails/PostDetails";
import CommentCard from "@/components/comments/commentCard/CommentCard";
import NextPostNavigation from "@/components/nextPost/NextPostNavigation";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchMediumPosts } from "@/utils/actions/fetchMediumPosts";
import { useEffect, useState } from "react";

const Page = async ({ params }: any) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const [previousPost, setPreviousPost] = useState(null);

  useEffect(() => {
    async function getPosts() {
      const mediumPosts = await fetchMediumPosts();
      setPosts(mediumPosts);

      // Find the post that matches the params.id
      const matchedPost = mediumPosts.find((p: any) => p.id === params.id);
      if (matchedPost) {
        setPost(matchedPost);

        // Find the current post's index
        const currentIndex = mediumPosts.findIndex(
          (p: any) => p.id === params.id
        );

        // Set the next post if available
        if (currentIndex !== -1 && currentIndex < mediumPosts.length - 1) {
          setNextPost(mediumPosts[currentIndex + 1]);
        }

        // Set the previous post if available
        if (currentIndex > 0) {
          setPreviousPost(mediumPosts[currentIndex - 1]);
        }
      }
    }
    getPosts();
  }, [params.id]);

  console.log("posts", posts);
  console.log("post", post);
  console.log("nextPost", nextPost);
  console.log("previousPost", previousPost);

  return (
    <div
      style={{
        fontFamily: "Rubik",
        backgroundImage: "url('/assets/bg-image2.jpeg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="container mx-auto px-10 mb-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 pt-36 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {post ? (
            <>
              <PostDetails post={post} />
              {/* <NextPostNavigation
                nextPost={nextPost}
                previousPost={previousPost}
              /> */}
              {/* <CommentCard post={post} /> */}
            </>
          ) : (
            <Skeleton />
          )}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8 pb-10">
            <MenuLists recentPost={posts.slice(0, 5)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
