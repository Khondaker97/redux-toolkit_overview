import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface Article {
  id: string;
  title: string;
  content: string;
}
const initialState: Article[] = [
  {
    id: "1",
    title: "Revising Redux Toolkit",
    content: "I've seen simplified way to store state globally!",
  },
  {
    id: "2",
    title: "Revising Redux Toolkit",
    content: "I've seen simplified way to store state globally!",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action: PayloadAction<Article>) {
      state.push(action.payload);
    },
  },
});

export const SelectAllPosts = (state: RootState) => state.posts;

export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
