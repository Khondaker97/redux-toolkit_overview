import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {};
interface IFormInput {
  title: String;
  content: string;
}
const AddPostForm = (props: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <section>
      <h1>Add a Post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="postTitle">Post Title: </label>
        <input
          type="text"
          id="postTitle"
          {...register("title", { required: true })}
        />
        <label htmlFor="postContent">Content: </label>
        <textarea
          id="postContent"
          {...register("content", { required: true })}
        />
        <button type="submit">Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
