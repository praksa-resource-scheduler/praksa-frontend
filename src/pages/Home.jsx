export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="relative flex items-center p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mx-auto absolute left-1/2 transform -translate-x-1/2">
          Resource Scheduler
        </h1>
        <div className="ml-auto space-x-6">
          <a
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </a>
          <a
            href="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register
          </a>
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <p className="text-gray-500 text-lg">Dobrodošli!</p>
      </div>
    </div>
  );
}
