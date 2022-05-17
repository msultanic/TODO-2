import React from "react";

const Footer = () => {
  return (
    <div className="todo-footer">
      <div className="todo-footer-button">
        <div className="todo-footer-button-text text">
          <p>+ New task</p>
        </div>
      </div>
    </div>
  );
};

export const MemoizedFooter = React.memo(Footer);
