import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../actions";
import useFetch from "../hooks/useFetch";
import Item from "./Item";
import Form from "./Form";
import Edit from "./Edit";

const TodoList = () => {
  let [show, setShow] = useState(false);
  let [id, setId] = useState("");

  const { getAll } = useFetch(
    "https://todo.eachbase.com/api/KaroGhulyan/todos/"
  );
  const dispatch = useDispatch();
  let todos = useSelector((state) => state.todos);
  let loading = useSelector((state) => state.loading);
  let error = useSelector((state) => state.error);

  useEffect(() => {
    fetchTodos(dispatch, getAll);
  }, []);

  useEffect(() => {
    // fetchTodos(dispatch, getAll);
  }, [show]);

  const onEditToDo = (id) => {
    setShow(true);
    setId(id);
    // show = true;
  };
  const onChangeSubmit = () => {
    setShow(false);
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>`${error}`</h1>;
  }
  return (
    <div>
      <div className="mt-5 d-flex justify-content-center">
        <div className="col-8">
          {!show ? (
            <Form />
          ) : (
            <Edit id={id} onChangeToSubmit={onChangeSubmit} />
          )}
          {Object.keys(todos).length === 0 && (
            <p className="alert alert-info">No Todos at the moment</p>
          )}
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">To Do</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(({ title, description, _id, color }, index) => {
                return (
                  <tr key={index}>
                    <Item
                      onEditToDo={onEditToDo}
                      key={index}
                      title={title}
                      description={description}
                      color={color}
                      index={index}
                      id={_id}
                    />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
