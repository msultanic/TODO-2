import { UPDATE_ENABLED, UPDATE_DISABLED } from "../constants";

export const activeUpdateTaskReducer = (state = false, action) => {
  if (action.type === UPDATE_ENABLED) return true;
  else if (action.type === UPDATE_DISABLED) return false;
  return state;
};

export function enableEditing() {
  return {
    type: UPDATE_ENABLED,
  };
}

export function disableEditing() {
  return {
    type: UPDATE_DISABLED,
  };
}
