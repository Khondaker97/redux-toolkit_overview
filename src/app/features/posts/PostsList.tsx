import React, { useState } from "react";
import { useAppSelector } from "../../hooks";
import { SelectAllPosts } from "./postsSlice";
import styles from "./posts.module.css";
import AddPostForm from "./AddPostForm";
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
    <section className={styles.posts}>
      <AddPostForm />
      <h1>Posts</h1>
      {renderPosts}
    </section>
  );
};

export default PostsList;
