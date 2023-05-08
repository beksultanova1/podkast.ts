import React, {useEffect, useState} from 'react';

const Header = () => {
    const [scroll, setScroll] = useState(0)
    const toScroll = () => {
        setScroll(window.scrollY)
    }
    useEffect(() => {
        window.addEventListener("scroll", toScroll)
    }, [])
    return (
        <header style={{
            background: scroll > 20 ? "gray" : ""
        }} id="header" className="bg-black py-1 sticky top-0">
            <div className="container">
                <div className="flex justify-between items-center m-4">
                    <h1 className="w-3 text-4xl text-white m-4">Castaway</h1>
                    <div className="flex justify-between m-3 w-3/12 text-white text-xl">
                        <a className="text-[#118DA8]" href="#">Home</a>
                        <div className="flex justify-between w-36">
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;