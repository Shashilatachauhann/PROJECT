import React from "react";
import { Link } from "react-router-dom";
import {Popover,  PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import {Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-blue-900"> Job </span>{" "}
            <span className="text-red-900">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-10" >
          <ul className="flex font-medium items-center gap-6">
             <Link to={"/Home"}>Home</Link>
            <li><Link to={"/Browse"}>Browse</Link></li>
            <Link to={"/Jobs"}>Jobs</Link>
          </ul>
          {
           !user ? (
            <div className="flex items-center gap-2">
              <Link to={"/login"}>
            <Button className="hover:text-white hover:bg-blue-900 bg-gray-400">Login</Button>
            </Link>
            <Link to={"/register"}>
            <Button className="hover:text-white hover:bg-blue-900 bg-gray-400">Register</Button>
            </Link>
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