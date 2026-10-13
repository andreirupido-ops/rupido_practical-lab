
import { NavLink } from 'react-router-dom'

function Navbar({
  favoritesCount = 0,
  darkMode = false,
  onToggleDarkMode = () => {},
}) {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Users', path: '/users' },
    { name: 'About', path: '/about' },
  ]

  return (
    <nav
      className={`border-b px-6 py-4 ${
        darkMode
          ? 'border-gray-700 bg-gray-900 text-white'
          : 'border-gray-200 bg-white text-gray-900'
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        {/* App name */}
        <NavLink to="/" className="text-xl font-bold">
          Team Directory
        </NavLink>

        {/* Navigation links */}
        <div className="flex items-center gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors hover:underline ${
                  isActive
                    ? 'font-bold underline'
                    : 'font-medium'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Favorites and theme button */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">
            Favorites: {favoritesCount}
          </span>

          <button
            type="button"
            onClick={onToggleDarkMode}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              darkMode
                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
