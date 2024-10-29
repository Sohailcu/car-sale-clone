import Link from "next/link"
import Image from "next/image";
import CarAddForm from "../CarAddForm/CarAddForm";

export default function Navbar() {
    return (
        <nav className="flex sticky top-0 w-full bg-gradient-to-r from-indigo-950 to-blue-950 h-24 py-4 px-14" >
            <Link href="/">
            <div>
                <Image src="/images/logo.svg"
                 alt="logo"
                 width={200}
                 height={100}
                 />
            </div>
            </Link>
            <div className="flex justify-center gap-12 items-end py-4 px-8 ">
               <Link href="/" className="text-white text-md font-semibold font-sans w- h-8 hover:text-red-500 cursor-pointer">Used Cars⏷</Link>
               <Link href="/" className="text-white text-md font-semibold font-sans w- h-8 hover:text-red-500 cursor-pointer">New Cars⏷</Link>
               <Link href="/" className="text-white text-md font-semibold font-sans w- h-8 hover:text-red-500 cursor-pointer">Bikes⏷</Link>
               <Link href="/" className="text-white text-md font-semibold font-sans w- h-8 hover:text-red-500 cursor-pointer">Auto Store⏷</Link>
               <Link href="/" className="text-white text-md font-semibold font-sans w- h-8 hover:text-red-500 cursor-pointer">Videos⏷</Link> 
               <Link href="/" className="text-white text-md font-semibold font-sans w- h-8 hover:text-red-500 cursor-pointer">Forums⏷</Link>
               <Link href="/" className="text-white text-md font-semibold font-sans w- h-8 hover:text-red-500 cursor-pointer">Blogs⏷</Link>
               <Link href="/" className="text-white text-md font-semibold font-sans w- h-8 hover:text-red-500 cursor-pointer">More⏷</Link>
                <div className="bg-red-500 text-white py-2 px-8 text-lg font-semibold font-sans rounded-lg hover:bg-red-700 cursor-pointer">
                     <button onClick={CarAddForm}>Post an Ad⏷</button>
                </div>
            </div>
        </nav>
   );
}