import { FORM_EXPAND, FORM_COLAPSE } from "../constants";

export const showAddFormReducer = (state = false, action) => {
  if (action.type === FORM_EXPAND) return true;
  else if (action.type === FORM_COLAPSE) return false;
  return state;
};

export function enableAddFrom() {
  return { type: FORM_EXPAND };
}

export function disableAddFrom() {
  return { type: FORM_COLAPSE };
}
