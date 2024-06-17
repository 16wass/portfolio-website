"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section  id="about" className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <br></br>
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I am{" "}
          </span>{" "}
          <br></br>
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
            Wassim Mezghanni {" "}
          </span>
          <TypeAnimation
            sequence={[
              "Computer science student",
              1000,
              "Programmer",
              1000,
              "Web Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
        A tech enthusiast with an insatiable appetite for new challenges, 
        I am continually driven by a positive attitude and a growth mindset. 
        My journey in information engineering at Technical University of Munich 
        has equipped me with a robust foundation in technical skills 
        and collaborative project management.
        </p>
        <div>
          <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4" 
          onClick={() => { 
            // go to the contact section
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
          }}>
            Hire Me
          </button> 
          <button className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full" 
          onClick={() => {
              const link = document.createElement('a');
              link.href = 'https://drive.google.com/file/d/1tpmTdpJH5d7bCTjGncXazgcogM1o14Hs/view?usp=sharing'; 
              link.setAttribute('download', 'cv -wassim mezghanni.pdf'); 
               document.body.appendChild(link);
              link.click();
              document.body.removeChild(link); 
              }}>
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>

          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
          <Image
            src="/images/profile-pic.png" //Wassim Mezghanni.jpg
            alt="Wassim Mezghanni's portrait"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;