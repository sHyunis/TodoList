import React from "react";
import styled from "styled-components";
import { useTodo } from "../contexts/TodoContext"; // Context 파일 경로 확인

const InputBox = styled.div`
  width: 800px;
  margin: 30px auto;
  background-color: #badfff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  border-radius: 5px;
`;

const WriteBox = styled.div`
  width: 250px;
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  gap: 5px;
`;

const WriteTodo = styled.input`
  width: 200px;
  height: 1.5rem;
  border: none;
  border-radius: 5px;
`;

const WriteBtn = styled.button`
  width: 40px;
  height: 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const InputTodo = () => {
  const { inputValue, handleAddTodoList, setInputValue } = useTodo(); // Context에서 값 가져오기

  return (
    <InputBox>
      <h1>Todo List</h1>
      <WriteBox>
        <WriteTodo
          type="text"
          value={inputValue} // 인풋 필드 값 바인딩
          onChange={(e) => setInputValue(e.target.value)} // 인풋 필드 값 변경
        />
        <WriteBtn type="button" onClick={handleAddTodoList}>
          Add
        </WriteBtn>
      </WriteBox>
    </InputBox>
  );
};

export default InputTodo;
