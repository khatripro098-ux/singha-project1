import { useEffect, useState } from 'react';

import compLogo from '../../assets/logo/compLogo.jpg'
import hamIcon from '../../assets/logo/hamIcon.png'

function Nav(){

    const [isOpen, SetisOpen] = useState(false);
    const [opacity,setOpacity] = useState(1)

    


    function Opennav (){

            SetisOpen(!isOpen)

    }
            

    
    useEffect(()=>{


        const video = document.getElementById('video-section')

        const transhead = ()=>{

            if(!video) return

            const rect = video.getBoundingClientRect()

            const videoHeight = rect.height;

            const scrollY = window.scrollY

            const start = 0;

            const end = videoHeight;

            const range = end;

            const ratio = Math.min(Math.max((scrollY- start)/ range,0),1);

            setOpacity (1-ratio)



        }


        window.addEventListener('scroll', transhead);
        return () => window.removeEventListener('scroll', transhead)

        



    },[])




    return(

        <div>
            
            <nav className=' fixed z-2 top-0 left-0 w-[100vw] 
            overflow-hidden bg-white flex justify-between  px-[6vw] lg:py-[0.8rem] md:py-[0.7rem] sm:py-[0.6rem] py-[0.6rem]  items-center'
                style={{opacity}}>
            <div className='flex items-center justify-between'>
                <img className='w-[2rem] lg:w-[4rem] sm:w-[2.5rem] rounded-full border-none cursor-pointer' src={compLogo} alt="" />
                <p className='mx-1 cursor-pointer'><strong className='text-[#002c5f] md:text-xl text-default'>Gods<span className='text-[#00a1ab] mx-1'>Life</span></strong></p>
            </div>
                <ul className='hidden lg:flex lg:ml-[7.5vw]  flex-1 justify-between items-center'>
                    <li className='text-[#002c5f] hover:text-[#00a1ab] transition duration-400 ease-in-out text-default font-medium'><a href=''>Home</a></li>
                    <li className='text-[#002c5f] hover:text-[#00a1ab] transition duration-400 ease-in-out text-default'><a href="">Services</a></li>
                    <li className="text-[#002c5f] hover:text-[#00a1ab] text-default transition duration-400 ease-in-out"><a href="#">Destinations</a></li>
                    <li className="text-[#002c5f] hover:text-[#00a1ab] text-default transition duration-400 ease-in-out"><a href="#">Doctors</a></li>
                    <li className="text-[#002c5f] hover:text-[#00a1ab] text-default transition duration-400 ease-in-out"><a href="#">Testimonials</a></li>
                    <li className="text-[#002c5f] hover:text-[#00a1ab] text-default transition duration-400 ease-in-out"><a href="#">About Us</a></li>
                    <li className="text-[#002c5f] hover:text-[#00a1ab] text-default transition duration-400 ease-in-out"><a href="#">Contact</a></li>
                    <li className="text-white bg-[#00a1ab] px-[1.6rem] py-[0.8rem] rounded-full hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] translation hover:-translate-y-1
                                transition duration-300 ease-in-out text-default">
                        <a className="tracking-wider font-semibold" href="#">GET CONSULTATION</a>
                    </li>
                </ul>

                <div className='lg:hidden'>
                    <button onClick={()=>Opennav()}>
                        <img className='h-7 w-6' src={hamIcon} alt="" />
                    </button>
                </div>
        </nav>
    
            
        
        <div className={`fixed top-0 right-0 h-full w-[70vw] md:w-[80vw] z-50 transform bg-[#002c5f] transition-transform duration-500
        overflow-y-auto scrollbar-thin 
        ${isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'} `}>

        <div className="flex justify-end mb-6">
        <i onClick={() => SetisOpen(false)} className="fas fa-times text-[#00a1ab] text-2xl cursor-pointer mr-8 mt-6"></i>
        </div>


        <div className="flex flex-col">
            <a
            href="#"
            className={`
            text-white font-bold text-xl text-center
            ${isOpen
            ? 'translate-y-0 opacity-100 transition-all duration-700 ease-out [transition-delay:0ms]'
            : '-translate-y-4 opacity-0 transition-all duration-500 ease-in'}
            `}
            >
            <div
            className="
            
            transition-transform duration-300 ease-in-out
            hover:-translate-y-1 hover:bg-[#00a1ab] 
            hover : p-4
            "
            >
            Home
            </div>
            </a>


            <a
            href="#"
            className={`
            text-white font-bold text-xl text-center
            ${isOpen
            ? 'translate-y-0 opacity-100 transition-all duration-700 ease-out [transition-delay:100ms]'
            : '-translate-y-4 opacity-0 transition-all duration-500 ease-in'}
            `}
            >
            <div
            className="
            
            transition-transform duration-300 ease-in-out
            hover:-translate-y-1 hover:bg-[#00a1ab] 
            hover : p-4
            "
            >
            Services
            </div>
            </a>
            <a
            href="#"
            className={`
            text-white font-bold text-xl text-center
            ${isOpen
            ? 'translate-y-0 opacity-100 transition-all duration-700 ease-out [transition-delay:200ms]'
            : '-translate-y-4 opacity-0 transition-all duration-500 ease-in'}
            `}
            >
            <div
            className="
            
            transition-transform duration-300 ease-in-out
            hover:-translate-y-1 hover:bg-[#00a1ab] 
            hover : p-4
            "
            >
            Destinations
            </div>
            </a>
            
        
            <a
            href="#"
            className={`
            text-white font-bold text-xl text-center
            ${isOpen
            ? 'translate-y-0 opacity-100 transition-all duration-700 ease-out [transition-delay:300ms]'
            : '-translate-y-4 opacity-0 transition-all duration-500 ease-in'}
            `}
            >
            <div
            className="
            
            transition-transform duration-300 ease-in-out
            hover:-translate-y-1 hover:bg-[#00a1ab] 
            hover : p-4
            "
            >
            Doctors
            </div>
            </a>

            <a
            href="#"
            className={`
            text-white font-bold text-xl text-center
            ${isOpen
            ? 'translate-y-0 opacity-100 transition-all duration-700 ease-out [transition-delay:400ms]'
            : '-translate-y-4 opacity-0 transition-all duration-500 ease-in'}
            `}
            >
            <div
            className="
            
            transition-transform duration-300 ease-in-out
            hover:-translate-y-1 hover:bg-[#00a1ab] 
            hover : p-4
            "
            >
            Testimonials
            </div>
            </a>

            <a
            href="#"
            className={`
            text-white font-bold text-xl text-center
            ${isOpen
            ? 'translate-y-0 opacity-100 transition-all duration-700 ease-out [transition-delay:500ms]'
            : '-translate-y-4 opacity-0 transition-all duration-500 ease-in'}
            `}
            >
            <div
            className="
            
            transition-transform duration-300 ease-in-out
            hover:-translate-y-1 hover:bg-[#00a1ab] 
            hover : p-4
            "
            >
            About Us
            </div>
            </a>
            <a
            href="#"
            className={`
            text-white font-bold text-xl text-center
            ${isOpen
            ? 'translate-y-0 opacity-100 transition-all duration-700 ease-out [transition-delay:600ms]'
            : '-translate-y-4 opacity-0 transition-all duration-500 ease-in'}
            `}
            >
            <div
            className="
            
            transition-transform duration-300 ease-in-out
            hover:-translate-y-1 hover:bg-[#00a1ab] 
            hover : p-4
            "
            >
            Contact
            </div>
            </a>

<a
            href="#"
            className={`
            text-white font-bold text-xl text-center
            ${isOpen
            ? 'translate-y-0 opacity-100 transition-all duration-700 ease-out [transition-delay:700ms]'
            : '-translate-y-4 opacity-0 transition-all duration-500 ease-in'}
            `}
            >
            <div
            className="
            
            transition-transform duration-300 ease-in-out
            hover:-translate-y-1 hover:bg-[#00a1ab] 
            hover : p-4
            "
            >
            Get Consultation
            </div>
            </a>
        </div>

        

        </div>
</div>

        
            
        

            

    )
}

export default Nav;