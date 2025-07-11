export default function AuthLayouts(props) {
  const { children, title } = props;
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-slate-950">
        <div className="w-full max-w-xs  p-5 rounded bg-indigo-500 shadow-lg shadow-indigo-500/50">
          <h1 className="text-3xl font-bold mb-2 text-white">{title}</h1>
          <p className="font-medium text-white">
            welcome, please enter your details
          </p>
          {children}
        </div>
      </div>
    </>
  );
}
