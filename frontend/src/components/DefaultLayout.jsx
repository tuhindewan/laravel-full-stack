import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

export default function DefaultLayout() {
  const { token } = useStateContext();

  if( !token ){
    return <Navigate to="/login"/>
  }

  return (
    <div>
      For logged in users only
      <Outlet/>
    </div>
  )
}
