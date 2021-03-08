import React from "react";
import { useForm } from "react-hook-form";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { upgradeToDo } from "../actions";
import { v4 as uuidv4 } from "uuid";

import "../style.css";

const Edit = ({ id, onChangeToSubmit }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { put } = useFetch("https://todo.eachbase.com/api/KaroGhulyan/todos");
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    data._id = uuidv4();
    put(id, data);
    dispatch(upgradeToDo({ id, data }));
    onChangeToSubmit();
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
      <button type="submit" className="btn btn-block">
        Edit
      </button>
    </form>
  );
};

export default Edit;
