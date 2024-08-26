import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../slices/todoSlice";
import styled from "styled-components";

const ResultList = styled.div`
  width: 800px;
  margin: 30px auto;
  background-color: #badfff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  border-radius: 5px;
  gap: 1rem;
`;

const ResultBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  gap: 1rem;
  border-radius: 5px;
  position: relative;
`;

const ResultText = styled.p`
  font-size: 1rem;
  color: black;
  font-family: 600;
`;

const DeleteButton = styled.button`
  height: 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  right: 1rem;
`;

const ResultTodo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);

  return (
    <ResultList>
      <h2>오늘 할 일!</h2>
      {todoList.map((todo) => (
        <ResultBox key={todo}>
          <input type="checkbox" />
          <ResultText>{todo}</ResultText>
          <DeleteButton onClick={() => dispatch(removeTodo(todo))}>
            Delete
          </DeleteButton>
        </ResultBox>
      ))}
    </ResultList>
  );
};

export default ResultTodo;
