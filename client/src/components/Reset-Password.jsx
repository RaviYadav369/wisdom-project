import React from 'react'

const ResetPassword = () => {
 

  return (
    <>
      <div
        className="container max-w-lg  md:pt-52 md:pl-36 md:pr-36 mx-auto xl:max-w-2xl h-full flex bg-white rounded-lg shadow overflow-hidden"
      >

        <div className="w-full p-8">
          <form method="post" action="#" >
            <h1 className=" text-2xl font-bold">Reset Password</h1>
            <div>
              <span className="text-gray-600 text-sm">
                Enter new password you haven’t used before
              </span>

            </div>
            <div className="mb-3 mt-2">

              <input
                className="text-sm border-2 appearance-none rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                placeholder="New Password"
              />
              <small className='text-xs text text-gray-500'>Password must be at least 8 characters</small>

            </div>
            <div className="mb-3 mt-2">

              <input
                className="text-sm border-2 appearance-none rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                placeholder="Confirm New Password"
              />
              <small className='text-xs text text-gray-500'>Both password must match</small>

            </div>

            <div className="flex w-full md:mt-4 mt-64">
             
                <button
                  className="w-full bg-yellow-500  text-black text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                  type="button"
                 
                >
                  Reset Password
                </button>
              
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default ResetPassword