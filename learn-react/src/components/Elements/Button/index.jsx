import React from "react";
// buat component dalam satu file yang sama
export default function Button(props) {
  // nama komponen diawali kapital
  const { classname = "bg-black", children } = props; // pake distructering juga bisa, kita bisa tambahin nilai default
  return (
    <>
      <button
        className={`h-10 px-6 font-semibold rounded text-white ${classname}`}
        type="submit"
      >
        {children}
      </button>
    </>
  );
}
