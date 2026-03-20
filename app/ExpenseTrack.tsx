"use client"

import React, { useState } from 'react';

const ExpenseTrack = () => {

  interface moneytrace{

    dollar:number;

  }
 const [allmoney,setallmoney]=useState<number>(0);

   const handlesubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    // you have to tell ts that it is a formevent type
  e.preventDefault();

  // form element access
  const form = e.target as HTMLFormElement;

  // get input values safely using name
  const titled = (form.elements.namedItem("title") as HTMLInputElement).value;

  

  // eita je input element setao ts ke janai dite hocche

  
  const dollar = parseFloat(
    (form.elements.namedItem("money") as HTMLInputElement).value
  );

  // validation
  if (!titled || isNaN(dollar) || dollar <= 0) {
    alert("Please enter valid title and amount");
    return;
  }

  console.log(titled, dollar);

  // state update, etc. এখানে করতে পারো
};
    return (
        <div className='bg-[#192c53] min-h-screen'>


            <div className='flex justify-center pt-10'>

                 <h2 className='text-[32px] text-white '>Expense track</h2>

            </div>

            

           

            <div className='flex justify-center pt-[20px]'>

                

                  <form onSubmit={handlesubmit}>


                    <div className='flex gap-2 text-white text-[24px] font-bold'>

                          <input type='text' name='title' className='w-80 h-12 border-2 border-white'></input>

                 <input type='number' name='money' className='w-20 h-12 border-2 border-white'></input>

                   <button
                   type='submit'
      className="w-20 h-12 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-[14px]"
     
    >

        Add Expense
      
    </button>

            

                    </div>

              

                </form>
            

            </div>

          
        </div>
    );
};

export default ExpenseTrack;