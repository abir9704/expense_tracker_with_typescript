"use client"
import React, { useState } from 'react';


type condi = "High" | "Zero" | "Danger" | "Normal";

const Counterstatus = () => {

    const [status,setstatus] = useState<number>(0);

    let displayStatus: condi;

    if (status > 10) displayStatus = "High";
else if (status === 0) displayStatus = "Zero";
else if (status < 0) displayStatus = "Danger";
else displayStatus = "Normal";


    
const [condit, setcondit] = useState<condi>("Zero");

    const handleplus =() =>{
        setstatus(prev=> prev+1);
    }

    const handleminus =()=>{
        setstatus(prev=> prev-1);
    }
    return (
        <div>



            <div className='mt-40 flex justify-center font-bold text-3xl'>{status}</div>

     <p className='text-center text-red-600 text-5xl font-bold'>
  Status: {displayStatus}
</p>     <div className='mt-4 flex justify-center font-bold text-3xl'>{condit}</div>

            <div className='flex gap-7 justify-center items-center min-h-screen'>

                

                <button
                onClick={handleplus}
        className="
          flex items-center gap-2 
          px-6 py-3 
          bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700
          text-white font-semibold text-sm tracking-wide
          rounded-xl
          shadow-md hover:shadow-emerald-300 hover:shadow-lg
          transition-all duration-200 ease-in-out
          hover:-translate-y-0.5 active:translate-y-0
        "
      >
        <span className="text-lg leading-none">+</span>
        Increment
      </button>



 
      {/* Decrement Button */}
      <button
      onClick={handleminus}
        className="
          flex items-center gap-2 
          px-6 py-3 
          bg-white hover:bg-rose-50 active:bg-rose-100
          text-rose-500 hover:text-rose-600 font-semibold text-sm tracking-wide
          rounded-xl
          border-2 border-rose-300 hover:border-rose-400
          shadow-md hover:shadow-rose-200 hover:shadow-lg
          transition-all duration-200 ease-in-out
          hover:-translate-y-0.5 active:translate-y-0
        "
      >
        <span className="text-lg leading-none">−</span>
        Decrement
      </button>

            </div>
          
        </div>
    );
};

export default Counterstatus;

// typescript er main kahini hocche type bole daoa ba nirdisto strting deinfe kora , oi string bade kisu dile error dibe na but red mark diye bole dibe je string is not matching with your derived type- string