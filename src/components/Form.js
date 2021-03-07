import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useFetch from "../hooks/useFetch";
import { useSelector, useDispatch, connect } from "react-redux";
import { addToDo } from "../actions";

import "../style.css";

const Form = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { post } = useFetch("https://todo.eachbase.com/api/KaroGhulyan/todos");
  let [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    post(data);
    dispatch(addToDo(data));
    count++;
    console.log(count);
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
      <input type="submit" />
    </form>
  );
};

export default Form;
