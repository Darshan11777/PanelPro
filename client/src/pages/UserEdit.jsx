import React, { useEffect } from 'react'
import EditForm from '../components/EditForm'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../store/Auth';
// import { useAuth } from ';

export default function UserEdit() {
    const navigate=useNavigate()
const {id}=useParams()
const [userData, setData] = React.useState([]);

const {token,notify}=useAuth()

    const getUser=async(id)=>{
        
        try {
            const responce = await fetch(`http://localhost:3000/admin/user/${id}`, {
              method: "Get",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
              },
              
            })
            if (responce.ok) {
              const result = await responce.json()
              console.log("login response SUCCES", result);
              setData(result.message)
           
            } else {
              let text=await responce.text()
              console.log("error inside response ", text, JSON.parse(text));
            }
          } catch (error) {
            console.log("getting user error", error.message);
          }
 
    }

    
    const userEdit=async(body)=>{
        console.log( "user edit",body);
        
        if (!body || !id) {
          console.log('Missing body or id');
          return;
        }
        
        try {
          const responce = await fetch(`http://localhost:3000/admin/user/edit/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(body),
          });
          
          if (responce.ok) {
            const result = await responce.json();
            console.log("Edit response SUCCES", result);
            setData(result.message);
            navigate('/admin/user')
            notify("edit successfully")

          } else {
            let text = await responce.text();
            console.log("error inside EDiT ", text, JSON.parse(text));
          }
        } catch (error) {
          console.log("error", error);
          throw error;
        }
    }
    React.useEffect(() => {
        id && getUser(id)
    },[id])
   
 
    
  return (
    <div>
        edit form
      <EditForm userData={userData} userEdit={userEdit}/>
    </div>
  )
}
