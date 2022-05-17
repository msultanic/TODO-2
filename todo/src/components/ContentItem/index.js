import React from "react";

const ContentItem = ({ title }) => {
  title = title.length > 20 ? title.slice(0, 20) + "..." : title;

  return (
    <div className="todo-content-container-item">
      <div className="todo-content-container-item-radiotext">
        <button className="todo-content-container-item-radiotext-radio"></button>
        <div className="todo-content-container-item-radiotext-text">
          <p>{title}</p>
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
