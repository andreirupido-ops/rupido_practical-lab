
import { useState } from 'react'
import Navbar from './components/navbar'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div
      className={`min-h-screen transition-colors ${
        darkMode
          ? 'bg-gray-950 text-white'
          : 'bg-gray-100 text-gray-900'
      }`}
    >
      <Navbar
        favoritesCount={2}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <main className="mx-auto max-w-6xl p-8">
        <h1 className="text-3xl font-bold">
          Welcome to Team Directory
        </h1>

        <p className="mt-3">
          Your reusable Navbar is now connected!
        </p>
      </main>
    </div>
  )
}

export default App
