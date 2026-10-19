import React from "react";

import Window from "./Window";

function BlogPost(props) {
  const { post } = props;

  return (
    <Window
      id={props.id}
      title={post.title}
      positionClassName="absolute left-0 top-0 sm:left-[30%] sm:top-28"
      hiddenClassName="min-h-[300px] min-w-[350px] sm:w-[640px]"
      openClassName="bg-white"
    >
      <article className="scrollbar max-h-[calc(100dvh-7rem)] overflow-y-auto bg-white px-6 py-6 sm:max-h-[70vh] sm:px-10">
        <p className="font-monaco text-2xl text-gray-600">{post.displayDate}</p>
        <h1 className="mb-4 border-b-2 border-black pb-2 font-chicago text-[16px]">
          {post.title}
        </h1>
        <div
          className="post-body font-monaco text-2xl leading-normal"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Window>
  );
}

export default BlogPost;
