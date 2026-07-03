import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button';

const Description = () => {
    const isApplied = true;
  return (
    <div>
        <div className='max-w-7xl mx-auto my-10'>
          <div className='flex items-center justify-between'>
               <div>
            <h1 className = "font-bold text-xl">Title</h1>
         
                 <div className="flex flex-wrap gap-2 mt-4">
        <Badge className="text-blue-900 bg-white">10 Positions</Badge>
        <Badge className="text-red-900 bg-white">20 LPA</Badge>
        <Badge className="text-blue-900 bg-white">Remote</Badge>
        <Badge className="text-red-900 bg-white">Full Time</Badge>
        </div>
        </div>
        <div className='flex'>
            <Button
            //   onClick={isApplied ? null : applyJobHandler}
              disabled={isApplied}
              className={`rounded-lg ${
                isApplied
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-900 hover:bg-red-950 text-white"
              }`}
            >
              {isApplied ? "Already Applied" : "Apply"}
            </Button>
          </div>
        </div>
        <h1 className="border-b-2 border-b-gray-400 font-medium py-4">
          {/* {singleJob?.description} */}Job Description
        </h1>
        <div className="my-4">
          <h1 className="font-bold my-1 ">
            Role:{" "}
            <span className=" pl-4 font-normal text-gray-800">
              {/* {singleJob?.position} Open Positions */}Software Engineer
            </span>
          </h1>
          <h1 className="font-bold my-1 ">
            Location:{" "}
            <span className=" pl-4 font-normal text-gray-800">
              {" "}Remote
              {/* {singleJob?.location} */}
            </span>
          </h1>
          <h1 className="font-bold my-1 ">
            Salary:{" "}
            <span className=" pl-4 font-normal text-gray-800">
              {/* {singleJob?.salary} LPA */}12 LPA
            </span>
          </h1>
          <h1 className="font-bold my-1 ">
            Experience:{" "}
            <span className=" pl-4 font-normal text-gray-800">
              {/* {singleJob?.experienceLevel} Year */}3 year
            </span>
          </h1>
          <h1 className="font-bold my-1 ">
            Total Applicants:{" "}
            <span className=" pl-4 font-normal text-gray-800">
              {/* {singleJob?.applications?.length} */} 4
            </span>
          </h1>
          <h1 className="font-bold my-1 ">
            Job Type:
            <span className=" pl-4 font-normal text-gray-800">
              {/* {singleJob?.jobType} */} full time
            </span>
          </h1>
          <h1 className="font-bold my-1 ">
            Post Date:
            <span className=" pl-4 font-normal text-gray-800">
              {/* {singleJob?.createdAt.split("T")[0]} */} 20/12/25
            </span>
          </h1>
        </div>
        </div>
        </div>
  )
}

export default Description