import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {Popover,  PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import {Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/logout`, {}, { withCredentials: true });
      if (res.data.success) {
        navigate("/");
        toast.success("Logged out successfully");
        dispatch(setUser(null));
        
      }
    } catch (error) {
      console.log(error);
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-blue-900"><span className="font-cursive italic">A</span>spire</span>
            <span className="text-red-900"><span className="font-cursive italic">S</span>phere</span>
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
                    
                    <Button variant="link"><Link to={"/Profile"}>Profile</Link></Button>
                  </div>
                 <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <LogOut></LogOut>
                    <Button onClick={logoutHandler} variant="link">Logout</Button>
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