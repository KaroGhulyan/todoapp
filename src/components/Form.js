import React from "react";
import { useForm } from "react-hook-form";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToDo } from "../actions";

import "../style.css";

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { post } = useFetch("https://todo.eachbase.com/api/KaroGhulyan/todos");
  const dispatch = useDispatch();
  const { getAll } = useFetch(
    "https://todo.eachbase.com/api/KaroGhulyan/todos/"
  );
  const onSubmit = async (data) => {
    post(data);
    await getAll().then((data) => {
      dispatch(addToDo(data[data.length - 1]));
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="title" placeholder="Title" ref={register} />
      <input
        name="description"
        placeholder="Description"
        ref={register({ required: true })}
      />

      <input
        type="color"
        name="color"
        defaultValue="#e66465"
        ref={register({ required: true })}
      />

      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};

export default Form;
