import React from "react";
import { useCounter } from "../hooks/useCounter";

export function Counter() {
  const { count, increment } = useCounter();

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}
