// import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Api() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        console.log(response)
        setTodo(response.data)});
  }, []);
  return (
    <div className="App">
      <h1>Get Api methode</h1>
      {todo.map((todo) => (
        <p style={{textAlign: "center"}} key={todo.id}>{todo.company.name}</p>
      ))}
    </div>
  );
}