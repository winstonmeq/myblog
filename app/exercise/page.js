'use client'

import { useState } from "react"


const page = () => {

    const [temp, setTemp] = useState(0)
    const [f, setF] = useState(0)

    function d2f(degree) {

        let f = (9 * degree/5) + 32

       setF(f)

    }

  return (
    <div>
    
    <input type="number" value={temp} onChange={(e) => setTemp(e.target.value)} />
    <button onClick={() => d2f(temp)}>Convert</button>
    <h1>Farienhieght:{f}</h1>
    </div>
  )
}

export default page