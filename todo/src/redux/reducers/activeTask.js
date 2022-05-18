import { CHANGE_ACTIVE } from "../constants";

export const idOfActvieTaskReducer = (state = -1, action) => {
  if (action.type === CHANGE_ACTIVE) {
    if (action.payload !== state) return action.payload;
    return -1;
  }
  return state;
};

export function updateIdOfActiveTask(todoId) {
  return {
    type: CHANGE_ACTIVE,
    payload: todoId,
  };
}
