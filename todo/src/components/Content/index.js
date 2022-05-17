import React from "react";
import ContentItem from "../ContentItem";

const Content = ({ data, loading, existTodo }) => {
  return (
    <div className="todo-content">
      <div className="todo-content-whitespace-top"></div>
      <div className="todo-content-container">
        {loading && <h1>KAKO JE</h1>}
        {existTodo &&
          !loading &&
          data.map((todo, index) => (
            <ContentItem title={todo.title} key={index} />
          ))}
      </div>
      <div className="todo-content-whitespace-bottom"></div>
    </div>
  );
};

export default Content;
