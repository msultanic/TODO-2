import React from "react";
import { useDispatch } from "react-redux";
import { enableEditing } from "../../redux/reducers/updateTask";
import { useSelector } from "react-redux";
import { enableAddFrom } from "../../redux/reducers/addForm";
import { deleteIdOfActiveTask } from "../../redux/reducers/activeTask";
import { closeModal } from "../../redux/reducers/dialogModal";
import { deleteModalPosition } from "../../redux/reducers/dialogModalPosition";

const Footer = () => {
  let dispatch = useDispatch();
  const newButton = useSelector((state) => state.addForm);

  const handleButtonActions = () => {
    if (newButton) {
      dispatch(enableEditing());
    }
    dispatch(deleteIdOfActiveTask());
    dispatch(closeModal());
    dispatch(deleteModalPosition());
    dispatch(enableAddFrom());
  };

  return (
    <div className="todo-footer">
      <div className="todo-footer-button" onClick={handleButtonActions}>
        {!newButton && (
          <div className="todo-footer-button-text text">
            <p>+ New task</p>
          </div>
        )}
        {newButton && (
          <div className="todo-footer-button-text text">
            <p>+ Add task</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const MemoizedFooter = React.memo(Footer);
