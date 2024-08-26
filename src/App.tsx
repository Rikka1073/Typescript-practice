import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Todo } from "./Todo";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
      setTodos(res.data);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <Todo title={todo.title} userid={todo.userId} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
