import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "jdf";
  return (
    <div className='p-5 rounded-md shadow-xl bg-slate-50 border-blue-950 cursor-pointer hover:shadow-2xl shadow-blue-200 hover:p-3 '>
      
      {/* Top */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">3 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      {/* Company + Logo */}
      <div className="flex items-center gap-3 my-4">
        <Avatar className="h-12 w-12 border">
          <AvatarImage src="https://yt3.googleusercontent.com/RvaWeIBzR10XOJtWuZGm1gnZ4Zmn3P9iQy9EMs7-2p5wohQH0d-u4vP90QVINN3wTZR0F5Ll1g=s900-c-k-c0x00ffffff-no-rj" />
        </Avatar>

        <div>
          <h1 className="text-lg font-semibold">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      {/* Job Title */}
      <div>
        <h2 className="font-bold text-lg mb-2">Job Title</h2>
        <p className="text-sm text-gray-600 line-clamp-3">
          Senior Software Engineer Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos ut laudantium esse veritatis quam? Amet dolore error fuga ab nam!
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Badge className="text-blue-900 bg-white">10 Positions</Badge>
        <Badge className="text-red-900 bg-white">20 LPA</Badge>
        <Badge className="text-blue-900 bg-white">Remote</Badge>
        <Badge className="text-red-900 bg-white">Full Time</Badge>
        <div className="flex items-center gap-4">
        <Button variant="outline" 
        onClick={()=>{
          navigate(`/description/${jobId}`);
        }}
         className="rounded-md bg-blue-700 text-white hover:bg-blue-900 hover:text-white font-bold">Details</Button>
        <Button variant="outline"
         className="rounded-md bg-red-700 text-white hover:bg-red-900 hover:text-white">Save for later</Button>
      </div>
      </div>
      
    </div>
  );
};

export default Job;