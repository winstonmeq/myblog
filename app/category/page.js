'use client'

import { useEffect, useState } from "react";


const Page = () => {

    const [title, setTitle] = useState()
    const [error, setError] = useState(null);


    useEffect(() => {

        const userId = localStorage.getItem('userId');

        console.log('userId', userId)
    
        // if (userId) {
        //   fetch(`http://localhost:3000/api/categories?userId=${userId}`)
        //     .then((response) => response.json())
        //     .then((data) => setCategories(data))
        //     .catch((error) => console.error('Error fetching categories:', error));
        // }
      }, []);




    const handleSubmit = async (e) => {

        e.preventDefault();

        const userId = localStorage.getItem('userId');


        console.log(userId)
    
        try {
          const res = await fetch(`/api/categories?userId=${userId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({title }),
          });
    
          if (res.ok) {
            // Clear the form
            setTitle("");      
            onClose(); // Close the modal
            reload();
          } else {
            const data = await res.json();
            setError(data.message || "Something went wrong");
          }
        } catch (err) {
          console.log(err)
        }
      };

  return (
    <div className="flex p-2  items-center justify-center" >

        <div className="border-[2px] flex "><input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} /></div>

    <div className="mx-2 px-4 p-1 rounded-lg bg-green-600 hover:bg-green-800"><button onClick={handleSubmit}>Submit</button></div>
           <div>{error}</div>
    </div>
  )
}

export default Page