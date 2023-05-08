import React from 'react';
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import İmg5 from "../img/img5.png"

const Jacob = () => {
    return (
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="text-white m-12">
                    <BsFillArrowRightCircleFill className="text-6xl text-[#118DA8] m-6"/>
                    <h6 className="text-[#118DA8] m-6">Meet your host</h6>
                    <h1 className="text-6xl m-6">Jacob Paulaner</h1>
                    <p className="text-2xl text-[#FFFFFF] m-6">Jacob has a background in audio engineering, and has been podcasting since the early days.</p>
                    <p className="text-2xl text-[#FFFFFF] m-6">He’s here to help you level up your game by sharing everything he’s learned along the way.</p>
                </div>
                <div>
                    <img src={İmg5} alt=""/>
                </div>
            </div>
            <div className="m-12 bg-black rounded-3xl">
                <div className="flex justify-between items-center">
                    <div className="m-6">
                        <h5 className="text-[#118DA8] m-6">Email Newsletter</h5>
                        <h1 className="text-white text-6xl m-6">Subscribe <br/> for updates</h1>
                    </div>
                    <div className="m-6 py-20">
                        <form className="flex items-center m-6">
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="w-full">
                                <div className="inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                </div>
                                <input type="text" id="simple-search"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Name" required/>
                            </div>
                        </form>
                        <form className="flex items-center m-6 w-96">
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="w-full">
                                <div className="inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                </div>
                                <input type="text" id="simple-search"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Emil" required/>
                            </div>
                        </form>
                        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-6">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jacob;