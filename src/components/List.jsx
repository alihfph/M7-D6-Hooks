import React from "react";
import { toggleCompleted, reset } from "../store/actions";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";



export default function  List (props){
  const list = useSelector((state) => state.list);
    return (
      <>
        <ul>
          {list.map((todo) => (
            <li
              key={todo.id}
              onClick={() => toggleCompleted(todo)}
              className={todo.completed ? "strikethrough" : ""}
            >
              {todo.description}
            </li>
          ))}
        </ul>
        <Button onClick={reset}>reset</Button>
      </>
    );
  }


