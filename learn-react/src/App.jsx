import { React } from "react";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-blue-300">
        <RegisterPage />
      </div>
    </>
  );
}

export default App;
