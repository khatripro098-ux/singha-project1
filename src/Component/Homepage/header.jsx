import headerVideo from '../../assets/video/godslife vid.mp4'

function Header (){

    return (
        
        <div className='flex items-center mt-[55px] lg:mt-[92px] justify-center'>
            <div className='relative flex-wrap items-center '>
                <video autoPlay muted loop id='video-section' className=' w-[100vw] h-[30rem] lg:h-[30rem] object-cover' src={headerVideo} alt="" />

                <div className='absolute flex top-0 w-[100%] h-[100%] leading-relaxed justify-center gap-5 items-center'>
                    <div className='flex flex-col gap-9 items-center text-center'>
                        <div>
                        <h1 className='text-white text-[2rem] sm:text-[2.2rem] md:text-[2.7rem] lg:text-[3rem]'>
                        <strong>World-Class Healthcare, Globally Accessible</strong>
                        </h1>
                        </div>

                        <div>
                            <p className='text-white max-w-3xl text-[0.9rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem]'>
                            Experience premium medical treatments combined with
                            recovery in beautiful destinations at a fraction of the cost.
                        </p>
                        </div>
                        <div className='flex flex-wrap justify-between justify-center lg:gap-6 gap-4 flex-1'>
                            <button className='text-white sm:text-[15px] text-[13px] cursor-pointer tracking-wider font-semibold bg-[#00a1ab] px-[1.6rem] py-[0.8rem] rounded-full hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out'>EXPLORE TREATMENTS</button>
                            <button className='text-white sm:text-[15px] text-[13px] cursor-pointer tracking-wider font-semibold bg-[#00a1ab] px-[1.6rem] py-[0.8rem] rounded-full hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out'>BOOK FREE CONSULTATION</button>
                            <button className='text-white sm:text-[15px] text-[13px] cursor-pointer tracking-wider font-semibold bg-[#00a1ab] px-[1.6rem] py-[0.8rem] rounded-full hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out'>CHAT WITH EXPERT</button>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
        

    )
}

export default Header