import { combineReducers } from "redux";
import { showAddFormReducer } from "./addForm";
import { crudReducer } from "./CRUD";
import { idOfActvieTaskReducer } from "./activeTask";
import { activeUpdateTaskReducer } from "./updateTask";
import { confirmModalReducer } from "./dialogModal";
import { dialogModalPositionReducer } from "./dialogModalPosition";

export const allReducers = combineReducers({
  addForm: showAddFormReducer,
  tasks: crudReducer,
  activeTask: idOfActvieTaskReducer,
  updateEnabled: activeUpdateTaskReducer,
  modalIsOpen: confirmModalReducer,
  modalPosition: dialogModalPositionReducer,
});
