import { Children, React } from "react";
// buat component dalam satu file yang sama
function Button(props) {
  // nama komponen diawali kapital
  const { color, text, children = "..." } = props; // pake distructering juga bisa, kita bisa tambahin nilai default
  return (
    <>
      <button
        className={`flex items-center ${color} px-4 py-3 text-white hover:bg-slate-700 rounded-sm`}
      >
        {/* {text} */}
        {children}
      </button>
    </>
  );
}

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
