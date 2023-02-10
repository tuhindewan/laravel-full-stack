import React, { useEffect } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider'

export default function DefaultLayout() {
  const { token, user, setUser, setToken } = useStateContext();

  if( !token ){
    return <Navigate to="/login"/>
  }

  useEffect(() => {
    axiosClient.get('/user')
    .then(({data}) => {
      setUser(data);
    })
  }, [])
  
  const logout = () => {
    axiosClient.post('/logout')
    .then(()=>{
      setUser({});
      setToken(null);
    })
  }

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>
            Header
          </div>

          <div>
            {user.name} &nbsp; &nbsp;
            <a className="btn-logout" onClick={logout} href="#">Logout</a>
          </div>
        </header>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}
