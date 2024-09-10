import { createContext } from "react";

function PostContext() {
  const PostContext = createContext();

  <PostContext.Provider
    value={{
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
    }}
  ></PostContext.Provider>;
}

export default PostContext;
