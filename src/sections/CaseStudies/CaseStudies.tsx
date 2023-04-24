import future_image from '../../assets/Feature_Image.png'
import './CaseStudies.css'


const CaseStudies = () => {

    const subtitleClass:string = 'gradient_text font-extrabold text-[20px] md:text-[25px] lg:text-30px]';

    return ( 
        <div className='w-full h-full grid space-y-10'>
            <div className="w-full h-full grid justify-items-center lg:flex lg:justify-center lg:items-center lg:space-x-6 space-y-8 lg:space-y-0 mt-10 lg:mt-0">
                <div className='w-2/3 lg:w-1/3 '>
                    <img src={future_image} />
                </div>
                <div className='w-10/12 lg:w-1/3 space-y-2 lg:space-y-4'>
                    <p className="text-[10px] md:text-[15px] text-[#71E5FF]">Request Early Access to Get Started</p>
                    <h2 className={subtitleClass}>The possibilities are beyond your imagination</h2>
                    <p className='text-[#81AFDD] text-[10px] md:text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde reiciendis sint, animi provident impedit, nam pariatur sed dicta esse consequatur eaque natus deserunt, rerum saepe ipsum sequi aliquid! Beatae.</p>
                    <p className='text-[#FF8A71] text-[10px] md:text-[15px]'>Request Early Access to Get Started</p>
                </div>
            </div>
            <div className='grid place-self-center lg:flex lg:justify-around space-y-4 w-10/12 gradient-bg p-6'>
                <div>
                    <p className='text-[10px] md:text-[15px]'>Request Early Access to Get Started</p>
                    <h3 className='text-[15px] md:text-[20px] xl:text-[25px] font-bold'>Register today & start exploring the endless possibilities.</h3>
                </div>
                <button className='bg-black rounded-full text-white py-2 px-6 text-sm lg:text-base'>Get Started</button>
            </div>
        </div>
     );
}

export default CaseStudies;