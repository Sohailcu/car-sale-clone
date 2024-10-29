"use client"

import Link from "next/link"

export default function Form(){
    return(
        <div className="py-6 mt-6 mb-4 mx-96 bg-blue-100">
            <h1 className="text-center text-blue-700 text-2xl px-4 py-2 font-bold">Enter your details and place your Order</h1>
            
            {/* FORM */}
            <form className="flex justify-center mt-8 items-center flex-col">
                <input type="text" placeholder="Enter Your Name" 
                className="w-1/2 px-4 py-2 rounded-md text-sm border-2 border-gray-500"/>

                <input type="email" placeholder="Enter Your Email" 
                className="w-1/2 px-4 py-2 rounded-md text-sm mt-4 border-2 border-gray-500"/>

                <input type="number" placeholder="Enter Your Contact Number" 
                className="w-1/2 px-4 py-2 rounded-md text-sm mt-4 border-2 border-gray-500"/>

                <input type="number" placeholder="Enter Your Card Pin" 
                className="w-3/6 px-4 py-2 rounded-md text-xs mt-4 border-2 border-gray-500"/>
            
               <textarea placeholder="Enter Your Address" 
                className="w-1/2 px-4 py-2 rounded-md text-sm mt-4 border-2 border-gray-500"/>
            </form>

            <div className="text-center mt-7">
                <Link href="/Thankyou">
                  <button className="text-white mb-4 hover:bg-green-700 shadow-2xl
                 hover:text-white font-semibold text-md py-2 px-4 rounded-md bg-blue-700">
                  Place Your Order
                 </button>
                </Link>
            </div>
        </div>
    )
}
   