import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface Article {
  id: number;
  title: string;
  content: string;
}
const initialState: Article[] = [
  {
    id: 1,
    title: "Revising Redux Toolkit",
    content: "I've seen simplified way to store state globally!",
  },
  {
    id: 2,
    title: "Revising Redux Toolkit",
    content: "I've seen simplified way to store state globally!",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const SelectAllPosts = (state: RootState) => state.posts;
export default postsSlice.reducer;
