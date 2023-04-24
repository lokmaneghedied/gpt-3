import Data from '../assets/Data.png'
import Data2 from '../assets/Data2.png'
import Data3 from '../assets/Data3.png'
import Data4 from '../assets/Data4.png'
import Data5 from '../assets/Data5.png'

const Library = () => {
    return ( 
        <div id='library' className='grid h-full w-full my-6 '>
            <div className="w-10/12 grid justify-items-start content-start place-self-center space-y-6 ">
                <h1 className="gradient_text text-[30px] md:text-[40px] xl:text-[50px] font-extrabold">A lot is happening,<br/> We are blogging about it.</h1>
                <div className='grid w-full space-y-3 md:space-y-0 md:grid-cols-2 md:gap-4 lg:grid-cols-none lg:grid-rows-2 lg:grid-flow-col'>
                    <div className='grid  md:col-span-2 lg:row-span-2 '>
                        <img className='h-40 w-full lg:h-full' src={Data}/>
                        <div className='lg:h-full grid lg:content-between p-2 lg:p-4 space-y-4 lg:space-y-0 text-white bg-[#042C54]'>
                            <span className='space-y-2'>
                                <p className='text-xs'>Sep 26, 2021</p>
                                <p>GPT-3 and Open  AI is the future. Let us explore how it is ?</p>
                            </span>
                            <p className='text-xs font-bold cursor-pointer'>Read Full Article</p>
                        </div>
                    </div>
                    <div>
                        <img className='h-40 w-full' src={Data2}/>
                        <div className='grid p-2 space-y-4 text-white bg-[#042C54]'>
                            <span className='space-y-2'>
                                <p className='text-xs'>Sep 26, 2021</p>
                                <p>GPT-3 and Open  AI is the future. Let us explore how it is?</p>
                            </span>
                            <p className='text-xs font-bold cursor-pointer'>Read Full Article</p>
                        </div>
                    </div>
                    <div>
                        <img className='h-40 w-full' src={Data3}/>
                        <div className='grid p-2 space-y-4 text-white bg-[#042C54]'>
                            <span className='space-y-2'>
                                <p className='text-xs'>Sep 26, 2021</p>
                                <p>GPT-3 and Open  AI is the future. Let us explore how it is?</p>
                            </span>
                            <p className='text-xs font-bold cursor-pointer'>Read Full Article</p>
                        </div>
                    </div>
                    <div>
                        <img className='h-40 w-full' src={Data4}/>
                        <div className='grid p-2 space-y-4 text-white bg-[#042C54]'>
                            <span className='space-y-2'>
                                <p className='text-xs'>Sep 26, 2021</p>
                                <p>GPT-3 and Open  AI is the future. Let us explore how it is?</p>
                            </span>
                            <p className='text-xs font-bold cursor-pointer'>Read Full Article</p>
                        </div>
                    </div>
                    <div>
                        <img className='h-40 w-full' src={Data5}/>
                        <div className='grid p-2 space-y-4 text-white bg-[#042C54]'>
                            <span className='space-y-2'>
                                <p className='text-xs'>Sep 26, 2021</p>
                                <p>GPT-3 and Open  AI is the future. Let us explore how it is?</p>
                            </span>
                            <p className='text-xs font-bold cursor-pointer'>Read Full Article</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Library;