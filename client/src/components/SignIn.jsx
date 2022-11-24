import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { signIn } from '../redux/reducer/auth/auth.action';

const SignIn = () => {

  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setuserData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  };

  const dispatch = useDispatch();

  const submit = async () => {
    await dispatch(signIn(userData))
    alert("Sign In succesfull Done")
 
    setuserData({ email: "", password: "" });
  }

  return (

    <>

      <div
        className="container max-w-lg  md:pt-52 md:pl-36 md:pr-36 mx-auto xl:max-w-2xl h-full flex bg-white rounded-lg shadow overflow-hidden"
      >

        <div className="w-full p-8">
          <form method="post" action="#" >
            <h1 className=" text-2xl fontse font-bold">Sign in to your account</h1>
            <div>
              <span className="text-gray-600 text-sm mr-1">
                Don't have an account?
              </span>
              <a href='/signup' className=" text-blue-600 text-sm font-semibold">
                Sign up
              </a>
            </div>
            <div className="mb-3 mt-2">

              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 border-2 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="text"
                value={userData.email}
                onChange={handleChange}
                placeholder="Email or Mobile Number"
              />
            </div>
            <div className="mb-3 mt-4">

              <input
                className="text-sm border-2 appearance-none rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Your password"
              />
              <a
                className="inline-block align-baseline font-semibold text-sm text-blue-600"
                href="/forgot-password"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex w-full md:mt-4 mt-64">
              <button
                className="w-full bg-yellow-500  text-black text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="button"
                onClick={submit}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>

    </>

  )
}

export default SignIn