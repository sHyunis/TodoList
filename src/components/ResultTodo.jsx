import React from "react";
import { useTodo } from "../contexts/TodoContext";
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
  position: fixed;
  position: absolute;
  right: 1rem;
`;

const ResultTodo = () => {
  const { todoList, removeTodoList } = useTodo();

  return (
    <ResultList>
      <h2>오늘 할 일!</h2>
      {todoList.map((data) => {
        return (
          <ResultBox key={data}>
            <input type="checkbox" />
            <ResultText>{data}</ResultText>
            <DeleteButton type="button" onClick={() => removeTodoList(data)}>
              Delete
            </DeleteButton>
          </ResultBox>
        );
      })}
    </ResultList>
  );
};

export default ResultTodo;
