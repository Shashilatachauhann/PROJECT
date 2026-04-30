import React from "react";
import { Link } from "react-router-dom";
import {Popover,  PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import {Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  const user = true;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-[#0f0520]"> Job </span>{" "}
            <span className="text-[#760303]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-10" >
          <ul className="flex font-medium items-center gap-6">
            <li>Home</li>
            <li>Browse</li>
            <li>Job</li>
          </ul>
          {
           !user ? (
            <div className="flex items-center gap-2">
            <Button variant="outline">Login</Button>
            <Button className="hover:text-white hover:bg-red-800 bg-pink-400">Register</Button>
            </div>
            
           ) :(
              <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                 <AvatarImage src="https://github.com/shadcn.png" />
          
                </Avatar>
              </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="flex items-center gap-4 space-y-3">
                  <Avatar className="cursor-pointer">
                 <AvatarImage src="https://github.com/shadcn.png" />
          
                </Avatar>
                <div>
                  <h3 className="font-medium">Shashilata Chauhan</h3>
                  <p className="text-sm text-gray-500">
                   Eligendi cupiditate itaque eius soluta commodi rem.</p>
                </div>
                </div>

                <div className="flex flex-col my-2 text-gray-800 ">
                  <div className="flex w-fit items-center gap-2 cursor-pointer"> 
                    <User2></User2>
                    
                    <Button variant="link">Profile</Button>
                  </div>
                 <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <LogOut></LogOut>
                    <Button variant="link">Logout</Button>
                 </div>
                 
                </div>
            </PopoverContent>
          </Popover>
           )
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;