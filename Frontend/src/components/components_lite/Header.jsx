import React from 'react';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import { GiPostOffice } from "react-icons/gi";

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <div className='flex flex-col gap-5 my-10'>
                        <span className="px-4 mx-auto flex justify-center items-center py-2 gap-2 rounded-full bg-gray-200 text-red-900 font-medium" >
                            <span className='text-blue-900'><GiPostOffice /></span>Your Skills. Your Growth. Your Job.</span>
                    <h2 className="text-5xl font-bold">Opportunities Don't Wait-<br />
                        <span className='text-blue-900'>Grab Yours Now</span>
                    </h2>
                    <p>Scroll less, achieve more — find jobs that actually fit you.<br/>
                        One click, and you're closer to getting hired.
                    </p>
                    <div className='flex w-[40%] shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto'>
                        <input type ="text" placeholder="Find Your Dream Job" className='outline-none border-none-w-full'/>
                        <Button className="ml-auto rounded-r-full">
                            <Search className="h-5 w-5"/>
                        </Button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header;