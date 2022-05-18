import React from "react";
import { useSelector } from "react-redux";
// import { closeModal } from "../../redux/reducers/dialogModal";

//izbrisati lokaciju
//zatvoriti ga

const ConfirmModal = () => {
  const position = useSelector((state) => state.modalPosition);
  // let dispatch = useDispatch();

  const toggleDialogModal = (e) => {
    console.log(e);
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
        <span className="modal_button" onClick={() => toggleDialogModal(true)}>
          Yes
        </span>
        <span className="modal_button" onClick={() => toggleDialogModal(false)}>
          No
        </span>
      </div>
    </div>
  );
};

export default ConfirmModal;
