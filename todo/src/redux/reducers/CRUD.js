import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../constants";

export const crudReducer = (data = [], action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...data];
      newTodos.push(action.payload);
      return newTodos;
    case DELETE_TODO:
      newTodos = [...data];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;
    case UPDATE_TODO:
      newTodos = [...data];
      let index = -1;
      for (let i = 0; i < newTodos.length; i++) {
        index++;
        if (newTodos[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newTodos[index] = action.payload;
        return newTodos;
      }
      break;
    default:
      return data;
  }
};

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function deleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}
