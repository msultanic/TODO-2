import { SET_MODAL_POSITION, DELETE_MODAL_POSITION } from "../constants";

export const dialogModalPositionReducer = (position = {}, action) => {
  if (action.type === SET_MODAL_POSITION) return action.payload;
  else if (action.type === DELETE_MODAL_POSITION) return {};
  return position;
};

export function setModalPosition(position) {
  return { type: SET_MODAL_POSITION, payload: position };
}

export function deleteModalPosition() {
  return { type: DELETE_MODAL_POSITION };
}
