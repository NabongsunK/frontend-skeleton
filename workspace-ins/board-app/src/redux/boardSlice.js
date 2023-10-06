import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: 'board',
  initialState: {
    itemList: [],
    currentItem: {comments: []}
  },
  reducers: {
    listArticle(state, action){
      state.itemList = action.payload.list;
    },
    currentArticle(state, action){
      state.currentItem = action.payload.article;
    },
    addComment({currentItem}, {payload}){
      currentItem.comments.push(payload.item);
    },
    updateArticle({itemList}, {payload}){
      const index = itemList.findIndex(article => article.id === payload.id);
      itemList[index] = { ...payload.item, id: payload.id };
    },
    deleteArticle({itemList}, {payload}){
      const index = itemList.findIndex(article => article.id === payload.id);
      itemList.splice(index, 1);
    },
  }
});

export default boardSlice;
export const { listArticle, currentArticle, addComment, updateArticle, deleteArticle } = boardSlice.actions;