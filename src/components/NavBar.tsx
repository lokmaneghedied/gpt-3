import LogIn from "./LogIn";

const NavBar = () => {
    return ( 
        <div className="flex justify-around items-center w-fit bg-green-600">
            <div className='flex' >
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#whatIsGPT">WhatIsGPT</a>
                <a href="#openAI">OpenAI</a>
                <a href="#caseStudies">Case Studies</a>
                <a href="#library">Library</a>
            </div>
            <LogIn />
            <label className="burger lg:collapse lg:absolute scale-75 md:scale-100"  >
                <input type="checkbox" id="burger" />
                    <span></span>
                    <span></span>
                    <span></span>
            </label>
        </div>
     );
}
 
export default NavBar;