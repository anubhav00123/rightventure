"use client";
import NextPost from "./NextPost";

const NextPostNavigation = ({ nextPost, previousPost }: any) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8">
        <>
          {previousPost && (
            <div
              className={`${
                nextPost
                  ? "col-span-1 lg:col-span-4"
                  : "col-span-1 lg:col-span-8"
              } adjacent-post rounded-lg relative h-72`}
            >
              <NextPost post={previousPost} position="LEFT" />
            </div>
          )}
          {nextPost && (
            <div
              className={`${
                previousPost
                  ? "col-span-1 lg:col-span-4"
                  : "col-span-1 lg:col-span-8"
              } adjacent-post rounded-lg relative h-72`}
            >
              <NextPost post={nextPost} position="RIGHT" />
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default NextPostNavigation;
