import { NextResponse } from "next/server";
import xml2js from "xml2js";

export async function GET() {
  try {
    const mediumRSSFeed = "https://medium.com/feed/@anubhavkaushik2020";

    // Fetch RSS feed data
    const response = await fetch(mediumRSSFeed, {
      method: "GET",
      headers: {
        Accept: "application/rss+xml",
      },
    });

    const responseText = await response.text();

    // Parse XML response
    const parsedResult = await xml2js.parseStringPromise(responseText);

    // Extract and structure post data
    const items = parsedResult.rss.channel[0].item;

    // Initial static ID
    let staticId = 1001023312321;

    const postsData = items.map((item: any) => {
      const link = item.link[0];
      const pubDate = new Date(item.pubDate[0]).toISOString();

      // Create a unique ID with static base and increment it
      const uniqueId = (staticId++).toString();

      return {
        id: uniqueId, // Unique identifier for the post
        title: item.title[0],
        link: item.link[0],
        pubDate: item.pubDate[0],
        content: item["content:encoded"][0],
      };
    });

    return NextResponse.json({ posts: postsData });
  } catch (error) {
    console.error("Error fetching Medium RSS feed:", error);
    return NextResponse.json(
      { error: "Failed to fetch Medium RSS feed" },
      { status: 500 }
    );
  }
}
