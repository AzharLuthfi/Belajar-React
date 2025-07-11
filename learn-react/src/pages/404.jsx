import { useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-950">
      <div className="w-full max-w-xs  p-5 rounded  bg-indigo-500 shadow-lg shadow-indigo-500/50">
        <h1 className="text-3xl font-bold mb-2 text-white text-center">
          {error.status}
        </h1>
        <h2 className="text-3xl font-bold mb-2 text-white text-center">
          {error.statusText}
        </h2>
      </div>
    </div>
  );
}
