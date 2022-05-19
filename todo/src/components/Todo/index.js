import React, { useEffect, useState } from "react";
import { MemoizedHeader } from "../Header";
import Content from "../Content";
import { MemoizedFooter } from "../Footer";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { addTodo, addTodoBase } from "../../redux/reducers/CRUD";
import { useSelector } from "react-redux";
import { v1 as uuid } from "uuid";

const Todo = () => {
  const [loading, setLoading] = useState(false);
  const [existTodo, setExistTodo] = useState(false);
  let dispatch = useDispatch();
  const data = useSelector((state) => state.tasks);

  if (data.length === 0 && existTodo) setExistTodo(false);

  const addData = (data) => {
    console.log("Dodaje datu sa neta u state");
    data.forEach((todo) => {
      dispatch(
        addTodo({
          id: uuid(),
          title: todo.title,
        })
      );
    });
  };

  const addDataBase = (data) => {
    console.log("Dodaje datu iz baze u state");
    data.forEach((todo) => {
      dispatch(
        addTodoBase({
          id: todo.id,
          title: todo.title,
        })
      );
    });
  };

  const fetchFromBase = async () => {
    setLoading(true);
    let tasksFromBase;
    await Axios.get("http://localhost:3002/task")
      .then((response) => {
        console.log("hej", response.data);
        tasksFromBase = response.data;
        addDataBase(response.data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
        setExistTodo(true);
      });
    if (!tasksFromBase.length) fetchFromServer();
    console.log("dobavlja podatke iz baze");
  };

  const fetchFromServer = async () => {
    setLoading(true);
    Axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        addData(response.data.slice(0, 5));
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
        setExistTodo(true);
      });
    console.log("dobavlja podatke sa neta");
  };

  useEffect(() => {
    if (!existTodo) fetchFromBase();
  }, [existTodo]);

  return (
    <div className="todo">
      <MemoizedHeader />
      <Content loading={loading} existTodo={existTodo} />
      <MemoizedFooter />
    </div>
  );
};

export default Todo;
