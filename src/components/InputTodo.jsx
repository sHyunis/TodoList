import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInputValue, addTodo } from "../slices/todoSlice";
import styled from "styled-components";

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
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.todo.inputValue);

  const handleInputChange = (e) => {
    dispatch(setInputValue(e.target.value));
  };

  const handleAddTodo = () => {
    dispatch(addTodo());
  };

  return (
    <InputBox>
      <h1>Todo List</h1>
      <WriteBox>
        <WriteTodo
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <WriteBtn type="button" onClick={handleAddTodo}>
          Add
        </WriteBtn>
      </WriteBox>
    </InputBox>
  );
};

export default InputTodo;
