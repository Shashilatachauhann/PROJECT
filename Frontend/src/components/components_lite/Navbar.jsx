import React from "react";
import { Link } from "react-router-dom";
import {Popover,  PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-[#0f0520]"> Job </span>{" "}
            <span className="text-[#760303]">Portal</span>
          </h1>
        </div>
        <div>
          <ul className="flex font-medium items-center gap-6">
            <li>Home</li>
            <li>Browse</li>
            <li>Job</li>
          </ul>
          <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
            <PopoverContent>
                 <h1 className="text-2xl font-bold">
                  Job<span className="text-[#041151]">Portal</span></h1>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;