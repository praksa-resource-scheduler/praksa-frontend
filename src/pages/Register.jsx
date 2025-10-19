import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Resource Scheduler
          </h2>
          <p className="text-sm text-gray-500 mt-1">Register</p>
        </div>

        <form className="space-y-6">
          <AuthInput label="E-mail" type="email" placeholder="name@gmail.com" />
          <AuthInput label="Password" type="password" placeholder="••••••••" />

          <div className="text-center mt-2"></div>

          <AuthButton text="Register" />
        </form>
      </div>
    </div>
  );
}
