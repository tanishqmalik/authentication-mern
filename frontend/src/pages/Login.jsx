import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5050/api/auth/login", form);  // 🔧 FIXED
      alert("Login Successful");
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      alert(err.response?.data?.msg || "Error");
      console.error(err);
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 shadow-lg">
      <h2 className="text-2xl mb-4">Login</h2>
      <input type="email" name="email" placeholder="Email" className="mb-2 w-full p-2 border" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" className="mb-2 w-full p-2 border" onChange={handleChange} />
      <button className="bg-green-500 text-white px-4 py-2">Login</button>
    </form>

      <p className="mt-2">
        Don’t have an account?{" "}
        <Link to="/register" className="text-blue-500 underline">Register</Link>
      </p>
    </>
  );
}

export default Login;
