const getTodos = (todos) => {
  return { type: "FETCH_TODOS_SUCCESS", payload: todos };
};
const todosError = (error) => {
  return { type: "FETCH_TODOS_FAILURE", payload: error };
};
const addToDo = (data) => {
  return { type: "ADD_TODO", payload: data };
};
const upgradeToDo = (data) => {
  return { type: "EDIT_TODO", payload: data };
};
const removeToDo = (id) => {
  return { type: "REMOVE_TODO", payload: id };
};
const removeAllToDos = (data) => {
  return { type: "REMOVE_TODO", payload: data };
};
const fetchTodos = (dispatch, getAll) => {
  getAll()
    .then((data) => {
      dispatch(getTodos(data));
    })
    .catch((e) => {
      dispatch(todosError(e));
    });
};
export { fetchTodos, addToDo, removeToDo, removeAllToDos, upgradeToDo };
