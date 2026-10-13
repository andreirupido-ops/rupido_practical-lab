
import { Link, useParams } from "react-router-dom";
import users from "../data/users";
import Button from "../components/button";

function UserDetails() {
  const { id } = useParams();

  const user = users.find((member) => member.id === Number(id));

  if (!user) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="rounded-xl border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Team Member Not Found
          </h1>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            The team member you're looking for doesn't exist.
          </p>

          <Link to="/users" className="mt-6 inline-block">
            <Button>Back to Team Members</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link
        to="/users"
        className="mb-6 inline-block font-medium text-blue-600 hover:underline dark:text-blue-400"
      >
        ← Back to Team Members
      </Link>

      <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-700 dark:bg-blue-900 dark:text-blue-200">
          {user.name.charAt(0)}
        </div>

        <h1 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">
          {user.name}
        </h1>

        <p className="mt-2 text-lg text-blue-600 dark:text-blue-400">
          {user.role}
        </p>

        <div className="mt-8 space-y-5">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Email Address
            </h2>
            <p className="mt-1 text-gray-900 dark:text-white">
              {user.email}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Company
            </h2>
            <p className="mt-1 text-gray-900 dark:text-white">
              {user.company}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Position
            </h2>
            <p className="mt-1 text-gray-900 dark:text-white">
              {user.role}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Team Member ID
            </h2>
            <p className="mt-1 text-gray-900 dark:text-white">
              {user.id}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UserDetails;
