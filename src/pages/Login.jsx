import { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
      setError("Invalid email address");
      return;
    }

    const form = {
      email: email.toLowerCase().trim(),
      password,
    };

    try {
      await login(form);
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold text-center text-rose-700 mb-6">
        Login
      </h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-sm text-red-600 mb-2">{error}</p>}

        <button
          disabled={email.length < 5 || password.length < 5}
          className="w-full bg-rose-700 text-white py-2 rounded-lg mt-4 hover:bg-rose-800 transition disabled:bg-gray-300"
          onClick={handleSubmit}
        >
          Sign In
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Don’t have an account?{" "}
        <Link
          to="/auth/register"
          className="text-rose-700 font-semibold hover:underline"
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
