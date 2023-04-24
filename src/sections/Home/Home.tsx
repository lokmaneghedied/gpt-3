import './Home.css'
import illustration from '../../assets/Illustration.png'
import people from '../../assets/Signup.png'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropBox from '../../assets/dropbox-1.png'
import shopify from '../../assets/shopify.png'


const Home = () => {
    return ( 
        <div className="xl:h-screen h-full w-full grid content-center space-y-6 text-white">
            <div className='grid xl:flex xl:justify-around xl:items-center place-self-center h-4/5'>
                <div className='xl:w-1/2 h-full grid content-center space-y-4 p-6 xl:p-0'>
                    <h1 className='gradient_text text-[30px] md:text-[40px] xl:text-[50px] font-extrabold '>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                    <p className='text-[10px] md:text-[15px] font-normal text-[#81AFDD] mt-2'>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <span className='w-full '>
                        <input className='bg-[#052D56] rounded-l p-3 md:p-4 w-2/4 text-xs md:text-base' type="text" placeholder='Your Email Address' />
                        <button className="bg-[#FF4820] rounded-r p-3 md:p-4 md:w-1/4 text-xs md:text-base">Get Started</button>
                    </span>
                    <img src={people} alt="" />
                </div>
                <div className='xl:w-1/3 place-self-center w-1/2'>
                    <img src={illustration} alt="" />
                </div>
            </div>
            <div className='flex justify-center items-center place-self-center space-x-4 pt-10 xl:pt-6 '>
                <img className='w-11 md:w-16 xl:w-24' src={google} />
                <img className='w-11 md:w-16 xl:w-24' src={slack} />
                <img className='w-11 md:w-16 xl:w-24' src={atlassian} />
                <img className='w-11 md:w-16 xl:w-24' src={dropBox} />
                <img className='w-11 md:w-16 xl:w-24' src={shopify} />
            </div>
        </div>
     );
}
 
export default Home;


