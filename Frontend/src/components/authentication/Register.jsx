import React, { useState } from "react";
import Navbar from "../components_lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Link } from "react-router-dom";

const Register = () => {
  const [input, setInput] = useState({
      fullname:"",
      email: "",
      password: "", 
      role: "",
      phoneNumber:"",
      file:"",
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
    // const formData = new FormData();
    // formData.append("fullname", input.fullname);
    // formData.append("email", input.email);
    // formData.append("password", input.password);
    // formData.append("pancard", input.pancard);
    // formData.append("adharcard", input.adharcard);
    // formData.append("role", input.role);
    // formData.append("phoneNumber", input.phoneNumber);
    // if (input.file) {
    //   formData.append("file", input.file);
    // }
    // try {
    //   dispatch(setLoading(true));
    //   const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //     withCredentials: true,
    //   });
    //   if (res.data.success) {
    //     navigate("/login");
    //     toast.success(res.data.message);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   const errorMessage = error.response
    //     ? error.response.data.message
    //     : "An unexpected error occurred.";
    //   toast.error(errorMessage);
    // } finally {
    //   dispatch(setLoading(false));
    // }
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5 text-center text-blue-900">Register</h1>
          <div className="my-2">
            <Label >Fullname</Label>
            <Input type="text" name="fullname" value ={input.fullname} onChange={changeEventHandler} placeholder="Henry Khanna"  className="border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-gray-400"></Input>
          </div>
          <div className="my-4">
            <Label>Email</Label>
            <Input type="email" name="email" value ={input.email} onChange={changeEventHandler} placeholder="XYZ@gmail.com" className="border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-gray-400"></Input>
          </div>
          <div className="my-4">
            <Label>Password</Label>
            <Input type="password" name="password" value ={input.password} onChange={changeEventHandler} placeholder="********"  className="border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-gray-400"></Input>
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="tel" name="phoneNumber" value ={input.phoneNumber} onChange={changeEventHandler} placeholder="0954542874"  className="border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-gray-400"></Input>
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
          <div className="flex items-center gap-2">
            <Label>Profile Photo</Label>
            <Input
              type="file"
              accept="image/*"
              className="cursor-pointer border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-gray-400"

            />
          </div>
          <button
            type="submit"
            className="block w-full py-3 my-3 text-white  bg-gray-500 hover:bg-blue-900 rounded-md">
            Register
          </button>
          <p className="text-gray-500 text-md my-2">
            Already have an account?
            <Link to="/login" className="text-blue-800 font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;