const initialState = {
  todos: [],
  loading: true,
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS_SUCCESS":
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_TODOS_FAILURE":
      return {
        todos: [],
        loading: false,
        error: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false,
        error: null,
      };
    case "EDIT_TODO":
      const { id: itemId, data: newData } = action.payload;
      const index = state.todos.findIndex((todo) => todo._id === itemId);
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          newData,
          ...state.todos.slice(index + 1),
        ],
        loading: false,
        error: null,
      };
    case "REMOVE_TODO":
      const id = action.payload;
      const itemIndex = state.todos.findIndex((todo) => todo._id === id);

      return {
        ...state,
        todos: [
          ...state.todos.slice(0, itemIndex),
          ...state.todos.slice(itemIndex + 1),
        ],
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default reducer;
