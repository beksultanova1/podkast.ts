import React from 'react';
import {AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {CiFacebook} from "react-icons/ci";
import {BsSpotify} from "react-icons/bs";
import {SiAirplayaudio, SiCloudways, SiVectorworks} from "react-icons/si";
import {DiRequirejs} from "react-icons/di";

const Footer = () => {
    return (
        <div className="container">
           <div className="flex justify-between items-center m-20 text-white">
               <div className="flex justify-between items-center">
                   <div>
                       <h1 className="text-4xl m-6">Castaway</h1>
                       <div className="flex justify-evenly items-center m-6 text-3xl">
                           <AiOutlineInstagram/>
                           <AiOutlineTwitter/>
                           <CiFacebook/>
                       </div>
                   </div>
                       <div className="flex flex-col ml-20">
                           <a href="#">Home</a>
                           <a href="#">About</a>
                           <a href="#">Episodes</a>
                           <a href="#">Contact</a>
                       </div>
                   <div className="ml-20">
                       <p>Style Guide</p>
                       <p>Instructions</p>
                       <p>Changelog</p>
                       <p>Credit</p>
                       <p>Powered by Webflow</p>
                       <p>Licenses</p>
                   </div>
                   <div className="flex items-center gap-5 p-6 text-4xl ml-52">
                       <a href="" target="_blank">
                           <BsSpotify className="text-green-500"/>
                       </a>
                       <SiVectorworks className="text-[#F43E37]"/>
                       <SiCloudways className="text-[#F43E37]"/>
                       <SiAirplayaudio className="text-[#F452FF]"/>
                       <DiRequirejs className="text-[#FC7E0F]"/>
                   </div>
                   </div>
               </div>
           </div>
    );
};

export default Footer;