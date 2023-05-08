import React from 'react';
import İmg2 from '../img/IMA2.png'
import İmg3 from '../img/img3.png'
import İmg4 from '../img/img4.png'

const Latest = () => {
    return (
        <div className="container">
            <div className="flex justify-between items-center text-white m-12">
                <h1 className="text-6xl">Latest episodes</h1>
                <button className="text-[#E5E5E5] ml-52 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    View all episodes
                </button>
            </div>
            <div className="bg-black rounded-3xl m-10 py-8 px-6 m-12 text-white">
                <div className="flex justify-between items-center">
                    <img src={İmg2} alt="#"/>
                    <div className="">
                        <h6 className="bg-gray-600 w-14 text-center m-8">Gear</h6>
                        <h5 className="text-[#118DA8] m-6">Episode 3</h5>
                        <h1 className="text-5xl m-6">Should you get outboard audio gear?</h1>
                        <p className="m-6 w-96">Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.</p>
                        <button className="text-[#E5E5E5] m-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            View all episodes
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-black rounded-3xl m-10 py-8 px-6 m-12 text-white">
                <div className="flex justify-between items-center">
                    <img src={İmg3} alt="#"/>
                    <div className="">
                        <h6 className="bg-gray-600 w-36 text-center m-8">Tips & Tricks</h6>
                        <h5 className="text-[#118DA8] m-6">Episode 2</h5>
                        <h1 className="text-5xl m-6">Mic tricks to take you to the next level</h1>
                        <p className="m-6 w-96">Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.</p>
                        <button className="text-[#E5E5E5] m-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            View all episodes
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-black rounded-3xl m-10 py-8 px-6 m-12 text-white">
                <div className="flex justify-between items-center">
                    <img src={İmg4} alt="#"/>
                    <div className="">
                        <h6 className="bg-gray-600 w-14 text-center m-8">Gear</h6>
                        <h5 className="text-[#118DA8] m-6">Episode 1</h5>
                        <h1 className="text-5xl m-6">The best microphone under $200</h1>
                        <p className="m-6 w-96">With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.</p>
                        <button className="text-[#E5E5E5] m-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            View all episodes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Latest;