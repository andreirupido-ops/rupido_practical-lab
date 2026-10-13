
import { Link } from "react-router-dom";
import Button from "../components/button";

function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-12">
        <p className="font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          About the Project
        </p>

        <h1 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          About Team Directory
        </h1>

        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
          Team Directory is a web application designed to organize
          team member information in one convenient place. Users can
          browse profiles, search for team members, and save their
          favorite people for quick access.
        </p>

        <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">
          Project Objectives
        </h2>

        <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-300">
          <li>• Display team member information in an organized directory.</li>
          <li>• Make team members easier to find using search.</li>
          <li>• Provide individual profile pages for team members.</li>
          <li>• Allow users to mark and filter favorite team members.</li>
          <li>• Provide navigation and a dark mode option.</li>
        </ul>

        <h2 className="mt-10 text-xl font-bold text-gray-900 dark:text-white">
          Technologies Used
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {["React", "Vite", "Tailwind CSS", "React Router DOM", "JavaScript"].map(
            (technology) => (
              <span
                key={technology}
                className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {technology}
              </span>
            )
          )}
        </div>

        <div className="mt-10">
          <Link to="/users">
            <Button>Explore Team Members</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
