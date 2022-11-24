import React, { useState } from 'react'


import { useDispatch } from 'react-redux';
import { signUp } from '../redux/reducer/auth/auth.action';

const SignUp = () => {
  const [userData, setuserData] = useState({
    firstName:'',
    lastName:'',
    email: "",
    password: "",
    phone:'',
  });

  const handleChange = (e) => {
    setuserData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  };


  const dispatch = useDispatch();

  const submit = async () => {
    await dispatch(signUp(userData))
    alert("Account is created succesfully")
    setuserData({firstName:'',lastName:'', email: '', password: "",phone:'' });
  }

  return (
    <>
      <div
        className="container max-w-lg md:pt-32 md:pl-36 md:pr-36  mx-auto xl:max-w-2xl h-full flex bg-white rounded-lg shadow overflow-hidden"
      >

        <div className="w-full p-8">
          <form method="post" action="#" >
            <h1 className=" text-2xl font-bold">Sign up to your account</h1>
            <div>
              <span className="text-gray-600 text-sm mr-1">
                Already have an account?
              </span>
              <a href='/signin' className=" text-blue-600 text-sm font-semibold">
                Sign in
              </a>
            </div>
            <div className="mb-3 mt-2">

              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 border-2 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="firstName"
                type="text"
                value={userData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
            <div className="mb-3 mt-2">

              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 border-2 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="lastName"
                type="text"
                value={userData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
            <div className="mb-3 mt-2">

              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 border-2 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="text"
                value={userData.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
            </div>
            <div className="mb-3 mt-2 flex">
              <input type='text' placeholder="country" className='w-20 rounded border-2' />

              <input
                className="text-sm appearance-none rounded w-full py-2 px-4 ml-2 border-2 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="phone"
                type="number"
                value={userData.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
              />
            </div>
            <div className="mb-3 mt-2">

              <input
                className="text-sm border-2 appearance-none rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Your password"
              />
              <small className='text-xs text text-gray-700'>Password must be at least 8 characters</small>

            </div>
            <small className='text-xs text-gray-700'>By clicking Sign Up you are indicating that you have read and acknowledged the <span className='text-red-500'>Terms of service</span>  and <span className='text-red-500'>Privacy Notice</span> </small>
            <div className="flex w-full md:mt-4 mt-5">

              <button
                className="w-full bg-yellow-400 hover:bg-grey-900 text-black text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="button"
                onClick={submit}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp