import React from 'react'

const IntroductionSm = () => {
  return (

    <>
      <div className='h-4/5 w-full flex'>
        <div className='h-4/5 flex'>
          <div className='h-12 w-12 ml-28 font-sans mt-10 rounded-full bg-gray-500 relative' >
            <div className='h-5 w-3 bg-yellow-400 skew-x-20 absolute top-3 left-4' />
            <div className='h-5 w-3 bg-white -skew-x-20 absolute top-4 left-6' />
          </div>
          <h1 className='mt-11 ml-2 w-20 text-gray-800'>WISHDOM <span className='font-thin text-gray-500'>CIRCLE</span></h1>
        </div>
      </div>
    </>

  )
}

const IntroductionMd = () => {
  return (
    <>
      <div className='bg-gray-700 h-screen w-full flex flex-col'>
        <div className='h-2/5  relative '>
          <div className='h-40 w-24 bg-yellow-500 absolute top-28 left-40 skew-x-20 ' />
          <div className='h-40 w-24 bg-white absolute top-36 left-60 -skew-x-20' />
          <div className='h-12 w-12 bg-gray-400 absolute rounded-full top-60 left-80 m-3' />
        </div>
        <div className=' mt-32'>
          <div className='relative'>
            <h1 className='p-5 text-xl text-white absolute top-10 left-48 '>Welcome back !</h1>
            <small className='text-white absolute top-24 left-48 p-6'>Sign In to find opportunities that match your interests. We have both part-time and full-time roles that can be done online and in-person.</small>
          </div>
        </div>
        <div className='mt-52'>
          <div className='relative'>
            <div className=' border-2 h-1 w-4 absolute top-5 left-52 rounded-sm bg-white' />
            <div className=' h-1 w-1 absolute top-5 ml-1 left-56 rounded-full bg-white' />
            <div className=' h-1 w-1 absolute top-5 ml-3 left-56 rounded-full bg-white' />
          </div>
        </div>

        <div className='mt-10'>
          <div className='relative'>
            <div className='absolute -top-32 left-2 h-48 w-48 '>

            </div>
            <small className='absolute top-5 left-52 text-white'>Please contact us at +91-9380644532 if you need any assistance.</small>
          </div>
        </div>
      </div>


    </>

  )
}

const Introduction = () => {
  return (
    <>
      <div className='hidden md:flex md:w-2/5'>
        <IntroductionMd />
      </div>
      <div className='md:hidden w-full h-4/5'>
        <IntroductionSm />
      </div>
    </>
  )
}

export default Introduction