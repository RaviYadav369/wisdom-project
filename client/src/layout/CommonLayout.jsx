import React from 'react'
import Introduction from '../components/Introduction'

const CommonLayout = (Component) => ({ ...props }) => {
  return (
    <>
      <div className='md:hidden w-full h-full'>
       
          <Introduction />
          <Component {...props} />
        
      </div>
      <div className='md:flex hidden w-full h-full'>
       
          <Introduction />
          <Component {...props} />
        
      </div>
    </>
  )
}

export default CommonLayout