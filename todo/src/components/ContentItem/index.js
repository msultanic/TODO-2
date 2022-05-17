import React from "react";

const ContentItem = () => {
  return (
    <div className="todo-content-container-item">
      <div className="todo-content-container-item-radiotext">
        <button className="todo-content-container-item-radiotext-radio"></button>
        <div className="todo-content-container-item-radiotext-text">
          <p>OpenSans-Semibold</p>
        </div>
      </div>
      <div className="todo-content-container-item-icons">
        <i className="fa fa-pencil todo-content-container-item-icons-pen"></i>
        <i className="fa fa-trash todo-content-container-item-icons-delete"></i>
      </div>
    </div>
  );
};

export default ContentItem;
