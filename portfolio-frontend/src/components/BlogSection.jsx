import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchMediumBlogs = async () => {
      try {
        const rssFeed =
          "https://api.rss2json.com/v1/api.json?rss_url=https://siddsr0015.medium.com/feed";
        const res = await axios.get(rssFeed);
        setBlogs(res.data.items);
      } catch (err) {
        console.error("Failed to fetch Medium blog posts", err);
      }
    };

    fetchMediumBlogs();
  }, []);
  return (
    <>
      <div className="w-full min-h-screen px-6 md:px-16 py-20 bg-[var(--light-bg)] text-[var(--light-txt)]">
        <h2 className="font-bold mb-10" style={{ fontSize: "4rem" }}>
          Latest Blogs
        </h2>

        {blogs.length === 0 ? (
          <p>Loading blogs...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
            {blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition border-l-4 border-[var(--highlight)] p-6 group flex flex-col"
              >
                {/* Image */}
                {blog.thumbnail && (
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}

                {/* Title & Snippet */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--highlight)] transition pb-2">
                  {blog.title}
                </h3>
                <p
                  className="text-gray-700 text-sm mb-4"
                  dangerouslySetInnerHTML={{
                    __html: blog.description.substring(0, 150) + "...",
                  }}
                ></p>

                {/* Date + Read More */}
                <div className="flex justify-between items-center mt-6">
                  <span className="text-xs text-[var(--muted-text)]">
                    {new Date(blog.pubDate).toLocaleDateString()}
                  </span>
                  <span className="text-[var(--highlight)] text-sm font-bold">
                    Read More →
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      );
    </>
  );
}
