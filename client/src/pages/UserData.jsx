import React from 'react'
import { useAuth } from '../../store/Auth';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import avtar  from '../assets/—Pngtree—user profile avatar_13369988.png'

export default function UserData() {
  const navigate=useNavigate()
    const [data, setData] = React.useState([]);
    const {token,notify,notifyW}=useAuth()

    if(!token){
 notifyW('please login to see the data')
navigate('/', { replace: true })
    }
    

    const deleteUser=async(e,id)=>{
        e.preventDefault()
        console.log( "id user deleted",id);
        try {
            const responce = await fetch(`http://localhost:3000/admin/user/delete/${id}`, {
              method: "Delete",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
              },
              
            })
            if (responce.ok) {
              const result = await responce.json()
              console.log("delete response SUCCES", result);
              setData(result.message)
                notify('user deleted successfully')
           
            } else {
              let text=await responce.text()
              console.log("error inside response ", text, JSON.parse(text));
            }
          } catch (error) {
            console.log("error", error);
          }
          adminUserData()

        }
        
   const editUser=async(id)=>{
    navigate(`edit/${id}`)
    // console.log( "id user edited",id);
       
         

   }

    const adminUserData=async()=>{
    if(token){
    try {
        const responce = await fetch("http://localhost:3000/admin/user", {
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
        console.log("error", error);
      }}
    }
    React.useEffect(() => {
       adminUserData() 
    },[])
    let adminCard=data.length>0 && data.map((item)=>{
      const img="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
        return(
            <Card className=''  key={item._id} name={item.userName} email={item.email} id={item._id} deleteUser={deleteUser} editUser={editUser} phone={item.phone} admin={item.admin} img={avtar}/>
        )
    })
  return (
    <div className='wrapper'>

    <div className="adminGrid container2   text-white text-2xl grid grid-cols-4 gap-3   md:grid-cols-1 sm:grid-cols-1    mt-10" >
        
          
      {adminCard}
       
      

    </div>
    </div>
  )
}
