import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
const LoginPage = () => {
const loginShema = yup.object().shape({
  email:yup.string().email("This should include an @ ").required("This field is required"),
  password:yup.string().required("This input field is required")
  
})
  const navigate=useNavigate()
  const [loading,setLoading] = useState(false)
  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver:yupResolver(loginShema)
  })
  const Login = async(data)=>{
    try {
      setLoading(true)
      const url = "http://localhost:2121/Login" 
      const response = await axios.post(url,data)
      sessionStorage.setItem("token" , response.data)
      navigate("/Dashboard")
      console.log(response)
    } catch (error) {
      alert("invalid credentials")
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  return (
    <div className=" bg-white xw-screen h-screen flex justify-center items-center relative">
      <Link to="/">
        {' '}
        <span className="bg-black text-white absolute top-0 homelarge mt-3 left-0 ml-10 p-1 rounded-sm ">
          Home
        </span>
      </Link>
      <form className="rounded-md shadow-2xl justify-center items-center p-5 bg-blue-100"
      onSubmit={handleSubmit(Login)}
      >
        <div>
          <h1 className="text-center font-bold text-2xl">Login</h1>
          <div>
            <div>
              <label htmlFor="email" className=" font-bold text-sm">
                Email
              </label>
            </div>
            <div>
              <input
                type="Email"
                placeholder="Email"
                className="outline-none py-1 w-72 rounded-sm px-1 out"
                id="email"
                {...register("email")}
              /><br/>
              {errors.email && <p className='text-sm text-red-500 text-start'>{errors.email.message}</p>}
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="password" className="font-bold text-sm">
                password
              </label>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="outline-none py-1 w-72 rounded-sm px-1 out"
                id="password"
                {...register("password")}
              /><br/>
              {errors.password && <p className='text-sm text-red-500 text-start'>{errors.password.message}</p>}
            </div>
          </div>
        </div>
        <button className="text-white  bg-blue-500 font-bold py-1 w-72 mt-4 rounded"
        
        disabled={loading}>
          {loading ?<ClipLoader color="white" size={33}/> : "Login"}
        </button>

        <div className="mt-3 text-center">
          {' '}
          Don't have an account ?<Link to="/Register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
