"use client"
import {Button} from "@nextui-org/react";
import React from 'react';
import {Accordion, AccordionItem} from "@nextui-org/react";
import Accrodin from "./sections/Accrodin";
import Hero from "./sections/Hero";
import MainSec from "./sections/mainSec";


const Home = () => {
    return (
        <>
          <div className="mx-auto">
					<div className="absolute min-h-screen top-0 bg-[url('/bgHero.svg')] bg-cover bg-center w-full" />
                <Hero />
        
               <MainSec />  
                <section className="max-sm:px-6 min-h-screen grid place-content-center">
                    <h2 className="text-6xl font-bold pb-12 text-center">How It Works ?</h2>
                    <Accrodin />
                </section>
                
            </div>
        </>
    );
};

export default Home;
