import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
  todoList: [],
  inputValue: "",
};

// createSlice를 사용하여 리듀서와 액션 생성자 정의
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    addTodo: (state) => {
      if (state.inputValue.trim() === "") {
        alert("문자가 입력되지 않았습니다.");
        return;
      }
      if (state.todoList.includes(state.inputValue)) {
        alert("이미 존재하는 계획입니다.");
        return;
      }
      state.todoList.push(state.inputValue);
      state.inputValue = ""; // 입력 필드 초기화
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter((todo) => todo !== action.payload);
    },
  },
});

// 액션 생성자와 리듀서 내보내기
export const { setInputValue, addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
