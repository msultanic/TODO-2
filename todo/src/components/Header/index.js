import React from "react";

const Header = () => {
  return (
    <div className="todo-header">
      <div className="todo-header-img">
        <div className="todo-header-img-line"></div>
        <div className="todo-header-img-line"></div>
        <div className="todo-header-img-line"></div>
      </div>
      <div className="todo-header-text text">
        <p> Motiff To-do List</p>
      </div>
    </div>
  );
};

export const MemoizedHeader = React.memo(Header);
