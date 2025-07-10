import { createRoot } from "react-dom/client";
import HelloWorld from "./helloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import TodoApp from "../todo-list/TodoApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoApp />
    </Container>
  </StrictMode>
);
