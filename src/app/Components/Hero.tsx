export default function Hero(){
    return (
        <section className="flex flex-row justify-center bg-gray-50 items-center w-full h-full py-8 px-44">
            <div className="h-full text-lg">
                <fieldset className="border-2 border-gray-300">
                <legend className="font-sans font-bold text-center text-3xl text-slate-700 py-4">Sell Your Car on PakWheels and Get the Best Price</legend>
                <div className="text-black flex flex-row justify-start items-center px-10 py-6">
                    <div className="p-8 bg-gray-100 w-96 shadow-md">
                         <h3 className="text-xl text-blue-800 font-bold mb-4 ">Post your Ad on PakWheels</h3>
                          <ul className="space-y-2 mb-4">
                             <li className="font-sans text-sm text-black "><span className="text-green-500 font-bold text-md">&#10003;</span> Post your Ad for Free in 3 Easy Steps</li>
                             <li className="font-sans text-sm text-black "><span className="text-green-500 font-bold text-md">&#10003;</span> Get Genuine offers from Verified Buyers</li>
                             <li className="font-sans text-sm text-black "><span className="text-green-500 font-bold text-md">&#10003;</span> Sell your car Fast at the Best Price</li>
                         </ul>
                         <button className="bg-red-500 text-white font-sans font-bold mt-6 p-4 px-8 text-lg w-56 rounded-lg cursor-pointer hover:bg-red-800">Post Your Ad</button>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-5">
                        <div className="h-16 border-l-2 voder-gray-400"></div>
                           <span className="text-gray-400 font-bold">OR</span>
                           <div className="h-16 border-l-2 voder-gray-400"></div>
                    </div>
                    <div className="p-8 bg-gray-100 w-96 shadow-md">
                        <h3 className="text-xl text-blue-800 font-bold mb-4">Try PakWheels Sell It For Me</h3> 
                        <ul className="space-y-2 mb-4">
                            <li className="font-sans text-sm text-black "><span className="text-green-500 font-bold text-md">&#10003;</span> Dedicated Sales Expert to Sell your Car</li>
                            <li className="font-sans text-sm text-black "><span className="text-green-500 font-bold text-md">&#10003;</span> We Bargain for you and share the Best Offer</li>
                            <li className="font-sans text-sm text-black "><span className="text-green-500 font-bold text-md">&#10003;</span> We ensure Safe & Secure Transaction</li>
                        </ul>  
                       <button className="bg-cyan-600 text-white font-sans font-bold mt-6 p-4 px-8 text-lg w-56 rounded-lg cursor-pointer hover:bg-cyan-900">Register Your Car</button>
                    </div>
                </div> 
                </fieldset>
            </div>   
        </section>         
    );
}