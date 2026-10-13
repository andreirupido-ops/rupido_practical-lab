
import { useEffect, useState } from "react";
import usersData from "../data/users";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Users({ favorites, onToggleFavorite }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);


    
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(usersData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
  

  const filteredUsers = users.filter((user) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.company.toLowerCase().includes(search) ||
      user.role.toLowerCase().includes(search);

    const matchesFavorite =
      !showFavoritesOnly || favorites.includes(user.id);

    return matchesSearch && matchesFavorite;
  });

  useEffect(() => {
  document.title = `Users (${filteredUsers.length})`;
}, [filteredUsers.length]);

  if (loading) {
    return <Loader message="Loading team members..." />;
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Team Members
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Browse and search through our team directory.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          placeholder="Search by name, email, company, or role..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:ring-blue-900"
        />

        <label className="flex shrink-0 cursor-pointer items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 dark:border-gray-700">
          <input
            type="checkbox"
            checked={showFavoritesOnly}
            onChange={(event) =>
              setShowFavoritesOnly(event.target.checked)
            }
            className="h-4 w-4 accent-blue-600"
          />

          <span className="whitespace-nowrap text-gray-700 dark:text-gray-300">
            Favorites only
          </span>
        </label>
      </div>

      <p className="mb-5 text-sm text-gray-600 dark:text-gray-400">
        Showing {filteredUsers.length} of {users.length} team members
      </p>

      {filteredUsers.length > 0 ? (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {filteredUsers.map((user) => (
      <UserCard
        key={user.id}
        user={user}
        isFavorite={favorites.includes(user.id)}
        onToggleFavorite={onToggleFavorite}
      />
    ))}
  </div>
) : (
  <ErrorMessage message="No users found." />
)}
    </main>
  );

}

export default Users;
