import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { deleteTodo } from "../../redux/reducers/CRUD";
import { openModal } from "../../redux/reducers/dialogModal";
import { updateIdOfActiveTask } from "../../redux/reducers/activeTask";
import { useSelector } from "react-redux";
import { updateTodo } from "../../redux/reducers/CRUD";

const ContentItem = ({ title, id }) => {
  const [activeEdit, setActiveEdit] = useState(false);
  title = title.length > 20 ? title.slice(0, 20).trim() + "..." : title;
  let dispatch = useDispatch();
  const isActive = useSelector((state) => state.activeTask) === id;
  const allowEdit = isActive && activeEdit;
  const [description, setDescription] = useState("");
  const modalIsOpen = useSelector((state) => state.modalIsOpen);

  const handleTaskUpdate = (e) => {
    setDescription(e.target.value);
  };

  //KAD OSTANE SAMO JEDNO SLOVO PONOVO NAPISE SVE

  const handleDelete = () => {
    dispatch(openModal());
    // dispatch(deleteTodo(id));
  };

  useEffect(() => {
    if (description && !activeEdit)
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
          onClick={() => dispatch(updateIdOfActiveTask(id))}
        ></button>
        {allowEdit ? (
          <input
            id="input"
            type="text"
            className="todo-content-container-item-radiotext-text-active"
            value={description.length > 0 ? description : title}
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
            onClick={() => setActiveEdit(!activeEdit)}
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
