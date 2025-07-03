import { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import Input from "../components/Input";
// import api from "../../lib/api";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    e.preventDefault();
    setError("");
    console.log(form);

    // try {
    //   const res = await api.post("/api/auth/login", form);
    //   localStorage.setItem("token", res.data.token); // save JWT
    //   navigate("/dashboard"); // redirect after login
    // } catch (err) {
    //   setError(err.response?.data?.message || "Login failed");
    // }
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
          className="w-full bg-rose-700 text-white py-2 rounded-lg mt-4 hover:bg-rose-800 transition"
          onClick={handleSubmit}
        >
          Sign In
        </button>
      </form>
      <p className="mt-4 text-sm text-center">
        Don’t have an account?{" "}
        <Link
          to="/register"
          className="text-rose-700 font-semibold hover:underline"
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
