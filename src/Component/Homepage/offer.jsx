import { useState } from "react";

import {Link} from 'react-router-dom'

function Offer (){

    const [hover,setHovered] = useState(null)

    return(
        <div>
            <div className=" relative flex flex-col items-center mt-30  justify-center] "
                    >
                <div className=' flex text-center w-[400px] justify-center cursor-pointer' onMouseEnter={()=>setHovered(true)}
                    onMouseLeave={()=>setHovered(false)}>
                    <Link to='/offer' className={`absolute w-[300px] [top:-57px]`}> 
                    <span
                        className={` absolute text-[23px] [left:0px] [right:0px]  lg:text-[32px] text-[#002c5f] font-bold transition-opacity duration-500 ${hover ? 'opacity-0' : 'opacity-100'}`}
                    >
                        What We Offer
                    </span>
                    <span
                        className={` absolute  text-[25px] [left:0px] [right:0px] lg:text-[32px] text-[#00a1ab] font-bold transition-opacity duration-500 ${hover ? 'opacity-100' : 'opacity-0'}`}
                    >
                        Explore More 
                    </span>
                    </Link>
                </div>
                <div className="bg-[#00a1ab] w-[70px] h-[3px] mb-[6px]"></div>
                <p className=" text-center text-[15px] text-[#777777]">Comprehensive medical tourism services for international patients</p>
            </div>

            <div className="flex mt-[50px] gap-7 flex-wrap items-center justify-center">

                <div className="flex flex-col cursor-pointer lg:w-[330px] md:w-[310px] sm:-[290px] w-[280px]
                    items-center px-5 py-10 rounded-xl 
                    text-center shadow-[0_0_15px_rgba(0,0,0,0.2)] gap-[24px]
                    hover:-translate-y-3 transition duration-300 ">
                    <i className="text-[50px] text-[#00a1ab] fa-solid fa-bed-pulse service-icon"></i>
                    <h1 className="text-[#002c5f] text-[22px]"><strong>Medical Treatments</strong></h1>
                    <p className="text-[#777777] max-w-[330px] leading-relaxed">Access to world-class medical procedures across various specialties with top doctors.</p>
                    <button className=' mt-auto cursor-pointer text-sm tracking-wider text-white
                                bg-[#13a5a5] px-[25px] py-[12px] rounded-[15px] 
                                hover:shadow-xl hover:-translate-y-1 hover:text-[#13a5a5] 
                                hover:bg-[#156a6a27]  transition-all duration-400  '>
                                    GET QUOTE</button>
                </div>

                
                <div className="flex flex-col cursor-pointer
                    items-center py-10 px-5 rounded-xl lg:w-[330px] md:w-[310px] sm:-[290px] w-[280px]
                    text-center shadow-[0_0_15px_rgba(0,0,0,0.2)] gap-[24px]
                    hover:-translate-y-3 transition duration-300 ">
                    <i className="text-[50px] text-[#00a1ab] fa-solid fa-plane service-icon"></i>
                    <h1 className="text-[#002c5f] text-[22px]"><strong>Travel Arrangements</strong></h1>
                    <p className="text-[#777777] max-w-[330px] leading-relaxed">Seamless travel planning including flights, accommodation, and local transportation.</p>
                    <button className='cursor-pointer mt-auto text-sm tracking-wider text-white
                                bg-[#13a5a5] px-[25px] py-[12px] rounded-[15px] 
                                hover:shadow-xl hover:-translate-y-1 hover:text-[#13a5a5] 
                                hover:bg-[#156a6a27]  transition-all duration-400  '>
                                    GET QUOTE</button>
                </div>
            
                <div className="flex flex-col cursor-pointer 
                    items-center  py-13 px-5 rounded-xl lg:w-[330px] md:w-[310px] sm:-[290px] w-[280px]
                    text-center shadow-[0_0_15px_rgba(0,0,0,0.2)] gap-[24px]
                    hover:-translate-y-3 transition duration-300 ">
                    <i className="text-[50px] text-[#00a1ab] fa-solid fa-hand-holding-heart service-icon"></i>
                    <h1 className="text-[#002c5f] text-[22px]"><strong>Complete Care</strong></h1>
                    <p className="text-[#777777] max-w-[330px] leading-relaxed">End-to-end assistance from consultation to recovery and follow-up care.</p>
                    <button className='cursor-pointer mt-auto text-sm tracking-wider text-white
                                bg-[#13a5a5] px-[25px] py-[12px] rounded-[15px] 
                                hover:shadow-xl hover:-translate-y-1 hover:text-[#13a5a5] 
                                hover:bg-[#156a6a27]  transition-all duration-400  '>
                                    GET QUOTE</button>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="mt-35 bg-[#e0e0e0] w-[70vw] h-[1px] mb-[53px]"></div>
            </div>

            
        </div>

        
    )
}

export default Offer;