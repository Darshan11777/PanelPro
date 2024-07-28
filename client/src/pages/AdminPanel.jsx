import React from 'react'
import { useAuth } from '../../store/Auth';
import { Outlet } from 'react-router-dom';

export default function AdminPanel() {

   
  return (
    <div className="admin ">
       <Outlet/>
    </div>
  )
}
