export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Task Scheduler
          </h2>
          <p className="text-sm text-gray-500 mt-1">Login</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="name@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <div className="text-center mt-2"></div>

          <button
            type="submit"
            className="appearance-none w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition duration-300"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
