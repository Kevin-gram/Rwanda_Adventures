import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {toast} from 'react-toastify'
import {yupResolver} from '@hookform/resolvers/yup'
import {ClipLoader} from 'react-spinners'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
 
  const yupSchema = yup.object().shape({
    username:yup.string().required("This input field is required").min(5),
    email:yup.string().required("This input field is required").email(),
    password:yup.string().required("This input field is required"),
    phone:yup.number("must be anumber").required("This input fiel is required")
  })
  const {register , handleSubmit , formState:{errors}} = useForm({
    resolver:yupResolver(yupSchema)
  })

  const submitData = async(data)=>{
    try {
      setLoading(true)
      const url="http://localhost:2121/createUser"
      const response = await axios.post(url,data)
      toast.success("Thank you for registering with us")
      navigate("/Login")
      console.log(data)
       
    } catch (error) {
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
      onSubmit={handleSubmit(submitData)}
      >
        <div>
          <h1 className="text-center font-bold text-2xl">Sign Up</h1>

          <div className="flexarise">
            <div className="flexa">
              <div>
                <label htmlFor="username" className=" font-bold text-sm">
                  Username
                </label>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="outline-none py-1 w-72 rounded-sm px-1 out"
                  id="username"
                  {...register("username")}
                /><br/>
                {errors.username && <p className='text-red-500 text-sm text-start'>{errors.username.message}</p>}
              </div>
            </div>

            <div className="flexa">
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
                />
                {errors.email && <p className='text-red-500 text-sm text-start'>{errors.email.message}</p> }
              </div>
            </div>
          </div>

          <div className="flexarise">
            <div className="flexa">
              <div>
                <label htmlFor="phone" className=" font-bold text-sm">
                  Phone
                </label>
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="outline-none py-1 w-72 rounded-sm px-1 out"
                  id="phone"
                  {...register("phone")}
                /><br/>
                {errors.phone && <p className='text-red-500 text-sm -text-start w-60'>{errors.phone.message}</p>}
              </div>
            </div>

            <div className="flexa">
              <div>
                <label htmlFor="password" className=" font-bold text-sm">
                  Password
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
                {errors.password && <p className='text-red-500 text-sm text-start'>{errors.password.message}</p>}
              </div>
            </div>
          </div>

          {/* <div className="flexa">
            <div>
              <input
                type="file"
                placeholder="Password"
                className="outline-none py-1 w-72 rounded-sm px-1 out bg-white mt-3 "
                id="password"
              />
            </div>
          </div> */}
        </div>

        <button className="text-white  bg-blue-500 font-bold py-1 w-72 mt-4 rounded fle btn flexa"
        disabled={loading}
        >
        {loading ? <ClipLoader color='white' size={33}/> : "Sign Up"}
        </button>

       <Link to="/Login"><div className="mt-3 text-center"> Login with existing account!</div></Link>
      </form>
    </div>
  );
};

export default Register;
