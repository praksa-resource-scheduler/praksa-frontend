import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";

export default function Home() {
  const { currentUser, userLoggedIn } = useAuth();

  const logOut = async (e) => {
    e.preventDefault();
    if (userLoggedIn) {
      await doSignOut();
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="relative flex items-center p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mx-auto absolute left-1/2 transform -translate-x-1/2">
          Resource Scheduler
        </h1>
        <div className="ml-auto space-x-6">
          {!userLoggedIn ? (
            <>
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
            </>
          ) : (
            <button
              onClick={logOut}
              className="text-blue-600 hover:underline font-medium"
            >
              Log out
            </button>
          )}
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <p className="text-gray-500 text-lg">
          {userLoggedIn ? `Dobrodošli ${currentUser?.email}` : "Dobrodošli"}!
        </p>
      </div>
    </div>
  );
}
