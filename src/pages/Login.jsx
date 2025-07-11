import { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
// import { userLogin } from "../services/userServices";
import { useAuth } from "../context/authContext";
// import { userLogin } from "../services/userServices";

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    setError("");

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
          value={form.email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />

        {error && <p className="text-sm text-red-600 mb-2">{error}</p>}

        <button
          disabled={form.email.length < 5 || form.password.length < 5}
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
