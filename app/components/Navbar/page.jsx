import Link from "next/link"


const page = () => {
  return (
    <div className="flex flex-row w-full justify-between p-2 border-b-2 shadow-md">
        <div>
          Logo
        </div>
        <div>
            <nav>
                <ul className="flex flex-row gap-2">
                    <li className="border-[1px] border-green-500 py-2 px-3 rounded-md hover:bg-green-700"><Link href={'/category'}>Category</Link></li>
                    <li className="border-[1px] border-green-500 py-2 px-3 rounded-md hover:bg-green-700">About</li>
                </ul>
            </nav>
        
        </div>
      
    </div>
  )
}

export default page