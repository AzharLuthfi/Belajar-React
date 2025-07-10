import { React } from "react";
import Button from "./components/Elements/Button";
function App() {
  return (
    <>
      <div className="flex justify-center items-center bg-blue-700 min-h-screen ">
        {/* panggil nama componenet disini kita juga bisa kirim prop dengan cara menambahkan properti pada masing masing component*/}
        <Button color="bg-black">Login</Button>
        <Button color="bg-black">Register</Button>
        {/* penggunaan children -> mengambil isi dari component */}
        <Button color="bg-slate-700">logout</Button>
        <Button color="bg-slate-700"></Button>
      </div>
    </>
  );
}

export default App;
