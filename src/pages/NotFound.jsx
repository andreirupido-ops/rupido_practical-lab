
import { Link } from "react-router-dom";
import Button from "../components/button";

function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-8xl font-extrabold tracking-tight text-blue-600">
        404
      </p>

      <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
        Page Not Found
      </h1>

      <p className="mt-3 max-w-md text-gray-600 dark:text-gray-300">
        Sorry, the page you are looking for does not exist
        or may have been moved.
      </p>

      <div className="mt-6">
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
