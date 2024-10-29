import Image from "next/image"
import Link from "next/link"
export default function FeaturesCars () {
    return (
       <div className="mt-2 px-5">
            <div className="flex justify-between px-32 py-4 w-full bg-white cursor-pointer">
               <div className="text-2xl font-sans font-bold">Featured New Cars</div>
               <div className="text-md font-sans text-blue-600 underline hover:text-blue-800">View All New Cars</div>
           </div>
      
           <div className="flex justify-start gap-6 px-32 py-4 w-full bg-white cursor-pointer">
            <Link href="/" className="text-xl font-serif font-bold text-gray-800 hover:text-black hover:border-b-2 border-blue-700">Popular</Link>
            <Link href="/" className="text-xl font-serif font-bold text-gray-800 hover:text-black hover:border-b-2 border-blue-700">Up Coming</Link>
            <Link href="/" className="text-xl font-serif font-bold text-gray-800 hover:text-black hover:border-b-2 border-blue-700">Newly Launched</Link>
           </div>
           <hr/>

          {/* Cars */}
        <div className="flex bg-white mt-2 flex-wrap mb-6 justify-center">

            {/* Car1 */}
            <Link href="/Car1">

              <div className="w-56 border-2 rounded-md p-4 m-2 cursor-pointer shadow-md">
                  <Image
                  src="/images/Car1.jpg"
                  alt="toyota corolla"
                  width={200}
                  height={300}
                  className="w-full object-contain mb-4"
                  />
                  <h3 className="text-blue-900 font-sans text-lg text-center font-semibold">Toyota Corolla</h3>
                  <p className="text-green-700 text-md font-sans text-center font-bold">PKR 59.7 - 75.5 lacs</p>
                  <p className="text-md text-center mt-2"><span className="text-orange-600">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 622 Reviews</p>
                </div>
            </Link>

             {/* Car2 */}
            <Link href="/Car2">
             
              <div className="w-56 border-2 rounded-md p-4 m-2 cursor-pointer shadow-md">
                  <Image 
                  src="/images/Car2.png"
                  alt="suzuki alto"
                  width={200}
                  height={300}
                  className="w-full object-contain mb-4"
                  />
                  <h3 className="text-blue-900 font-sans text-lg text-center font-semibold">Suzuki Alto</h3>
                  <p className="text-green-700 text-md font-sans text-center font-bold">PKR 23.3 - 30.5 lacs</p> 
                  <p className="text-md text-center mt-2"><span className="text-orange-600">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 199 Reviews</p>
               </div>
            </Link>

             {/* Car 3 */}
            <Link href="/Car3">
             
               <div className="w-56 border-2 rounded-md p-4 m-2 cursor-pointer shadow-md">
                   <Image
                   src="/images/Car3.jpg"
                   alt="honda city"
                   width={200}
                   height={300}
                   className="w-full object-contain mb-4"
                   />
                   <h3 className="text-blue-900 font-sans text-lg text-center font-semibold">Honda City</h3>
                   <p className="text-green-700 text-md font-sans text-center font-bold">PKR 46.5 - 58.5 lacs</p>
                   <p className="text-md text-center mt-2"><span className="text-orange-600">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 456 Reviews</p>
                </div>
            </Link>     

            {/* Car 4 */}
            <Link href="/Car4">
             
               <div className="w-56 border-2 rounded-md p-4 m-2 cursor-pointer shadow-md">
                   <Image 
                   src="/images/Car3.jpg"
                   alt="honda city"
                   width={300}
                   height={300}
                   className="w-full object-contain mb-4"
                   />
                   <h3 className="text-blue-900 font-sans text-lg text-center font-semibold">Honda Civic</h3>
                   <p className="text-green-700 text-md font-sans text-center font-bold">PKR 86.6 - 99.0 lacs</p>
                   <p className="text-md text-center mt-2"><span className="text-orange-600">&#9733;&#9733;&#9733;&#9734;&#9734;</span> 359 Reviews</p>
               </div>
            </Link> 
            </div>
        </div>
    )
}