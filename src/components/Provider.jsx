import React, { useEffect, useState } from 'react'
import Navabar from './Navabar'
import axios from 'axios'

const Provider = () => {
  const [provider,setProvider]=useState([])
  const fetchProviders= async()=>{
  const response=await axios.get("http://localhost:3000/admin/providers/",{
    headers:{
      "Authorization" : localStorage.getItem("token")
    }
  })
  if(response.status==202){
      setProvider(response.data.data)
  }
  else{
      alert("something wrong")
  }
  }
  const handleDelete = async (id)=>{
    const response=await axios.delete("http://localhost:3000/admin/providers/" + id,{
      headers:{
        "Authorization" : localStorage.getItem("token")
      }
    })
    if(response.status==200){
        window.location.href = "/providers"
    }
    else{
        alert("something wrong")
    }
  }
  const handleAccept = async (id)=>{
    const response=await axios.patch("http://localhost:3000/provider/change-status",{
      providerId:id,
      status:"active"
    },
    {      headers:{
      "Authorization" : localStorage.getItem("token")
    }
  }
  )

    if(response.status==200){
        window.location.href = "/providers"
    }
    else{
        alert("something wrong")
    }
  }
  const handleReject = async (id)=>{
    const response=await axios.patch("http://localhost:3000/provider/change-status",{
      providerId:id,
      status:"inactive"
    },
    {      headers:{
      "Authorization" : localStorage.getItem("token")
    }
  }
  )

  

    if(response.status==200){
        window.location.href = "/providers"
    }
    else{
        alert("something wrong")
    }
  }
 
  useEffect(()=>{
      fetchProviders()
  },[])
  return (
    <div>
        <Navabar/>
    <div className="text-gray-900 bg-gray-200 mt-[50px]">
  <div className="p-4 flex">
    <h1 className="text-3xl">Users</h1>
  </div>
  <div className="px-3 py-4 flex justify-center">
  <table className="w-full text-md bg-white shadow-md rounded mb-4">
      <tbody>
        <tr className="border-b">
          <th className="text-left p-3 px-5">Name</th>
          <th className="text-left p-3 px-5">Email</th>
          <th className="text-left p-3 px-5">Location</th>
          <th className="text-left p-3 px-5">Status</th>
          <th className="text-left p-3 px-5">Contact</th>
          <th />
        </tr>
        {
          provider.length > 0 && provider.map((us)=>{
            return (
              <tr className="border-b hover:bg-orange-100 bg-gray-100">
              <td className="p-3 px-5">
                <input type="text" defaultValue={us.name} className="bg-transparent border-b-2 border-gray-300 py-2" />
              </td>
              <td className="p-3 px-5">
                <input type="text" defaultValue={us.email} classmaName="bg-transparent border-b-2 border-gray-300 py-2" />
              </td>
              <td className="p-3 px-5">
               <p>{us.location}</p>
              </td>
              <td className="p-3 px-5">
               <p>{us.status}</p>
              </td>
              <td className="p-3 px-5">
               <p>{us.contactNo}</p>
              </td>
              <td className="p-3 px-5 flex justify-end">
                <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"onClick={()=>handleAccept(us._id)}>Accept</button>
                <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={()=>handleReject(us._id)}>Reject</button>
                <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={()=>handleDelete(us._id)}>Delete</button>
              </td>
            </tr>
            )
          })
         }
     
       
      
      </tbody>
    </table>
  </div>
</div>
    </div>
  )
}

export default Provider
