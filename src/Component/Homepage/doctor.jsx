import { useState } from 'react';
import drPatel from '../../assets/doctor/dr patel.jpg'

function Doctor (){

    const[hover,setHovered] = useState(false)

    return(

        <div>
            <div className=" relative flex flex-col items-center mt-10 justify-center] "
                    >
                <div className=' flex text-center w-[400px] justify-center cursor-pointer' onMouseEnter={()=>setHovered(true)}
                    onMouseLeave={()=>setHovered(false)}>
                    <span
                        className={`absolute [top:-57px] text-[23px]   lg:text-[32px] text-[#002c5f] font-bold transition-opacity duration-500 ${hover ? 'opacity-0' : 'opacity-100'}`}
                    >
                        Our Partner Doctors
                    </span>
                    <span
                        className={`absolute [top:-57px] text-[25px]   lg:text-[32px] text-[#00a1ab] font-bold transition-opacity duration-500 ${hover ? 'opacity-100' : 'opacity-0'}`}
                    >
                        Explore More 
                    </span>
                </div>
                <div className="bg-[#00a1ab] w-[70px] h-[3px] "></div>
                <p className="text-center text-[15px] text-[#777777] mt-[6px]">World-renowned medical professionals</p>
            </div>

            <div className='flex mt-5 pb-20 p-5 px-3 gap-7 justify-center w-[90vw] flex-wrap m-auto'>
                <div className='cursor-pointer flex p-4 mt-5 rounded-xl px-[75px] shadow-[0_0_15px_rgba(0,0,0,0.2)] flex-col gap-3 items-center hover:scale-105 transition-all duration-400 group'>
                    <div className='w-[110px] h-[110px] rounded-full border-3
                            border-[#00a1ab] overflow-x-hidden'>
                        <img className='object-cover w-full h-full' src={drPatel} alt="" />
                    </div>
                    <p className='font-bold font-[18px] text-[#002c5f] group-hover:text-[#00a1ab] group-hover:underline '>Dr. Rajiv Patel</p>
                    <p className='font-semibold text-[13px] text-[#00a1ab]'>Orthopedic Surgeon</p>
                    <p className='text-sm text-[#777777] text-[13px]'>15+ Years of Experience</p>
                    <p className='text-sm italic text-[#777777] text-[13px]'>Asia Medical Center, Singapore</p>
                    <button className='cursor-pointer tracking-widest bg-[#00a1ab] text-white font-semibold text-[12px] py-3 px-5 rounded-full hover:-translate-y-1 transition-all duration-400 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]'>BOOK APOINTMENT</button>
                </div>

                <div className='cursor-pointer flex p-4 mt-5 rounded-xl px-[75px] shadow-[0_0_15px_rgba(0,0,0,0.2)] flex-col gap-3 items-center hover:scale-105 transition-all duration-400 group'>
                    <div className='w-[110px] h-[110px] rounded-full border-3
                            border-[#00a1ab] overflow-x-hidden'>
                        <img className='object-cover w-full h-full' src={drPatel} alt="" />
                    </div>
                    <p className='font-bold font-[18px] text-[#002c5f] group-hover:text-[#00a1ab] group-hover:underline '>Dr. Rajiv Patel</p>
                    <p className='font-semibold text-[13px] text-[#00a1ab]'>Orthopedic Surgeon</p>
                    <p className='text-sm text-[#777777] text-[13px]'>15+ Years of Experience</p>
                    <p className='text-sm italic text-[#777777] text-[13px]'>Asia Medical Center, Singapore</p>
                    <button className='cursor-pointer tracking-widest bg-[#00a1ab] text-white font-semibold text-[12px] py-3 px-5 rounded-full hover:-translate-y-1 transition-all duration-400 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]'>BOOK APOINTMENT</button>
                </div>

                <div className='cursor-pointer flex p-4 mt-5 rounded-xl px-[75px] shadow-[0_0_15px_rgba(0,0,0,0.2)] flex-col gap-3 items-center hover:scale-105 transition-all duration-400 group'>
                    <div className='w-[110px] h-[110px] rounded-full border-3
                            border-[#00a1ab] overflow-x-hidden'>
                        <img className='object-cover w-full h-full' src={drPatel} alt="" />
                    </div>
                    <p className='font-bold font-[18px] text-[#002c5f] group-hover:text-[#00a1ab] group-hover:underline '>Dr. Rajiv Patel</p>
                    <p className='font-semibold text-[13px] text-[#00a1ab]'>Orthopedic Surgeon</p>
                    <p className='text-sm text-[#777777] text-[13px]'>15+ Years of Experience</p>
                    <p className='text-sm italic text-[#777777] text-[13px]'>Asia Medical Center, Singapore</p>
                    <button className='cursor-pointer tracking-widest bg-[#00a1ab] text-white font-semibold text-[12px] py-3 px-5 rounded-full hover:-translate-y-1 transition-all duration-400 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]'>BOOK APOINTMENT</button>
                </div>

                
            </div>
            

            <div className="flex bg-[#fafafa] items-center justify-center h-[110px] ">
                <div className=" bg-[#e0e0e0] w-[70vw] h-[1px]"></div>
            </div>

        </div>
    )
}

export default Doctor;