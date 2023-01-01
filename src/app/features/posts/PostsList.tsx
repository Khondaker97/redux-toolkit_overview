import React, { useState } from "react";
import { useAppSelector } from "../../hooks";
import { SelectAllPosts } from "./postsSlice";
type Props = {};
const PostsList = (props: Props) => {
  const posts = useAppSelector(SelectAllPosts);

  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <div>
      <h2>Posts</h2>
      {renderPosts}
    </div>
  );
};

export default PostsList;
