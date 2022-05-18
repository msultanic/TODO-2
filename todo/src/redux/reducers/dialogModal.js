import { CLOSE_MODAL, OPEN_MODAL } from "../constants";

export const confirmModalReducer = (state = false, action) => {
  if (action.type === OPEN_MODAL) return true;
  else if (action.type === CLOSE_MODAL) return false;
  return state;
};

export function closeModal() {
  return { type: CLOSE_MODAL };
}

export function openModal() {
  return { type: OPEN_MODAL };
}
