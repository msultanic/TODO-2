import React, { useEffect, useState } from "react";
import { MemoizedHeader } from "../Header";
import Content from "../Content";
import { MemoizedFooter } from "../Footer";
import Axios from "axios";

const Todo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [existTodo, setExistTodo] = useState(false);

  useEffect(() => {
    if (!existTodo) {
      setLoading(true);
      Axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          console.log(response.data);
          setData(response.data.slice(0, 20));
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
          setExistTodo(true);
        });

      console.log("hvata podatke");
    }
  }, [existTodo]);

  console.log("Babo", data);

  return (
    <div className="todo">
      <MemoizedHeader />
      <Content data={data} loading={loading} existTodo={existTodo} />
      <MemoizedFooter />
    </div>
  );
};

export default Todo;
