const OpenAI = () => {

    const paragraphClass:string = 'text-[#81AFDD] text-[10px] md:text-[15px]';
    const subTitleClass:string = 'text-[15px] md:text-[20px] xl:text-[25px] font-bold';

    return ( 
        <div id="openAI" className="h-full lg:h-[900px] xl:h-[800px] w-full grid">
            <div className="md:place-self-center lg:flex lg:justify-center lg:items-start md:w-11/12 xl:w-10/12 text-white space-y-6 lg:space-y-0 px-4 md:px-0">
                <div className="lg:w-2/5 space-y-2 lg:space-y-4 lg:pt-4 ">
                    <h2 className='gradient_text font-extrabold text-[20px] md:text-[25px] lg:text-30px]'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
                    <p className='text-[#FF8A71] text-[10px] md:text-[15px] cursor-pointer'>Request Early Access to Get Started</p>
                </div>
                <div className="lg:w-3/5 space-y-10 ">
                    <div className='md:flex md:justify-around md:items-center '>
                        <span className='w-2/5 space-y-1 md:space-y-2'>
                            <p id='topLine'> </p>
                            <h3 className={subTitleClass}>Improving end distrusts instantly </h3>
                        </span>
                        <span className='w-2/5'>
                            <p className={paragraphClass}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam necessitatibus, cumque aut dolores eveniet, eaque numquam exercitationem culpa a praesentium hic vitae tempore deserunt sequi? Magni ea suscipit sint repellat!</p>
                        </span>
                    </div>
                    <div className='md:flex md:justify-around md:items-center '>
                        <span className='w-2/5 space-y-1 md:space-y-2'>
                            <p id='topLine'> </p>
                            <h3 className={subTitleClass}>Become the tended active</h3>
                        </span>
                        <span className='w-2/5'>
                            <p className={paragraphClass}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, veritatis illo sequi commodi obcaecati facere dolore, magnam excepturi sint facilis minus. Quibusdam placeat tempore vitae voluptatem ullam dolorem ipsam quis?</p>
                        </span>
                    </div>
                    <div className='md:flex md:justify-around md:items-center '>
                        <span className='w-2/5 space-y-1 md:space-y-2'>
                            <p id='topLine'> </p>
                            <h3 className={subTitleClass}>Message or am nothing</h3>
                        </span>
                        <span className='w-2/5'>
                            <p className={paragraphClass}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum alias, architecto qui nulla culpa eligendi quia? Ut nulla error velit corrupti iusto magnam unde cum! Nobis eius fuga temporibus ducimus.</p>
                        </span>
                    </div>
                    <div className='md:flex md:justify-around md:items-center '>
                        <span className='w-2/5 space-y-1 md:space-y-2'>
                            <p id='topLine'> </p>
                            <h3 className={subTitleClass}>Really boy law county</h3>
                        </span>
                        <span className='w-2/5'>
                            <p className={paragraphClass}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus consectetur expedita iure quis harum sequi quod architecto explicabo magnam, perspiciatis dolor earum ipsam, vero nisi, aut soluta quos officia voluptatibus.</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default OpenAI;