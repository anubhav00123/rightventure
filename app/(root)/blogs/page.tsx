"use client";
import Featured from "@/components/featured/Featured";
import PostCards from "@/components/postCards/PostCards";
import MenuLists from "@/components/menuList/MenuLists";
import {
  fetchFeaturedBlogPosts,
  fetchRecentBlogPosts,
  fetchBlogPosts,
  fetchBlogCount,
} from "@/utils/actions/blogPost.action";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import { fetchMediumPosts } from "@/utils/actions/fetchMediumPosts";

// export const metadata: Metadata = {
//   title: "BLogs | Right Hand Venture",
//   description: "Get the latest updates on marketing trends and strategies.",
//   keywords: "Marketing,Trending",
// };

const Blogs = async ({}: any) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const mediumPosts = await fetchMediumPosts();
      setPosts(mediumPosts);
    }
    getPosts();
  }, []);
  console.log("posts", posts);
  return (
    <div
      style={{
        fontFamily: "Rubik",
        backgroundImage: "url('/assets/bg-image2.jpeg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="container mx-auto px-10 "
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 pt-10 col-span-1">
          {posts.length ? (
            <>
              {posts.map((post: any, index: number) => (
                <div key={index}>
                  <PostCards post={post} />
                </div>
              ))}
            </>
          ) : (
            <div>
              {
                <div>
                  <h1 className="text-center text-2xl text-yellow-50 pb-10">
                    No result found
                  </h1>
                  <Skeleton className="h-60" />
                </div>
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

async function getPostData(page: number, pageSize: number) {
  const featuredPost = await fetchFeaturedBlogPosts();
  const recentPost = await fetchRecentBlogPosts();
  const blogPosts = await fetchBlogPosts(page, pageSize);
  const blogCount = await fetchBlogCount();

  return { featuredPost, recentPost, blogPosts, blogCount };
}
