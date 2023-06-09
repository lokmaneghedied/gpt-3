import logo from '../assets/GPT-3.svg'
const Footer = () => {
    return ( 
        <div className="h-[700px] md:h-[600px] bg-[#031B34] grid justify-items-center content-around text-white">
            <div className="grid justify-items-center space-y-6 w-2/3 text-center">
                <h1 className="gradient_text text-[30px] md:text-[40px] xl:text-[50px] font-extrabold">Do you want to step in to the future before others</h1>
                <button className="p-3 border border-white ">Request Early Access</button>
            </div>
            <div className='grid grid-rows-2 grid-flow-col gap-4 md:flex justify-around w-full md:h-56 p-3 md:p-0 text-xs md:text-sm lg:text-base'>
                <div className='md:w-1/6 space-y-2'>
                    <img className='md:h-14 cursor-pointer' src={logo}/>
                    <p>Lorem ipsum dolor sit</p>
                </div>
                <div className=' md:w-1/6 space-y-2'>
                    <h3 className='font-bold'>Links</h3>
                    <p className='cursor-pointer'>Overons</p>
                    <p className='cursor-pointer'>Social Media</p>
                    <p className='cursor-pointer'>Counters</p>
                    <p className='cursor-pointer'>Contact</p>
                </div>
                <div className=' md:w-1/6 space-y-2'>
                    <h3 className='font-bold'>Company</h3>
                    <p className='cursor-pointer'>Terms & Conditions</p>
                    <p className='cursor-pointer'>Privacy Policy</p>
                    <p className='cursor-pointer'>Contact</p>
                </div>
                <div className=' md:w-1/6 space-y-2'>
                    <h3 className='font-bold'>Get in touch</h3>
                    <p>Lorem ipsum dolor</p>
                    <p>000 000 000</p>
                    <p>example@email.com</p>
                </div>
            </div>
            <div>
                <p>On 2023 By Lokmane GHEDIED.</p>
            </div>
        </div>
     );
}
 
export default Footer;