import React, { useContext } from "react";

// Posts are loaded at build time in pages/desktop.js and shared here, so any
// window (including one reopened from a desktop icon) can read them.
const PostsContext = React.createContext([]);

export function usePosts() {
  return useContext(PostsContext);
}

export function PostsProvider(props) {
  return (
    <PostsContext.Provider value={props.posts}>
      {props.children}
    </PostsContext.Provider>
  );
}
