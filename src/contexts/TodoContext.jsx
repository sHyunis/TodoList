import React, { createContext, useContext, useState } from "react";

// 1. Context 생성
const TodoContext = createContext();

// 2. 커스텀 Hook 생성
export const useTodo = () => useContext(TodoContext);

// 3. Provider 컴포넌트 정의
export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]); // 상태 관리
  const [inputValue, setInputValue] = useState(""); // 인풋 필드 상태 관리

  const handleAddTodoList = () => {
    if (inputValue.trim() === "") {
      alert("문자가 입력되지 않았습니다.");
    } else if (todoList.includes(inputValue)) {
      alert("이미 존재하는 계획입니다.");
    } else {
      setTodoList((prevList) => [...prevList, inputValue]); // 새로운 할 일 추가
      setInputValue(""); // 인풋 필드 초기화
    }
  };

  const removeTodoList = (data) => {
    setTodoList((prevList) => prevList.filter((prevData) => prevData !== data));
  };
  // Context에 제공할 값 정의
  const value = {
    todoList,
    inputValue,
    setInputValue,
    handleAddTodoList,
    removeTodoList,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
