export async function fetchMediumPosts() {
  try {
    const response = await fetch("/api/fetchMedium"); // Adjust this path if necessary
    if (!response.ok) {
      throw new Error("Failed to fetch Medium posts");
    }
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return [];
  }
}
