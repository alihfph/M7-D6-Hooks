import React from "react";
import { toggleCompleted, reset } from "../store/actions";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export default function List(props) {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();
  return (
    <>
      <ul>
        {list.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch(toggleCompleted(todo))}
            className={todo.completed ? "strikethrough" : ""}
          >
            {todo.description}
          </li>
        ))}
      </ul>
      <Button onClick={() => dispatch(reset())}>reset</Button>
    </>
  );
}
