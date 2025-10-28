import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { doSignInWithEmailAndPassword } from "../firebase/auth";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";

export default function Login() {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSigningIn) return;

    setIsSigningIn(true);

    try {
      await doSignInWithEmailAndPassword(email, password);
    } catch {
      setIsSigningIn(false);
    }
  };

  return (
    <>
      {userLoggedIn && <Navigate to={"/"} replace />}

      <div className="min-h-screen flex items-center justify-center  px-4">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-gray-800">
              Resource Scheduler
            </h2>
            <p className="text-sm text-gray-500 mt-1">Login</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <AuthInput
              label="E-mail"
              type="email"
              placeholder="name@gmail.com"
              state={email}
              setState={setEmail}
            />
            <AuthInput
              label="Password"
              type="password"
              placeholder="••••••••"
              state={password}
              setState={setPassword}
            />

            <div className="text-center mt-2"></div>

            <AuthButton text={isSigningIn ? "Signing in..." : "Sign in"} />
            <p className="text-center text-sm">
              Don&apos;t have an account?
              <Link to={"/register"} className="hover:underline font-bold">
                {" "}
                Register now!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
