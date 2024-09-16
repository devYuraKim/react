import { createContext, useContext, useState, useMemo } from "react";
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

// 1.Create a new context
// 2.Provide a value to a child component
// 3.Consume that value in a child component

/*[1.CREATE A NEW CONTEXT OBJECT]*/
const PostContext = createContext();

/*[2.CREATE A CONTEXT PROVIDER COMPONENT: sets up context object details(value), state management and functions]*/
function PostProvider({ children }) {
  //all the states and state updating logic
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const value = useMemo(() => {
    return {
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
    };
  }, [searchQuery, searchedPosts]);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

/*[3.CREATE CUSTOM HOOK FOR CONSUMING CONTEXT]*/
function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}
export { PostProvider, usePosts };
