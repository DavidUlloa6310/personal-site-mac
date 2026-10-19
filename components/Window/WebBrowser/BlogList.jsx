import React from "react";

import BlogPost from "../BlogPost";
import { usePosts } from "../../../utils/PostsContext";
import { useWindowContext } from "../../../utils/WindowContext";

function BlogList() {
  const posts = usePosts();
  const { addWindow } = useWindowContext();

  function openPost(post) {
    const id = `post_${post.slug.replace(/[^a-zA-Z0-9_-]/g, "_")}`;
    addWindow(<BlogPost id={id} key={id} post={post} />);
  }

  return (
    <section className="mt-6 w-full max-w-[760px] border-2 border-black bg-white px-6 py-4 shadow-mac sm:px-8">
      <h2 className="border-b-2 border-black pb-2 font-chicago text-[16px]">
        Blog
      </h2>
      <ul>
        {posts.map((post) => (
          <li
            key={post.slug}
            className="grid gap-x-6 gap-y-1 border-t border-dotted border-black py-5 first:border-t-0 sm:grid-cols-[8.5rem_1fr]"
          >
            <p className="font-monaco text-2xl leading-6 text-gray-600">
              {post.displayDate}
            </p>
            <div>
              <h3 className="font-chicago text-[12px] leading-6">
                <button
                  type="button"
                  onClick={() => openPost(post)}
                  className="cursor-macPointer text-left underline decoration-1 underline-offset-2 hover:text-gray-600"
                >
                  {post.title}
                </button>
              </h3>
              {post.snippet && (
                <p className="font-monaco text-2xl leading-snug">
                  {post.snippet}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BlogList;
