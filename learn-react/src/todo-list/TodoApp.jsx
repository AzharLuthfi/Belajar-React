import Todo from "./Todo";
export default function TodoApp() {
  const data = [
    { id: 1, text: "Todo 1", isComplete: false },
    { id: 2, text: "Todo 2", isComplete: true },
    { id: 3, text: "Todo 3", isComplete: false },
  ];

  return (
    <ul>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
