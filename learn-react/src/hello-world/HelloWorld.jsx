import "./HelloWorld.css";

export function HeaderHelloWorld({ text = "Ups, lupa kasih Text" }) {
  return <h1 className="title">{text.toUpperCase()}</h1>;
}

export function ParagrafHelloWorld() {
  const text = "Belajar React JS Bareng Azhar Luthfiadi🚀";

  return <p className="content">{text.toLowerCase()}</p>;
}

export default function HelloWorld() {
  const props = {
    text: "Hello, World! From spread syntax",
  };
  return (
    <div>
      <HeaderHelloWorld {...props} />
      <ParagrafHelloWorld />
    </div>
  );
}
