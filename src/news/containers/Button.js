import React from "react";
import { useDispatch } from "react-redux";
import { getNews } from "../actions"


const Button = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(getNews())}>
        Press to see news
      </button>
    </div>
  )
}

export default Button;
