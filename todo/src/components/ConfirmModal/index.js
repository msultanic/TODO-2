import React from "react";
import { useSelector } from "react-redux";
import { closeModal } from "../../redux/reducers/dialogModal";
import { deleteModalPosition } from "../../redux/reducers/dialogModalPosition";
import { deleteTodo } from "../../redux/reducers/CRUD";
import { useDispatch } from "react-redux";
import { deleteIdOfActiveTask } from "../../redux/reducers/activeTask";

const ConfirmModal = () => {
  const position = useSelector((state) => state.modalPosition);
  const id = useSelector((state) => state.activeTask);

  let dispatch = useDispatch();

  const confirmAction = () => {
    dispatch(deleteTodo(id));
    dispatch(deleteModalPosition());
    dispatch(closeModal());
    dispatch(deleteIdOfActiveTask(id));
  };

  const denyAction = () => {
    dispatch(deleteModalPosition());
    dispatch(closeModal());
  };

  return (
    <div
      className="confirm-modal"
      style={{
        position: "absolute",
        top: position.top + 22,
        left: position.left - 50,
      }}
    >
      <p>Are you sure?</p>
      <div className="confirm-modal-buttons">
        <span className="confirm-modal-buttons-text" onClick={confirmAction}>
          Yes
        </span>
        <span className="confirm-modal-buttons-text" onClick={denyAction}>
          No
        </span>
      </div>
    </div>
  );
};

export default ConfirmModal;
