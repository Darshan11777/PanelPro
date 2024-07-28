import React from 'react'
import { useAuth } from '../../store/Auth';

export default function AdminPanel() {

    const [data, setData] = React.useState([]);
    const {token,base_url}=useAuth()
    console.log( "token",data);

    const adminUserData=async()=>{
    if(token){
    try {
        const responce = await fetch(`${base_url}admin/user`, {
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
    let adminCard=data?.map((item)=>{
        return(
            <div key={item._id}>
                <h1>{item.userName}</h1>
            </div>
        )
    })
  return (
    <div className="admin ">
        card data
      {adminCard}
    </div>
  )
}
