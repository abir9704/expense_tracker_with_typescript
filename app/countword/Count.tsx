"use client";
import React, { useState } from 'react';

const Count = () => {

     const [number, setNumber] = useState<number>(0);
      const [word, setWord] = useState<number>(0);
        const [isVisible, setIsVisible] = useState<boolean>(false);



    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) =>{
      console.log(e.target.value);
      if(number<70){

        setNumber(prev=>prev+1);

      }
      if(e.target.value==" "){
        setWord(prev=>prev+1);
      }

      if(number==70){
        setIsVisible(true);
      }
     
      
    }

      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {  // user space press করলে
      setWord(prev=>prev+1);
    }
  };


    return (
              <div className="h-screen flex items-center justify-center flex-col bg-gray-100">

               


                <form >

                          <div className="bg-white p-6 rounded-2xl shadow-lg">
    <input
      type="text"
      onChange={handlechange}
      onKeyDown={handleKeyDown}
      disabled={isVisible}
    
      name="analsex"
      placeholder="Enter something..."
      className="w-64 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

     <input
      type="submit"
      
      className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 active:scale-95 transition duration-200 cursor-pointer"
    />
  </div>

                </form>

                <p className='pt-15'>character: {number}</p>

                 <p className='pt-5'>word: {word}</p>
                 {
                    number==70 && <p className='pt-10'>Limit excedded</p>
                 }



</div>
    );
};

export default Count;