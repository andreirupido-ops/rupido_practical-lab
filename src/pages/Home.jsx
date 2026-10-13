
import { Link } from "react-router-dom";
import Button from "../components/button";
import users from "../data/users";

function Home() {
  const featuredUsers = users.slice(0, 3);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-12 text-center">
        <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
          Meet the Team
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Find the Right People
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
          Explore our team directory to discover team members,
          their roles, and the companies they work with.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Link to="/users">
            <Button>Explore Team</Button>
          </Link>

          <Link to="/about">
            <Button variant="secondary">About Us</Button>
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Featured Team Members
          </h2>

          <Link
            to="/users"
            className="font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredUsers.map((user) => (
            <article
              key={user.id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {user.name}
              </h3>

              <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">
                {user.role}
              </p>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                {user.company}
              </p>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {user.email}
              </p>

              <Link
                to={`/users/${user.id}`}
                className="mt-4 inline-block font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                View profile →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
