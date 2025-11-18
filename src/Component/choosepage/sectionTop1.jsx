import Footer from "../Homepage/footer";
import Header from '../../assets/offer/backgroundpage2.jpg'
import { useEffect, useState } from "react";




function TopSection(){

    const service = [

        "Medical Opinion From Professionals",
        "Speciality Treatment",
        "Experienced Doctors",
        "New And Improved Equipments For Treatment",
        'Visa Assistance'

    ]

    const [animation, setAnimation] = useState(-1)



    useEffect(()=>{

            let i = 0
            setInterval(()=>{
                setAnimation(i);
                i = (i+1)% service.length
            }, 2000)
        
    },[])

    return(
        <div >
                <div className="relative  mt-[65px] lg:mt-[92px]">

                    <img className=" w-[100vw] object-cover h-[30rem]" src={Header} alt="" />
                    <div>
                        <div className="absolute  inset-0 
                        ">

                            <div className="w-[90vw] m-auto  mt-15 ">
                                <div className="relative ">

                                <svg
                            className=" absolute inset-0 lg:top-[-59px] md:top-[-60px] top-[-39px] lg:left-[25%] left-[10%] lg:w-[72vw] w-[86vw] lg:h-[20vw] h-[30vw] md:h-[20vw] sm:h-[24vw]  rotate-180"
                            viewBox="0 0 1440 320"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            
                            <path
                                fill="#14467eff "   
                                d="M0,0 C0,200 1080,40 1440,340 L1440,320 L0,3200 Z"
                            />
                            </svg>
                            <div className="relative font-bold flex justify-center text-[#20d5e2ff]  text-center lg:mb-9 lg:ml-[28vw] md:ml-[20vw] sm:ml-[20vw]  md:mt-[30px] mt-[-20px]  lg:text-[40px] md:text-[35px]   sm:text-[30px] text-[29px]">
                                What We Offer
                                </div>
                                

                                </div>
                            
                            
                            

                            { service.map((service,i)=>(
                                <div key={i} className="relative flex  gap-2 lg:mt-5 mt-8  items-center font-bold lg:ml-[30vw] md:ml-[60vh] sm:ml-[30vw] ml-[-10px]  lg:pl-17 pl-10 ">
                                    <div>
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill='none'
                                        stroke={i === animation ? "#00a1ab" : "#002c5f"}
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        
                                        className="lg:w-6 lg:h-6 w-6 h-5 ml-2  "
                                        >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                        <div className={` lg:text-[25px] md:text-[20px] sm:text-[18px]  transition-all duration-700 ${i === animation ? 'opacity-100 scale-105 text-[#00a1ab] ' : 'opacity-70 scale-100 text-[#002c5f]' }`}>
                                            {service}
                                        </div>
                                </div>
                            ))}
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center h-[110px] mt-5 ">
                <div className=" bg-[#e0e0e0] w-[70vw] h-[1px]"></div>
                </div>
        </div>
    )
}

export default TopSection