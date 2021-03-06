import React, { useRef } from "react";
import ContentItem from "../ContentItem";
import { useSelector } from "react-redux";
import { Circles } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { disableEditing, enableEditing } from "../../redux/reducers/updateTask";
import { disableAddFrom } from "../../redux/reducers/addForm";
import { addTodo } from "../../redux/reducers/CRUD";
import { v1 as uuid } from "uuid";
import ConfirmModal from "../ConfirmModal";

const Content = ({ loading, existTodo }) => {
  const data = useSelector((state) => state.tasks);
  const newButton = useSelector((state) => state.addForm);
  const enableNewTask = useSelector((state) => state.updateEnabled);
  const taskDescription = useRef("");
  let dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modalIsOpen);

  if (enableNewTask) {
    if (taskDescription.current.length > 0)
      dispatch(
        addTodo({
          id: uuid(),
          title: taskDescription.current,
        })
      );
    taskDescription.current = "";
    dispatch(disableEditing());
    dispatch(disableAddFrom());
  }

  const handleKeypress = (e) => {
    if (e.key === "Enter") dispatch(enableEditing());
  };

  const handleTextInput = (e) => {
    taskDescription.current = e.target.value;
  };

  return (
    <div className="todo-content">
      {modalIsOpen && <ConfirmModal />}
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
            <ContentItem title={todo.title} key={todo.id} id={todo.id} />
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
            onKeyPress={handleKeypress}
            autoFocus
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
