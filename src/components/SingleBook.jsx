import { useNavigate, useParams } from "react-router-dom"
import Navabar from "./Navabar"
import axios from "axios"
import { useEffect, useState } from "react"


function SingleBook(){
  const {id}=useParams()
  const Navigate=useNavigate()

  const [book,setBook]=useState({})
  const fetchsingle= async()=>{
      const response=await axios.get("http://localhost:3000/booknow/getsinglebook/"+id)
      if(response.status===200){
          setBook(response.data.data)
      
      }
      else{
          alert("something wrong")
      }
  }
      useEffect(()=>{
          fetchsingle()
      },[])
      
    return ( 
        <>
        <Navabar/>
    {/* <div className="bg-gray-100 dark:bg-gray-800 py-8 mt-14">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <img className="w-full h-full object-cover" src={`http://localhost:3000/${book.citizenship}`} alt="citizenship image" />
        </div>
        <div className=" rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <img className="w-[100px] h-[100px] object-cover" src={`http://localhost:3000/${book.licence}`} alt="citizenship image" />
        </div>
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
          </div>
         
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{book.Name}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          ante justo. Integer euismod libero id mauris malesuada tincidunt.
        </p>
        <div className="flex mb-4">
          <div className="mr-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
            <span className="text-gray-600 dark:text-gray-300">$29.99</span>
          </div>
          <div>
            <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
            <span className="text-gray-600 dark:text-gray-300">In Stock</span>
          </div>
        </div>
        <div>
          <span className="font-bold text-gray-700 dark:text-gray-300">Bike Description:</span>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
          {book.email}
          </p>
        </div>
      </div>
    </div>
  </div>
</div> */}
<div class="bg-white overflow-hidden shadow rounded-lg border">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
            User Profile
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
            This is information about the user.
        </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-lg font-medium  text-gray-500">
                    Full name
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                   {book.Name}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-lg font-medium text-gray-500">
                    Email address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {book.email}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-lg font-medium text-gray-500">
                    Phone number
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                   {book.contactNumber}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-lg font-medium text-gray-500">
                    Address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                 {book.location}
                </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-lg font-medium text-gray-500">
                   Citizenship
                </dt>
               <dd> <img className="w-[250px] h-[150px] object-cover" src={`http://localhost:3000/${book.citizenship}`} alt="citizenship image" />
               </dd>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-lg font-medium text-gray-500">
                 License
                </dt>
               <dd> <img className="w-[250px] h-[150px] object-cover" src={`http://localhost:3000/${book.licence}`} alt="citizenship image" />
               </dd>
            </div>
        </dl>
    </div>
</div>

        </>
    )
}

export default SingleBook