"use client";
import React, { useEffect, useState } from 'react';


interface Model {
  id: number;
  name: string;
  age: number;
  height: number;
  weight: number;
  nationality: string;
}

type HeightRange = {
  min: number;
  max: number;
};

const Height = () => {

    const [modelholder,setmodelholder] = useState<Model[]>([]);

    const [mothelholder, setmothelholder] = useState<Model[]>([]);
   

    useEffect(()=>{

        fetch('/model.json')
        .then(res=>res.json())
        .then(data=>{
           setmodelholder(data);
           modelbyheight({min:165,max:169});
        }
        )

    },[])

    const modelbyheight=(height:HeightRange)=>{

        console.log(height.min);

        const filterdata=modelholder.filter((singlemodel)=>singlemodel.height>=height.min && singlemodel.height<=height.max);
        setmothelholder(filterdata);

    }


    const parseRange = (range: string): HeightRange => {
  const [min, max] = range.split("-").map(Number);
  return { min, max };
};

    const modelmaker=(e: React.FormEvent<HTMLFormElement>)=>{

          e.preventDefault();

          const form = e.currentTarget;
  const cars = (form.elements.namedItem("cars") as HTMLSelectElement).value;

  const height: HeightRange = parseRange(cars);

  

  modelbyheight(height);


        
    }


    return (
        <div className='max-w-[700px] flex justify-center items-center min-h-screen'>


              <form onSubmit={modelmaker}>
  <label
    htmlFor="cars"
    className="block text-xs font-medium
               uppercase tracking-widest
               text-gray-400 mb-2"
  >
    Choose a car
  </label>

  <div className="relative mb-5">
    <select
      name="cars"
      id="cars"
      className="w-full appearance-none
                 bg-gray-50 border border-gray-200
                 rounded-xl px-4 py-2.5 pr-10
                 text-sm text-gray-800 cursor-pointer
                 focus:outline-none focus:ring-2
                 focus:ring-gray-300 transition"
    >
      <option value="165-169">165-169cm</option>
      <option value="170-174">170-175cm</option>
      <option value="175-180">175-180cm</option>
    
    </select>
    <div className="pointer-events-none absolute
                    right-3 top-1/2 -translate-y-1/2
                    text-gray-400 text-xs">
      ▾
    </div>
  </div>

  <input
    type="submit"
    className="w-full py-2.5 rounded-xl
               border border-gray-200 text-sm
               font-medium text-gray-800
               hover:bg-gray-50 active:scale-95
               transition-all cursor-pointer"
  />
</form>


<div>
  {
    mothelholder.map((singlemothel,index)=>{
      return(
        <div key={index}>
          <p>{singlemothel.name}</p>
        </div>
      )
    })
  }
</div>

            
        </div>
    );
};

export default Height;