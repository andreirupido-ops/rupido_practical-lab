
import { Link } from "react-router-dom";
import Button from "./button";

function UserCard({ user, isFavorite = false, onToggleFavorite }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            {user.name}
          </h2>

          <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">
            {user.role}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onToggleFavorite?.(user.id)}
          aria-label={
            isFavorite
              ? `Remove ${user.name} from favorites`
              : `Add ${user.name} to favorites`
          }
          aria-pressed={isFavorite}
          className={`text-2xl transition ${
            isFavorite
              ? "text-yellow-500"
              : "text-gray-400 hover:text-yellow-500"
          }`}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>

      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
        <p>
          <span className="font-semibold">Email:</span>{" "}
          {user.email}
        </p>

        <p>
          <span className="font-semibold">Company:</span>{" "}
          {user.company}
        </p>
      </div>

      <div className="mt-5">
        <Link to={`/users/${user.id}`}>
          <Button className="w-full">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
