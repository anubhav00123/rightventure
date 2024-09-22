"use client";
import FeaturedPostCard from "../featuredPostCard/FeaturedPostCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Skeleton } from "../ui/skeleton";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const Featured = ({ posts }: any) => {
  if (!posts) {
    return (
      <div>
        <div className="mb-8  ">
          <Carousel
            autoPlay
            infinite
            // customLeftArrow={customLeftArrow}
            // customRightArrow={customRightArrow}
            responsive={responsive}
            itemClass="px-4"
          >
            {[1, 2, 3, 4, 5].map((index) => (
              <Skeleton key={index} className="h-64" />
            ))}
          </Carousel>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8  ">
        <Carousel
          autoPlay
          infinite
          // customLeftArrow={customLeftArrow}
          // customRightArrow={customRightArrow}
          responsive={responsive}
          itemClass="px-4"
        >
          {posts.map((post: any, index: number) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Featured;
