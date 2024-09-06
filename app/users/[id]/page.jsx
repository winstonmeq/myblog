
'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Page = ({params}) => {



  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();

  useEffect(() => {

    localStorage.setItem('userId', params.id);

    
    const fetchIncident = async () => {
            
        try {

          const { data } = await axios.get(`/api/user/${params.id}`);         

          console.log(data)
          setUsername(data[0].username)
          setPassword(data[0].password)

    
        } catch (error) {
          console.error(error);
        } 

      }
    
        fetchIncident()
    
      }, [params.id]);




      const handleUpdate = async (e) => {
        e.preventDefault();
    
        try {
          const res = await fetch(`/api/user/${params.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          });
    
          if (res.ok) {
         
            onClose();
          
          } else {
            const data = await res.json();
            setError(data.message || "Something went wrong");
          }
        } catch (err) {
          setError("Failed to update the user");
        }
      };



  const onClose =()=> {

        router.push('/')

      }



  return (
    <div className="inset-0 z-50 flex items-center  justify-center">
    <div className="bg-white rounded-lg shadow-lg w-full p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Update</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-400"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="text"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-400"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
          >
           Update
          </button>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
   
      </form>
    </div>
  </div>
  )
}

export default Page