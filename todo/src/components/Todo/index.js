import React from "react";
import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";

const Todo = () => {
  return (
    <div className="todo">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Todo;

// <
//       <div className="todo-header">
//         <div className="todo-header-icon"></div>
//         <div className="todo-header-text">
//           <h1>selam</h1>
//         </div>
//       </div>
//       <div className="todo-content">
//         <div className="todo-content-item"></div>
//       </div>
//       <div className="todo-footer">
//         <div className="todo-footer-button"></div>
//       </div>
//     </>
