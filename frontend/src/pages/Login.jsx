import React from 'react'
import { useState } from 'react'


const Login = () => {

    const [form, setForm] = useState({email: "", password :""})

    const handleChange = e =>{
        setForm({...form, [e.target.name] : e.target.value})
    }


    const handleSubmit = async e =>{
        e.preventDefault();

        try{
            const res = await axios.post()
        }
    }
  return (
    <div>Login</div>
  )
}

export default Login