import React from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
const navigate = useNavigate();
const handleclick =() => navigate('/signin');

  return (
    <>
      <div
        className="container max-w-lg  md:pt-52 md:pl-36 md:pr-36 mx-auto xl:max-w-2xl h-full flex bg-white rounded-lg shadow overflow-hidden"
      >

        <div className="w-full p-8">
          <form method="post" action="#" >
            <h1 className=" text-2xl font-bold">Forgot Password</h1>
            <div>
              <span className="text-gray-600 text-sm">
              We’ll send you a reset password link to your registered email address
              </span>
              
            </div>
            <div className="mb-3 mt-2">
              
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 border-2 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="text"
                placeholder="Registered Email"
              />
            </div>
            
            <div className="flex w-full md:mt-4 mt-64">
              <button
                className="w-full bg-yellow-500  text-black text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="button"
              >
                Email me a Recovery Link
              </button>
            </div>
           
            <div className="flex w-full md:mt-4 mt-4">
              <button
                className="w-full text-yellow-600 border-2 border-yellow-600  text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="button"
                onClick={handleclick}
              >
                Return To Sign In
              </button>
            </div>
           
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword