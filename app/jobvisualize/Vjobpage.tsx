"use client"
import React, { useEffect, useState } from 'react';

import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import Mrpie from './Mrpie';


// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 300,
    pv: 4567,
    amt: 2400,
  },
  {
    name: 'Page C',
    uv: 300,
    pv: 1398,
    amt: 2400,
  },
  {
    name: 'Page D',
    uv: 200,
    pv: 9800,
    amt: 2400,
  },
  {
    name: 'Page E',
    uv: 278,
    pv: 3908,
    amt: 2400,
  },
  {
    name: 'Page F',
    uv: 189,
    pv: 4800,
    amt: 2400,
  },
];

const margin = {
  top: 20,
  right: 30,
  left: 20,
  bottom: 25,
};
// #endregion

const formatAxisTick = (value: any): string => {
  return `*${value}*`;
};

const renderCustomBarLabel = ({ x, y, width, value }: any) => {
  return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
};


type MultiJob = {
  id: string;         // string type, যেকোন text
  category: string;   // string type
  salary: number;     // number type
  type: string;       // string type (বা "remote" | "onsite")
}

type bararr ={
  category: string,
  jobs: number,
}

type piearr={
   type: string;
  value: number;
}


const Vjobpage = () => {

   const [jobs, setjobs]= useState<MultiJob []>([]);

   const [bardata,setbardata] = useState<bararr []>([]);

   const [piedata, setpiedata]=useState<piearr []>([]);

  useEffect(()=>{
    fetch('/multijobs.json')
    .then(res=>res.json())
    .then(data=>{


      const frontendcount = data.filter((singjob,index)=>singjob.category=="Frontend").length;
      const backendcount = data.filter((singjob,index)=>singjob.category=="Backend").length;
      const devopscount = data.filter((singjob,index)=>singjob.category=="DevOps").length;
      const datasciencecount = data.filter((singjob,index)=>singjob.category=="Data Science").length;
      const fullstackcount = data.filter((singjob,index)=>singjob.category=="Fullstack").length;

      const onsitecount = data.filter((singjob,index)=>singjob.type=="onsite").length;

      const remotecount = 14-onsitecount;

     let arrforpie = [
  { type: "Remote", value: remotecount },
  { type: "Onsite", value: onsitecount },
];

      setpiedata(arrforpie);

    


      let arrforbar=[
  { category: "Frontend", jobs: frontendcount },
  { category: "Backend", jobs: backendcount },
  { category: "DevOps", jobs: devopscount },
  { category: "Data Science", jobs: datasciencecount },
  { category: "Fullstack", jobs: fullstackcount },
      ]

      setbardata(arrforbar);
      
      

      setjobs(data);

      
    })
  },[])

  return (
        <div>

          <div>

                    <BarChart width={600} height={300} data={bardata} margin={margin}>
      <XAxis
        dataKey="category"
        tickFormatter={formatAxisTick}
        label={{ position: 'insideBottomRight', value: 'XAxis title', offset: -10 }}
      />
      <YAxis label={{ position: 'insideTopLeft', value: 'YAxis title', angle: -90, dy: 60 }} />
      <Bar dataKey="jobs" fill="#8884d8" label={renderCustomBarLabel} />
     
    </BarChart>

          </div>

          <Mrpie piedata={piedata}></Mrpie>

         

       
            
         
        </div>
    );
};

export default Vjobpage;

//budget planner