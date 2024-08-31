import Image from "next/image";

import User from "./users/page"

export default function Home() {
  return (
   <div className="w-full max-h-full max-w-full">    
    <User />
   </div>
  );
}
