import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../../redux/reducers/dialogModal";
import {
  setIdOfActiveTask,
  deleteIdOfActiveTask,
} from "../../redux/reducers/activeTask";
import { useSelector } from "react-redux";
import { updateTodo } from "../../redux/reducers/CRUD";
import {
  deleteModalPosition,
  setModalPosition,
} from "../../redux/reducers/dialogModalPosition";
import { disableAddFrom } from "../../redux/reducers/addForm";
import { disableEditing } from "../../redux/reducers/updateTask";

const ContentItem = ({ title, id }) => {
  const [activeEdit, setActiveEdit] = useState(false);
  const [description, setDescription] = useState(title);

  let dispatch = useDispatch();

  const isActive = useSelector((state) => state.activeTask) === id;
  const modalIsOpen = useSelector((state) => state.modalIsOpen);
  const allowEdit = isActive && activeEdit;

  title = title.length > 20 ? title.slice(0, 20).trim() + "..." : title;

  const handleTaskUpdate = (e) => {
    setDescription(e.target.value);
  };

  if (!isActive && activeEdit) setActiveEdit(false);

  const handleActiveTask = () => {
    if (isActive) {
      dispatch(closeModal());
      dispatch(deleteModalPosition());
      setActiveEdit(false);
      dispatch(deleteIdOfActiveTask(id));
    } else dispatch(setIdOfActiveTask(id));
    dispatch(disableAddFrom());
    dispatch(disableEditing());
  };

  const handleDelete = (e) => {
    setActiveEdit(false);
    if (modalIsOpen) dispatch(closeModal());
    else {
      var position = e.target.getBoundingClientRect();
      dispatch(setModalPosition(position));
      dispatch(openModal());
    }
  };

  const handlePencilButton = () => {
    if (modalIsOpen) {
      dispatch(closeModal());
      dispatch(deleteModalPosition());
    }
    setActiveEdit(!activeEdit);
  };

  useEffect(() => {
    if (description.length > 0 && !activeEdit)
      dispatch(updateTodo({ id, name: description }));
  }, [activeEdit]);

  return (
    <div className="todo-content-container-item">
      <div
        className={
          !allowEdit
            ? "todo-content-container-item-radiotext"
            : "todo-content-container-item-radiotext todo-content-container-item-radiotext-active"
        }
      >
        <button
          className={
            !isActive
              ? "todo-content-container-item-radiotext-radio"
              : "todo-content-container-item-radiotext-radio todo-content-container-item-radiotext-radio-active"
          }
          onClick={handleActiveTask}
        ></button>
        {allowEdit ? (
          <input
            id="input"
            type="text"
            className="todo-content-container-item-radiotext-text-active"
            value={description}
            onChange={handleTaskUpdate}
          />
        ) : (
          <div className={"todo-content-container-item-radiotext-text"}>
            <p>{title}</p>
          </div>
        )}
      </div>
      {isActive && (
        <div className="todo-content-container-item-icons">
          <i
            className={
              allowEdit
                ? "fa fa-pencil todo-content-container-item-icons-pen-active"
                : "fa fa-pencil todo-content-container-item-icons-pen"
            }
            onClick={handlePencilButton}
          ></i>
          <i
            className={
              modalIsOpen
                ? "fa fa-trash todo-content-container-item-icons-delete todo-content-container-item-icons-delete-modal"
                : "fa fa-trash todo-content-container-item-icons-delete"
            }
            onClick={handleDelete}
          ></i>
        </div>
      )}
    </div>
  );
};

export default ContentItem;
