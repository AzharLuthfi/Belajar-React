export default function AuthLayouts(props) {
  const { children, title } = props;
  return (
    <>
      <div className="w-full max-w-xs  p-5 rounded bg-amber-50">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500">
          welcome, please enter your details
        </p>
        {children}
      </div>
    </>
  );
}
