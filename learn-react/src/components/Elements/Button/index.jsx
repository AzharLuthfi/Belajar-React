import React from "react";
// buat component dalam satu file yang sama
export default function Button(props) {
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
