import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: 'boardApp',
  initialState: {itemList: []},
  reducers: {
    listArticle(state, action){
      state.itemList = action.payload.list;
    },
    addArticle({itemList}, {payload}){
      itemList.unshift(payload.item);
    },
    updateArticle({itemList}, {payload}){
      const updateIndex = itemList.findIndex(todo => todo.no === payload.no);
      itemList[updateIndex] = { ...payload.item, no: payload.no };
    },
    deleteArticle({itemList}, {payload}){
      const deleteIndex = itemList.findIndex(todo => todo.no === payload.no);
      itemList.splice(deleteIndex, 1);
    }
  }
});

export default boardSlice;
export const { listArticle, addArticle, updateArticle, deleteArticle } = boardSlice.actions;