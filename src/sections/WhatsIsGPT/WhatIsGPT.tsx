import './WhatIsGPT.css'

const WhatIsGPT = () => {

    const paragraphClass:string = 'text-[#81AFDD] text-[10px] md:text-[15px]';
    const subTitleClass:string = 'text-[15px] md:text-[20px] xl:text-[25px] font-bold';

    return ( 
        <div id='whatIsGPT' className="grid h-[700px] md:h-[800px] xl:h-screen text-white text-[10px] md:text-[15px] font-normal">
            <div id='container' className='grid content-around place-self-center w-full md:w-11/12 xl:w-10/12 h-4/5 xl:h-full p-4 md:py-0 md:px-10 xl:px-16 space-y-4 md:space-y-0'>
                <div className='grid md:grid-cols-3 w-full '>
                    <span className='space-y-1 md:space-y-2'>
                        <p id='topLine'> </p>
                        <h3 className={subTitleClass}>What is GPT-3 </h3>
                    </span>
                    <span className='md:col-span-2'>
                        <p className={paragraphClass}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, labore laborum eaque vitae nisi facere libero reprehenderit ipsum laboriosam neque iste commodi tenetur, quidem ex placeat sequi tempore reiciendis itaque.</p>

                    </span>
                </div>
                <div className='grid md:grid-cols-3 w-full '>
                    <h2 className='text-[20px] md:text-[25px] xl:text-[30px] font-extrabold gradient_text md:col-span-2'>The possibilities are beyond your imagination</h2>
                    <span className='md:place-self-center pt-2 md:pt-0'>
                        <p className='text-[#FF8A71] text-[10px] md:text-[15px]'>Explore The Library</p>
                    </span>
                </div>
                <div className='grid md:grid-cols-3 w-full space-y-4 md:space-y-0'>
                    <div className='space-y-1 md:space-y-4 md:pr-3 xl:pr-5'>
                        <span className='space-y-1 md:space-y-2'>
                            <p id='topLine'> </p>
                            <h3 className={subTitleClass}>Chat-bots</h3>
                        </span>
                        <p className={paragraphClass}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptatum a, ex ipsa veritatis dolor atque cumque optio modi neque ullam, necessitatibus accusamus enim libero debitis eum. Sapiente, quam quis.</p>
                    </div>
                    <div className='space-y-1 md:space-y-4 md:pr-3 xl:pr-5'>
                        <span className='space-y-1 md:space-y-2'>
                            <p id='topLine'> </p>
                            <h3 className={subTitleClass}>Knowledge base</h3>
                        </span>
                        <p className={paragraphClass}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis temporibus facere nulla ab voluptates quas ipsam, ipsa praesentium illo. Dolor est praesentium soluta voluptas quidem possimus voluptatum non sed impedit.</p>
                    </div>
                    <div className='space-y-1 md:space-y-4 md:pr-3 xl:pr-5'>
                        <span className='space-y-1 md:space-y-2'>
                            <p id='topLine'> </p>
                            <h3 className={subTitleClass}>Education</h3>
                        </span>
                        <p className={paragraphClass}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque fugiat tempora aliquid asperiores eaque dolores, veritatis necessitatibus nesciunt omnis, iste ipsum accusamus exercitationem fuga voluptatibus odio laboriosam cumque magnam eius.</p>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default WhatIsGPT;