"use client";
import React, { useEffect, useState } from "react";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: number;
  type: "full-time" | "part-time" | "remote";
  postedAt: string;
};

const Joblist = () => {
  const [jobitems, setjobitems] = useState<Job[]>([]);

  const [jobitems2, setjobitems2] = useState<Job[]>([]);



const findingmachine = (e: React.ChangeEvent<HTMLInputElement>): void => {
  const word = e.target.value;

  console.log("it's working", word);

  if (word === "") {
    setjobitems(jobitems2);
    return;
  }

  const filtered = jobitems2.filter((jobs) =>
    jobs.title.toLowerCase().includes(word.toLowerCase())
  );

  setjobitems(filtered);
};

  useEffect(() => {
    fetch("/Jobs.json")
      .then((res) => res.json())
      .then((data:Job[]) => {
        setjobitems(data);
        setjobitems2(data);
      });
  }, []);

//   useEffect(() => {
//   const fetchJobs = async () => {
//     const res = await fetch("/Jobs.json");
//     const data: Job[] = await res.json();

//     setjobitems(data);
//     setjobitems2(data);
//   };

//   fetchJobs();
// }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Job Listings
      </h2>

      <div className="flex justify-center mb-8">
  <input
    type="text"
    placeholder="Search jobs..."
    onChange={findingmachine}
    className="
      w-full max-w-md
      px-4 py-2
      border border-gray-300
      rounded-lg
      shadow-sm
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
      focus:border-transparent
      text-gray-700
      placeholder-gray-400
      transition
    "
  />
</div>

      {/* Grid layout: 3 cards per row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobitems.map((singlejob) => (
          <div
            key={singlejob.id}
            className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{singlejob.title}</h3>
            <p className="text-gray-600 mb-1">{singlejob.company}</p>
            <p className="text-gray-500 mb-1">{singlejob.location}</p>
            <p className="text-gray-700 mb-1">
              Salary: ${singlejob.salary}
            </p>
            <p className="text-sm text-gray-500 mb-1">Type: {singlejob.type}</p>
            <p className="text-sm text-gray-400">{singlejob.postedAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Joblist;