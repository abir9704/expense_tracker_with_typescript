"use client"
import React, { useEffect, useState } from 'react';

interface Model {
  id: number;
  name: string;
  age: number;
  height: number;
  weight: number;
  nationality: string;
}

const Modelfilter = () => {
    // ts a state declare er somoi ki type er data state a thakbe ta define kore dite hoi.
   const [modelholder,setmodelholder] = useState<Model[]>([]);
   const [mothelholder,setmothelholder]=useState<Model[]>([]);


   const modelmaker =(e: React.FormEvent<HTMLFormElement>) =>{

      e.preventDefault();

      const element = e.currentTarget as HTMLFormElement;
      const filterselector = (element.elements.namedItem("cars") as HTMLInputElement).value;
      
      console.log(filterselector);

      filtermaker(filterselector);

   }

   const filtermaker =(mothel:string)=>{

    console.log(mothel);

    const filterdata = modelholder.filter((singlemodel)=>singlemodel.nationality==mothel);
    setmothelholder(filterdata);

   }


useEffect(()=>{

    fetch('/model.json')
       .then(res=>res.json())
       .then((data:Model[])=>{
        console.log(data);
        setmodelholder(data);
       });

},[]);
    return (
      <div>

            {/* <p>kdfkdjf</p> */}
            

            <form onSubmit={modelmaker}>
<label htmlFor="cars">Choose a car:</label>
  <select name="cars" id="cars">
    <option value="Spanish">Spanish</option>
    <option value="Italian">Italian</option>
    <option value="American">American</option>
    <option value="Chinese">Chinese</option>
  </select>

  <br/>

   <input type="submit" className='' />
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

export default Modelfilter;