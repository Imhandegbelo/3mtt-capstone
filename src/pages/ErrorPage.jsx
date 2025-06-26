import { Link } from "react-router-dom";
export function ErrorPage() {
  return (
    <div className="flex bg-rose-50 w-full h-screen items-center">
      <div className="py-4 w-full sm:w-1/4 sm:h-1/4 text-center text-rose-700 mx-auto rounded-2xl shadow-2xl">
        <h1 className="text-2xl">Error: 404</h1>
        <p className="py-4">The requested resource could not be found</p>
        <div className="flex justify-evenly text-center">
          <Link
            to="/movie"
            className="py-2 px-4 rounded bg-rose-700 text-white font-bold border border-rose-700 hover:text-rose-700 hover:bg-white active:text-rose-700 active:bg-white"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
