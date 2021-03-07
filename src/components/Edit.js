import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useFetch from "../hooks/useFetch";
import { useSelector, useDispatch, connect } from "react-redux";
import { upgradeToDo } from "../actions";

import "../style.css";

const Edit = ({ id }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { put } = useFetch("https://todo.eachbase.com/api/KaroGhulyan/todos");
  let [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
      console.log(id)
      console.log(data)
    put(id, data);
    dispatch(upgradeToDo({ id, data }));
  };

  useEffect(() => {
    console.log("render");
  }, [count]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="title" placeholder="Title" ref={register} />
      <input
        name="description"
        placeholder="Description"
        ref={register({ required: true })}
      />
      <input
        name="color"
        placeholder="Color"
        ref={register({ required: true })}
      />
      {/* <input type="color"  name="head" value="#e66465"></input> */}
      {errors.exampleRequired && <span>This field is required</span>}
      <button type="submit" className="btn btn-success btn-block">
        Edit
      </button>
      {/* <input type="submit" /> */}
    </form>
  );
};

export default Edit;
