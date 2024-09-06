

'use client'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import RegistrationModal from './userRegistration'
import Link from 'next/link'
import UpdateUser from './[id]/page'

const Page = () => {

const [users, setUsers] = useState([])
const [isModalOpen, setIsModalOpen] = useState(false);



useEffect(() => {

    
const fetchIncident = async () => {
        
    try {
      const { data } = await axios.get('/api/user');
      setUsers(data);

    } catch (error) {
      console.error(error);
    } 
  }

    fetchIncident()

  }, []);



  const reload = async () => {

    try {
        const { data } = await axios.get('/api/ser');
        setUsers(data);
  
      } catch (error) {
        console.error(error);
      } 


  }

 
  

  return (
    <div className='min-h-screen'>
        <div className='flex p-4 justify-between items-center text-center font-bold text-2xl text-green-950'>
            <div>User Data</div><button onClick={()=>setIsModalOpen(true)} className='border-solid-[1px] rounded-md bg-gray-300 p-3 font-bold'>Add User</button></div>
    <table className='min-w-full bg-white border border-gray-200'>
        <thead>
        <tr className='w-full bg-gray-200 text-left'>
            <th className='px-6 py-3 border-b border-gray-300'>Username</th>
            <th className='px-6 py-3 border-b border-gray-300'>Password</th>
            <th className='px-6 py-3 border-b border-gray-300'>Super Admin</th>
            <th className='px-6 py-3 border-b border-gray-300'>Action</th>


        </tr>
        </thead>
         <tbody>
         {users.map((items,i) => (
        <tr key={i} className='hover:bg-gray-100'>
            <td className='px-6 py-4 border-b border-gray-400'>{items.username}</td>
            <td className='px-6 py-4 border-b border-gray-400'>{items.password}</td>
            <td className='px-6 py-4 border-b border-gray-400'>{items.superAdmin ? 'true':'false'}</td>

            <td className='px-6 py-4 border-b border-gray-400'>{items._id}</td>    
             
             <td><Link href={`/users/${items._id}`}><button>Edit</button></Link></td>
       

        </tr>
        
       ))}

         </tbody>
 
    </table>  

    <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} reload={reload} />

    </div>
  )
}


export default Page