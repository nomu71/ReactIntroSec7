import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo.jsx";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTODOs } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTODOs, setIncompleteTODOs] = useState([]);
  const [completeTODOs, setCompleteTODOs] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTODOs, todoText];
    setIncompleteTODOs(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTODOs];
    newTodos.splice(index, 1);
    setIncompleteTODOs(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTODOs];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTODOs, incompleteTODOs[index]];
    setIncompleteTODOs(newIncompleteTodos);
    setCompleteTODOs(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTODOs];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTODOs, completeTODOs[index]];
    setCompleteTODOs(newCompleteTodos);
    setIncompleteTODOs(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      {/* <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div> */}

      <IncompleteTodos
        todos={incompleteTODOs}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      {/* <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTODOs.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div> */}

      <CompleteTODOs todos={completeTODOs} onClickBack={onClickBack} />
      {/* <div className="complete-area">
        <p className="title">完了済のTODO</p>
        <ul>
          {completeTODOs.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div> */}
    </>
  );
};
