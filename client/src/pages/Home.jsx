import React from 'react'
import {useParams} from 'react-router-dom'

import ForgotPassword from '../components/Forgot-Password'
import ResetPassword from '../components/Reset-Password'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import CommonLayout from '../layout/CommonLayout'

const Home = () => {
  const {type} = useParams();
  return (
    <>
      <div>
        {type === 'signin' && <SignIn />}
        {type === 'signup' && <SignUp />}
        {type === 'forgot-password' && <ForgotPassword />}
        {type === 'reset-password' && <ResetPassword />}

      </div>
    </>
  )
}

export default CommonLayout(Home);