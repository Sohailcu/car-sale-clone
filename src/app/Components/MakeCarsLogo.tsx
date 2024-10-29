import Image from "next/image";
export default function MakeCarsLogo (){
    return (
        <div>
            <div className="flex px-32 py-2 justify-items-start w-full bg-gray-300 cursor-pointer">
               <h1 className="text-2xl font-sans font-semibold justify-start" >New Cars by Make</h1>
            </div>

           <div className="flex flex-row justify-evenly gap-16 px-28 py-4 w-full bg-gray-300 h-44">
             <div className="bg-white w-16 h-16 rounded-full cursor-pointer hover:opacity-50 transition-opacity duration-300">
               <Image src="/images/logo1.png"
               alt="logo1"
               width={100}
               height={100}
               />
               <h2 className="text-xl font-sans font-semibold text-blue-800 text-center">Suzuki</h2>
            </div>
        
        <div className="bg-white w-16 h-16 rounded-full cursor-pointer hover:opacity-50 transition-opacity duration-300">
          <Image src="/images/logo2.png" 
          alt="logo2"
          width={100}
          height={100}/>
          <h2 className="text-xl font-sans font-semibold text-blue-800 text-center">Toyota</h2>
        </div>
        
        <div className="bg-white w-16 h-16 rounded-full cursor-pointer hover:opacity-50 transition-opacity duration-300">
          <Image src="/images/logo3.png"
          alt="logo3"
          width={100}
          height={100}/>
          <h2 className="text-xl font-sans font-semibold text-blue-800 text-center">Honda</h2>
        </div>
        
        <div className="bg-white w-16 h-16 rounded-full cursor-pointer hover:opacity-50 transition-opacity duration-300">
          <Image src="/images/logo4.png"
          alt="logo4"
          width={100}
          height={100}/>
          <h2 className="text-xl font-sans font-semibold text-blue-800 text-center">Audi</h2>
        </div>
        
        <div className="bg-white w-16 h-16 rounded-full cursor-pointer hover:opacity-50 transition-opacity duration-300">
          <Image src="/images/logo5.png"
          alt="logo5"
          width={100}
          height={100}/>
          <h2 className="text-xl font-sans font-semibold text-blue-800 text-center">Hundai</h2>
        </div>

        <div className="bg-white w-16 h-16 rounded-full cursor-pointer hover:opacity-50 transition-opacity duration-300">
          <Image src="/images/logo6.png"
          alt="logo6"
          width={100}
          height={100}/>
          <h2 className="text-xl font-sans font-semibold text-blue-800 text-center">Mercedes Benz
          </h2>
        </div>

        <div className="bg-white w-16 h-16 rounded-full cursor-pointer hover:opacity-50 transition-opacity duration-300">
          <Image src="/images/logo7.png"
          alt="logo7"
          width={100}
          height={100}/>
         <h2 className="text-xl font-sans font-semibold text-blue-800 text-center">Hundai</h2>
        </div>
      </div>

      <div className="flex flex-row justify-evenly gap-16 px-28 py-4 w-full bg-gray-300 h-44">
        <div className="bg-white w-16 h-16 rounded-full cursor-pointer hover:opacity-50 transition-opacity duration-300">
          <Image src="/images/logo8.png"
          alt="logo8"
          width={100}
          height={100}/>
          <h2 className="text-xl font-sans font-semibold text-blue-800 text-center">Crown</h2>
        </div>

        <div className="bg-white w-16 h-16 rounded-full cursor-pointer hover:opacity-50 transition-opacity duration-300">
          <Image src="/images/logo9.png"
          alt="logo9"
          width={100}
          height={100}/>
          <h2 className="text-xl font-sans font-semibold text-blue-800 text-center">Hero</h2>
        </div>

        <div className="bg-white w-16 h-16 rounded-full cursor-pointer hover:opacity-50 transition-opacity duration-300">
          <Image src="/images/logo10.png"
          alt="logo10"
          width={100}
          height={100}/>
          <h2 className="text-xl font-sans font-semibold text-blue-800 text-center">Benelli</h2>
        </div>
      
        <div className="bg-white w-16 h-16 rounded-full cursor-pointer hover:opacity-50 transition-opacity duration-300">
          <Image src="/images/logo11.png"
          alt="logo11"
          width={100}
          height={100}/>
          <h2 className="text-xl font-sans font-semibold text-blue-800 text-center">Super Star</h2>
        </div>

        <div className="bg-white w-16 h-16 rounded-full cursor-pointer hover:opacity-50 transition-opacity duration-300">
          <Image src="/images/logo12.png"
          alt="logo12"
          width={100}
          height={100}/>
          <h2 className="text-xl font-sans font-semibold text-blue-800 text-center">Yamaha</h2>
        </div>

        <div className="bg-white w-16 h-16 rounded-full cursor-pointer hover:opacity-50 transition-opacity duration-300">
          <Image src="/images/logo13.png"
          alt="logo13"
          width={100}
          height={100}/>
          <h2 className="text-xl font-sans font-semibold text-blue-800 text-center">Unique</h2>
        </div>

        <div className="bg-white w-16 h-16 rounded-full cursor-pointer hover:opacity-50 transition-opacity duration-300">
          <Image src="/images/logo14.png"
          alt="logo14"
          width={100}   
          height={100}/>
          <h2 className="text-xl font-sans font-semibold text-blue-800 text-center">United </h2>
        </div>
      </div>
     </div>
  );
}