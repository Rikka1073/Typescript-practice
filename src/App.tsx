import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./ UserProfile";

const user = {
  name: "トーマス",
  hobbies: ["映画", "ゲーム"],
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
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <Todo title={todo.title} userId={todo.userId} completed={todo.completed} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
