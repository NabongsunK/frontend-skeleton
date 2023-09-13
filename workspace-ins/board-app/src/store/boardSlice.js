import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: 'boardApp',
  initialState: {
    itemList: [],
    currentItem: { comments: [] }
  },
  reducers: {
    listArticle(state, action){
      state.itemList = action.payload.list;
    },
    currentArticle(state, action){
      state.currentItem = action.payload.article;
    },
    addComment({currentItem}, {payload}){
      currentItem.comments.push(payload.comment);
    },
    updateArticle({itemList}, {payload}){
      const updateIndex = itemList.findIndex(todo => todo.no === payload.no);
      itemList[updateIndex] = { ...payload.item, no: payload.no };
    },
    deleteArticle({itemList}, {payload}){
      const index = itemList.findIndex(article => article.id === payload.id);
      itemList.splice(index, 1);
    }
  }
});

export default boardSlice;
export const { listArticle, currentArticle, addComment, updateArticle, deleteArticle } = boardSlice.actions;