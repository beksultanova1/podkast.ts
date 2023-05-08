import React from 'react';
import İmg1 from "../img/img1.svg"
import {BsSpotify} from "react-icons/bs";
import {SiAirplayaudio, SiCloudways, SiVectorworks} from "react-icons/si";
import {DiRequirejs} from "react-icons/di";

const Podcast = () => {
    return (
        <div className="container">
                <div className="m-20 flex justify-between items-center">
                    <img src={İmg1} width={500} alt="#"/>
                    <div className="text-white">
                        <h1 className="text-7xl py-4 m-20">Take your podcast to the next level</h1>
                        <div className="icons m-24">
                            <h6>Listen on</h6>
                            <div className="flex items-center gap-5 p-6 text-4xl">
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
            </div>
    );
};

export default Podcast;