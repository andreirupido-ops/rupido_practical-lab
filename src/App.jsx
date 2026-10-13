
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites")) || [];
    } catch {
      return [];
    }
  });

  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const titles = {
      "/": "Home",
      "/users": "Team Members",
      "/about": "About",
    };

    const isUserDetails = /^\/users\/\d+$/.test(location.pathname);
    const pageTitle = titles[location.pathname]
      || (isUserDetails ? "User Details" : "Page Not Found");

    document.title = `${pageTitle} | Team Directory`;
  }, [location.pathname]);

  function toggleFavorite(userId) {
    setFavorites((previousFavorites) =>
      previousFavorites.includes(userId)
        ? previousFavorites.filter((id) => id !== userId)
        : [...previousFavorites, userId]
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar
        favoritesCount={favorites.length}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((previous) => !previous)}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/users"
          element={
            <Users
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          }
        />

        <Route path="/users/:id" element={<UserDetails />} />

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
