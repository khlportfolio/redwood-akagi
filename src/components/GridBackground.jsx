import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/logo.svg"
import Logo from "../assets/logonavbar.svg"
import Hero from "../assets/hero.svg"
import HeroBox from "../assets/herobox.svg"
import SubOne from "../assets/subone.svg"
import SubTwo from "../assets/subtwo.svg"
import SubThree from "../assets/subthree.svg"
import Button from "./Button";
import JoinUs from "./JoinUs";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function GridBackgroundDemo() {
  return (
    <div className="bg-grid h-screen w-full bg-black-dark bg-grid-white/[0.010] relative">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="z-20 pt-10">
        <nav className="h-16 w-full bg-transparent sticky top-10 z-10 flex items-center justify-between ">
            <Link to="/" className="cursor-pointer flex justify-start">
                <img src={Logo} alt="Logo" width={300} height={61} className="max-sm:w-[208px] max-sm:h-[61px] "/>
            </Link>
            <Button value="JOIN COMMUNITY"/>
        </nav>
        <div className="absolute top-44 left-10 max-lg:hidden">
            <img src={HeroBox} alt="Hero Box" width={150} height={150} className="aspect-square" />
        </div>
            <JoinUs />
        <img src={Hero} alt="Hero" className="absolute left-1/2 top-1/2 max-sm:top-[40%] transform max-sm:-translate-y-[40%] -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[620px] h-auto max-w-none lg:w-[50vw] xl:w-[38vw]"/>
        <h1 className="text-white-1 font-strong text-[10vw] max-lg:text-[14vw] absolute left-1/2 top-[80%] max-sm:top-[65%] transform -translate-x-1/2 -translate-y-[80%] max-sm:-translate-y-[65%] tracking-wider">REDWOOD</h1>
        {/* <TextGenerateEffect words="REDWOOD" /> */}

        <div className="flex flex-col gap-3 absolute left-1/2 top-[96%] max-sm:top-[85%] transform -translate-x-1/2 -translate-y-[96%] max-sm:-translate-y-[85%]">
            <h2 className="text-[20px] text-white-1 font-normal font-helvetica text-center">Subdivision:</h2>
            <div className="flex items-center justify-center gap-8 max-sm:gap-1">
                <img src={SubOne} alt="Sub division 1" width={170} height={71} className="w-[100px] md:w-[130px]"/>
                <img src={SubTwo} alt="Sub division 2" width={300} height={86} className="w-[200px] md:w-[260px] "/>
                <img src={SubThree} alt="Sub division" width={130} height={86} className="w-[80px] md:w-[90px] "/>
            </div>
        </div>
      </div>
    </div>
  );
}
