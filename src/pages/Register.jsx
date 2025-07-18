import { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import Input from "../components/Input";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const [username, setUsername] = useState("");
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
      username: username.toLowerCase().trim(),
      email: email.toLowerCase().trim(),
      password: password,
    };

    try {
      await register(form);
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold text-center text-rose-700 mb-6">
        Create Account
      </h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Username"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
          onChange={(e) => setPassword(e.target.password)}
        />

        {error && <p className="text-sm text-red-600 mb-2">{error}</p>}

        <button
          type="button"
          disabled={email.length < 5 || password.length < 5}
          className="w-full bg-rose-700 text-white py-2 rounded-lg mt-4 hover:bg-rose-800 transition"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="text-rose-700 font-semibold hover:underline"
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Register;
