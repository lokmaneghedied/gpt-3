import Data from '../assets/Data.png'
import Data2 from '../assets/Data2.png'
import Data3 from '../assets/Data3.png'
import Data4 from '../assets/Data4.png'
import Data5 from '../assets/Data5.png'

const Library = () => {
    return ( 
        <div id='library' className='grid h-[1900px] md:h-[1300px] lg:h-[1000px] w-full'>
            <div className="lg:h-4/5 w-10/12 grid justify-items-start content-start place-self-center space-y-6">
                <h1 className="gradient_text text-[30px] md:text-[40px] xl:text-[50px] font-extrabold">A lot is happening,<br/> We are blogging about it.</h1>
                <div className="md:grid md:grid-rows-3 lg:grid-rows-2 md:grid-flow-col md:gap-4 lg:h-[600px] space-y-4 md:space-y-0 text-white ">
                    <div className='row-span-2 md:h-full' >
                       <img className='md:h-[265px] lg:h-[225px] w-full' src={Data} />
                       <span className='grid lg:content-between h-3/5 p-5 bg-[#042C54] space-y-4 lg-space-y-0'>
                        <span className='space-y-3 '>
                            <p className='text-sm'>Sep 26, 2021</p>
                            <p className='text-lg font-bold'>GPT-3 and Open AI is the future. Let us explore how it is?</p>
                        </span>
                            <p className='text-sm font-bold'>Read Full Article</p>
                       </span>
                    </div>
                    <div className='lg:h-full'>
                       <img className='lg:h-[100px] w-full' src={Data2} />
                       <span className='grid lg:content-between h-3/5 p-5 bg-[#042C54] space-y-4 lg:space-y-0'>
                        <span className='space-y-3 '>
                            <p className='text-sm'>Sep 26, 2021</p>
                            <p className='text-lg font-bold'>GPT-3 and Open AI is the future. Let us explore how it is?</p>
                        </span>
                            <p className='text-sm font-bold'>Read Full Article</p>
                       </span>
                    </div>
                    <div className='lg:h-full'>
                       <img className='lg:h-[100px] w-full' src={Data3} />
                       <span className='grid lg:content-between h-3/5 p-5 bg-[#042C54] space-y-4 lg:space-y-0'>
                        <span className='space-y-3 '>
                            <p className='text-sm'>Sep 26, 2021</p>
                            <p className='text-lg font-bold'>GPT-3 and Open AI is the future. Let us explore how it is?</p>
                        </span>
                            <p className='text-sm font-bold'>Read Full Article</p>
                       </span>
                    </div>
                    <div className='lg:h-full'>
                       <img className='lg:h-[100px] w-full' src={Data4} />
                       <span className='grid lg:content-between h-3/5 p-5 bg-[#042C54] space-y-4 lg:space-y-0'>
                        <span className='space-y-3 '>
                            <p className='text-sm'>Sep 26, 2021</p>
                            <p className='text-lg font-bold'>GPT-3 and Open AI is the future. Let us explore how it is?</p>
                        </span>
                            <p className='text-sm font-bold'>Read Full Article</p>
                       </span>
                    </div>
                    <div className='lg:h-full'>
                       <img className='lg:h-[100px] w-full' src={Data5} />
                       <span className='grid lg:content-between h-3/5 p-5 bg-[#042C54] space-y-4 lg:space-y-0'>
                        <span className='space-y-3 '>
                            <p className='text-sm'>Sep 26, 2021</p>
                            <p className='text-lg font-bold'>GPT-3 and Open AI is the future. Let us explore how it is?</p>
                        </span>
                            <p className='text-sm font-bold'>Read Full Article</p>
                       </span>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Library;