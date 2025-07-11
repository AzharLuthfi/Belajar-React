export default function Label(props) {
  const { htmlFor, children } = props;
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="block my-2 text-sm/6 text-white font-bold"
      >
        {children}
      </label>
    </>
  );
}
