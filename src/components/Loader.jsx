
function Loader({ message = "Loading..." }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-12"
      role="status"
      aria-live="polite"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        {message}
      </p>
    </div>
  );
}

export default Loader;
