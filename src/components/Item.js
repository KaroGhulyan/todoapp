import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { removeToDo } from "../actions";
import { useDispatch } from "react-redux";
import useFetch from "../hooks/useFetch";

const Item = ({ title, description, index, color, id, onEditToDo }) => {
  const trash = <FontAwesomeIcon icon={faTrash} />;
  const edit = <FontAwesomeIcon icon={faEdit} />;
  const dispatch = useDispatch();
  let [count, setCount] = useState(0);

  const { del } = useFetch("https://todo.eachbase.com/api/KaroGhulyan/todos");
  const onDeleteToDo = (id) => {
    del(id);
    dispatch(removeToDo(id));
    count++;
    // console.log(count);
  };

  useEffect(() => {
    // console.log("render");
  }, [count]);

  return (
    <>
      <tr key={index} style={{ backgroundColor: color }}>
        <th scope="row">{index + 1}</th>
        <td>{title}</td>
        <td>{description}</td>
        <td>
          <button className="btn btn-danger" onClick={() => onDeleteToDo(id)}>
            {trash}
          </button>
        </td>
        <td>
          <button className="btn  btn-success" onClick={() => onEditToDo(id)}>
            {edit}
          </button>
        </td>
      </tr>
    </>
  );
};

export default Item;
