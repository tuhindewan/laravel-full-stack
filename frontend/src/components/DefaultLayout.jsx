import React from 'react'
import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <div>
      For logged in users only
      <Outlet/>
    </div>
  )
}
