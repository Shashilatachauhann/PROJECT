import React, { useState } from 'react'
import Navbar from './Navbar';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from '../ui/badge';
import AppliedJobs from './AppliedJobs';
import EditProfileModal from './EditProfileModal';
import { useSelector } from 'react-redux';

// const skills = ["React", "JavaScript", "Html", "CSS", "Python", "Node.js"];
const isResume = true;
const Profile = () => {
    const [open, setOpen] = useState(false);
    const { user } = useSelector((store) => store.auth);

    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto  bg-white border border-gray-200 rounded-2xl my-5 p-8 shadow shadow-gray-400 hover:shadow-blue-900">
                <div className='flex justify-between'>
                    <div className="flex items-center gap-5">
                        <Avatar className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                className="w-full h-full object-cover"
                            />
                        </Avatar>

                        <div>
                            <h1 className="font-medium text-xl">{user?.fullname}</h1>
                            <p>
                                {user?.profile?.bio || "No bio available"}

                            </p>
                        </div>
                    </div>
                    <Button
                        onClick={() => setOpen(true)}
                        className="text-right" variant='outline'>
                        <Pen />
                    </Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail /><span className=''>
                            <a href={`mailto:${user?.email}`} className='text-blue-900 hover:underline'>{user?.email}</a>
                        </span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact /><span className=''>
                            <a href={`tel:${user?.profile?.phone}`} className='text-blue-900 hover:underline'>{user?.profile?.phone || "NA"}</a>
                        </span>
                    </div>
                </div>
                <div>
                    <div className='my-5'>
                        <h1 className='font-bold text-lg'>Skills</h1>
                        <div className='flex flex-wrap items-center gap-2 mt-2'>
                            {user?.profile?.skills && user.profile.skills.length > 0 ? (
                                user.profile.skills.map((item, index) => (
                                    <Badge
                                        key={index}
                                    >
                                        {item}
                                    </Badge>
                                ))
                            ) : (
                                <span>NA</span>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <label className="text-md font-bold"> Resume / Portfolio </label>
                            {isResume ? (
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={user?.profile?.resume}
                                    className="text-blue-500 w-full hover:underline cursor-pointer"
                                >
                                    View Resume/Portfolio
                                </a>
                            ) : (
                                <span>No Link Provided</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='text-lg font-bold'>
                    Applied Jobs
                </h1>
                <AppliedJobs />
            </div>
            <EditProfileModal open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile;