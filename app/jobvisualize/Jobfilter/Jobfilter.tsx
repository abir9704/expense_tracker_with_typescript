"use client"
import React, { useEffect, useState } from 'react';


  type Job={
        id: string;
        category: string;
        salary: number;
        type: string;
    };

    type Filterconfig = {
        key: keyof Job;
        label: string;
        type: "select" | "range";
        options?: string[];
    }

    const filters: Filterconfig[]=[
        {
            key: "category",
            label: "Category",
            type: "select",
            options: ["Frontend", "Backend", "Fullstack", "DevOps", "Data Science"],
        },
        {
            key: "type",
            label: "Job Type",
            type: "select",
            options: ["remote", "onsite"],

        },
        {
            key: "salary",
            label: "Minimum Salary",
            type: "range",
        },
    ];

const Jobfilter = () => {


    const [jobs,setjobs] = useState<Job[]>([]);



     const [filterState, setFilterState] = useState<
  Partial<Record<keyof Job, string | number>>
>({});


  useEffect(() => {
    fetch("/multijobs.json")
      .then((res) => res.json())
      .then((data) => {

        setjobs(data);
        console.log(data);

      });
  }, []);

  const filteredJobs = jobs.filter((job) => {
    return Object.entries(filterState).every(([key, value]) => {
      if (!value) return true;
      if (key === "salary") return job.salary >= value;
      return job[key as keyof Job] === value;
    });
  });
       
  
    
    return (
        <div>
            
        </div>
    );
};

export default Jobfilter;