import Link from "next/link";
import Image from "next/image";


export default function Car1 () {
    return (
      <div className="mt-5 mx-48 bg-gray-100 p-5 mb-5">
        <h1 className="text-3xl text-blue-950 font-bold font-sans py-4 text-center "><ins>Honda City 2024 Price in Pakistan, Images, Reviews & Specs</ins></h1>
          <div className="flex justify-center mt-5">
            <Image 
              src="/images/hondaCity.avif"
              alt="pic3"
              width={400}
              height={300}
              />
          </div>

          {/* buttons */}

          <div className="flex mt-8 gap-4 justify-center">
            <button className="text-white bg-blue-700 font-semibold text-sm py-2 px-4 rounded-md shadow-xl ">
              Book a Test Drive
            </button>
            <button className="text-blue-700 hover:bg-blue-700 hover:text-white font-semibold text-sm py-2 px-4 rounded-md shadow-xl bg-white border-2 border-blue-700">
              Request Bank Fianance
            </button>
            <button className="text-blue-700 hover:bg-blue-700 hover:text-white font-semibold text-sm py-2 px-4 rounded-md shadow-xl bg-white border-2 border-blue-700">
              Visit Place
            </button>
            <button className="text-blue-700 shadow-xl hover:bg-blue-700 hover:text-white font-semibold text-sm py-2 px-4 rounded-md bg-white border-2 border-blue-700">
            Car Inspection
            </button>
          </div>
         
        <h1 className="text-center mt-5 text-xl font-semibold">Vehicle Description</h1>

            {/* detail */}
          <div className="flex justify-center gap-4 text-sm mt-4">
            <div><b>Numbers of Doors</b> 4</div>
            <div><b>Engine</b> 1300 cc</div>
            <div><b>Condition</b> 7.5 / 10</div>
            <div><b>Driven</b> 10,000 KM</div>
            <div><b>Suspension type</b> Soft Suspension</div>
          </div>
      
          <div className="flex justify-center gap-4 text-sm mt-2">
            <div><b>Avg</b> 12 Km per ltr</div>
            <div><b>Transmission</b> Automatic</div>
            <div><b>Fuel Type</b> High Octane</div>
        </div>

         <h1 className="text-green-600 text-2xl mt-8 font-sans font-bold text-center">PKR 65,00,000</h1>

        <div className="text-center mt-10">
          <Link href="/CheckoutForm">
          <button className="text-white hover:bg-green-700 shadow-2xl hover:text-white font-semibold text-sm py-2 px-4 rounded-md bg-blue-700">
            Make Payment
          </button>
          </Link>
        </div>
      </div>
      
    )
}