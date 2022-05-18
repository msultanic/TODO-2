import React, { useRef } from "react";
import ContentItem from "../ContentItem";
import { useSelector } from "react-redux";
import { Circles } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { disableEditing } from "../../redux/reducers/updateTask";
import { disableAddFrom } from "../../redux/reducers/addForm";
import { addTodo } from "../../redux/reducers/CRUD";
import { v1 as uuid } from "uuid";

const Content = ({ loading, existTodo }) => {
  const data = useSelector((state) => state.tasks);
  const newButton = useSelector((state) => state.addForm);
  const enableNewTask = useSelector((state) => state.updateEnabled);
  const task = useRef("");
  let dispatch = useDispatch();

  if (enableNewTask) {
    dispatch(
      addTodo({
        id: uuid(),
        name: task.current,
      })
    );
    dispatch(disableEditing());
    dispatch(disableAddFrom());
  }

  const handleTextInput = (e) => {
    task.current = e.target.value;
  };

  return (
    <div className="todo-content">
      {loading && (
        <div className="todo-content-center">
          <Circles color="#8e96b8" height={50} width={50} />
        </div>
      )}
      <div className="todo-content-whitespace-top"></div>
      <div className="todo-content-container">
        {existTodo &&
          !loading &&
          data.map((todo, index) => (
            <ContentItem title={todo.name} key={todo.id} id={todo.id} />
          ))}
      </div>
      <div
        className={
          !newButton
            ? "todo-content-whitespace-bottom"
            : "todo-content-whitespace-bottom2"
        }
      >
        {newButton && (
          <input
            type="text"
            className="todo-content-whitespace-bottom2-input"
            onChange={handleTextInput}
          />
        )}
      </div>
    </div>
  );
};

export default Content;
