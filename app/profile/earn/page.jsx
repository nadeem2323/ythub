"use client"
import { useState } from 'react';
import {Avatar,Button} from "@nextui-org/react";

const Profile = () => {

  return (
    <div className='flex flex-col gap-4'>
      <div className="flex justify-between items-center px-20 w-full h-40 bg-default-300/20">
        <div className="flex items-center">
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
        <h1 className="text-3xl font-bold ml-4">John Doe</h1>
        </div>
        <div className="">
          <Button className='bg-orange-400'>Coins</Button>
        </div>

      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 px-12 gap-3">
        <div className="h-44 bg-default-300/20 items-center rounded-xl flex justify-center">
            <h1 className="text-3xl font-bold ">Today Earn : 0 </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;