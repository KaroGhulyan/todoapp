import { createStore } from "redux";
import reducer from "../reducers/index";

const store = createStore(reducer);
export default store;
// function reducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case "GET_TODOS":
//       return {
//         ...state,
//         data: action.payload,
//       };
//     case "ADD_TASK":
//       return {
//         ...state,
//         data: action.payload,
//       };
//     case "REMOVE_TASK":
//       return {
//         ...state,
//         data: action.tasks,
//       };
//     default:
//       return state;
//   }
// }
