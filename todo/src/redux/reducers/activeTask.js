import { SET_ACTIVE, DELETE_ACTIVE } from "../constants";

export const idOfActvieTaskReducer = (state = -1, action) => {
  if (action.type === SET_ACTIVE) return action.payload;
  else if (action.type === DELETE_ACTIVE) return -1;
  return state;
};

export function setIdOfActiveTask(todoId) {
  return {
    type: SET_ACTIVE,
    payload: todoId,
  };
}

export function deleteIdOfActiveTask() {
  return {
    type: DELETE_ACTIVE,
  };
}
