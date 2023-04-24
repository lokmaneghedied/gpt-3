import logo from '../../assets/GPT-3.svg'
import LogIn from '../../components/LogIn';
import  "./Header.css";
import { useState,useEffect } from 'react';

const Header = () => {

    const [isToggle , setIsToggle] = useState(false)
    const [isScrolled , setIsScrolled] = useState(false)

    let navBarStyle:string = isScrolled || isToggle ? 'text-white fixed w-full lg:flex items-center justify-around gradient__bg' : 'text-white fixed w-full lg:flex items-center justify-around'

    const anchorTags:string = isToggle ? 'grid justify-items-center visible space-y-4 drop-shadow-md text-center py-2 z-30 text-sm md:text-base': 'collapse absolute lg:flex lg:items-center lg:w-full lg:relative lg:visible text-center lg:space-x-1 xl:space-x-3 font-extralight z-30'
    
    const anchorTag :string = 'hover:bg-[#002853] rounded p-2 w-40 lg:w-full'

    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setIsScrolled(true)
        } else{
            setIsScrolled(false)
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

    return ( 
        <div id='Header' className={navBarStyle}>
            <div className='flex justify-around items-center w-full m-2 md:m-3 lg:m-6 '>
                <img src={logo} alt=""/>
                <div className='flex items-center space-x-3'>
                    <div className='collapse absolute w-1 md:visible md:relative md:w-fit lg:collapse lg:absolute lg:w-1'>
                        <LogIn />
                    </div>
                    <label className="burger lg:collapse lg:absolute scale-50 md:scale-90"  >
                        <input onClick={()=>setIsToggle(!isToggle)}  type="checkbox" id="burger" />
                            <span></span>
                            <span></span>
                            <span></span>
                    </label>
                 </div>     
            </div>
            <div className={anchorTags}>
                <a className={anchorTag} href="#home">Home</a>
                <a className={anchorTag} href="#whatIsGPT"><span>What</span><span className='invisible'>a</span><span>Is</span><span className='invisible'>a</span><span>GPT</span></a>
                <a className={anchorTag} href="#openAI">OpenAI</a>
                <a className={anchorTag} href="#caseStudies"><span>Case</span><span className='invisible'>a</span><span>Studies</span> </a>
                <a className={anchorTag} href="#library">Library</a>
                <span className='md:collapse md:absolute md:w-1 py-2'>
                    <LogIn />
                </span>
            </div>
            <div className='collapse absolute lg:visible lg:relative w-full flex justify-center'>
                <LogIn />
            </div>
        </div>
     );
}
 
export default Header;