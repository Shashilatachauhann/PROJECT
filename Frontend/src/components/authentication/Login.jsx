import React, { useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup} from "../ui/radio-group";
import { Link } from "react-router-dom";

const Login = () => {
   const [input, setInput] = useState({
    email: "",
    password: "", 
    role: "",
  });
   const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const ChangeFilehandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
   const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
   };
  return (
     <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5 text-center text-blue-900">Login</h1>
          <div className="my-4">
            <Label>Email</Label>
            <Input type="email" name="email" placeholder="XYZ@gmail.com" value ={input.email} onChange={changeEventHandler}
            className="border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-gray-400"></Input>
          </div>
          <div className="my-4">
            <Label>Password</Label>
            <Input type="password" name="password" value ={input.password} onChange={changeEventHandler} placeholder="********"  className="border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-gray-400"></Input>
          </div>
          <div className="flex item-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5 ">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={input.role === "Student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <button
            type="submit"
            className="w-full py-3 my-3 text-white flex items-center justify-center max-w-7xl mx-auto bg-gray-500 hover:bg-blue-900 rounded-md">
            Login
          </button>
          <p className="text-gray-500 text-center my-2">
            Create new Account
            <Link to="/register" className="text-blue-800 font-semibold">
            <button className=" w-full py-3 my-3 text-white flex items-center justify-center max-w-7xl mx-auto bg-green-600 hover:bg-green-800/90 rounded-md">
                  Register
                </button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;