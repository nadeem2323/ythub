"use client"
import React from 'react'
import {Button} from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="min-h-[84vh] flex  items-center flex-col overflow-hidden px-20 max-sm:px-6 ">
                <Tooltip showArrow={true} color='foreground' content="YT Hub 😍">
                      <Button className='herobtn top-24 max-sm:top-20 right-1/4 absolute max-sm:right-32'>
                          Welcome to the YT Hub ✨
                        </Button>
                </Tooltip>
                  <h2 className="text-7xl font-bold mb-4 max-sm:text-6xl text-center mt-36 max-lg:text-5xl max-lg:mt-24">Welcome to YT Hub!</h2>
                      <p className="mb-4 text-xl w-1/2 text-center max-md:w-full mt-4">Grow your YouTube channel with our promotion services. Get more views and subscribers!</p>
                  <Button radius="full" color="" variant="solid" className="w-fit text-xl py-2 px-4 dark:bg-slate-100 dark:text-black text-white bg-black">
                    <Link  href="/signup" className='flex items-center gap-2 group transition-all'>
                    <span>Join Now </span><FaArrowRightLong className='mt-1.5  group-hover:ml-3 transition-all'/>
                    </Link>
                    </Button>
              
              <div className="w-full backdrop-blur-sm  absolute top-[99.7vh] h-2"></div>
                </section>
  )
}

export default Hero