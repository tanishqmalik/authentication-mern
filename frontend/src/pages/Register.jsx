import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Register = () => {

    const [form, setForm] = useState({name:"", email:"",password:""})

    const handleChange = e =>{
        setForm({...form, [e.target.name] : e.target.value})
    }

    const handleSubmit = async e =>{
        e.preventDefault();

        try{
            await axios.post("http://localhost:5050/api/auth/register", form);
            alert("registered succesfully")
        } catch (err) {
            alert(err.response?.data?.msg || "Error");
        }
    }

  return (
    <>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 shadow-lg">
      <h2 className="text-2xl mb-4">Register</h2>
      <input type="text" name="name" placeholder="Name" className="mb-2 w-full p-2 border" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" className="mb-2 w-full p-2 border" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" className="mb-2 w-full p-2 border" onChange={handleChange} />
      <button className="bg-blue-500 text-white px-4 py-2">Register</button>
    </form>

    <p className="mt-2">
        Already have an account?
        <Link to="/login" className="text-blue-500 underline">Login</Link>
      </p>
    </>
  )
}

export default Register