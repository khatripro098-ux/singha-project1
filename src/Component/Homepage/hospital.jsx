import { useState } from "react"
import {Link} from 'react-router-dom'
import golbalImg from '../../assets/hospital/artemis.webp'



function Hospital() {

    const hospitalData= [
        {
            img: golbalImg,
            hospitalName: "Global Health Institute",
            location : "Thailand, Bankok",
            items : ['Cardio surgery', 'orthopedics','Oncology']
        },

        {
            img: golbalImg,
            hospitalName: "American Institute",
            location : "America, Florida",
            items : ['Cardio surgery', 'orthopedics','Oncology']
        },
        {
            img: golbalImg,
            hospitalName: "Indian Institute",
            location : "India, Delhi",
            items : ['Cardio surgery', 'orthopedics','Oncology']
        }
    ]

    const[hover,setHovered] = useState(false)

    return(
        <div>
            <div className="py-20">
            <div className=" relative flex flex-col items-center mt-30  justify-center] "
                    >
                <div className=' flex text-center w-[400px] justify-center cursor-pointer' onMouseEnter={()=>setHovered(true)}
                    onMouseLeave={()=>setHovered(false)}>
                    <Link to='/hospital' className={`absolute w-[350px] [top:-57px]`}> 
                    <span
                        className={` absolute text-[23px] [left:0px] [right:0px]  lg:text-[32px] text-[#002c5f] font-bold transition-opacity duration-500 ${hover ? 'opacity-0' : 'opacity-100'}`}
                    >
                        Our Partner Hospitals
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

            <div className="flex items-center mb-20 gap-5 justify-center flex-wrap w-[90vw] mt-8 m-auto px-10">
            
            {
            hospitalData.map((data,i)=>(

                <div key={i} className="cursor-pointer gap-1 mt-5 flex rounded-xl flex-col shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:scale-105 
                        transition-all duration-400 group"
                        style={
                    {
                        backgroundColor:'rgba(100, 146, 175, 0.1)',
                    }
                }>
                <div className="relative text-white lg:w-[330px] md:w-[310px] sm:-[290px] w-[280px]">
                    <img className="w-85 h-45 rounded-md" src={golbalImg} alt="" />
                    <div className="absolute top-29 left-0 w-full p-2 bg-gradient-to-b from-transparent to-black/50">
                        <p className="text-[18px] font-bold 
                        group-hover:underline transition-all duration-300">{data.hospitalName}</p>
                        <div className="flex gap-1 items-center">
                            <i className="fa fa-location-dot text-[#00a1ab]"></i>
                            <p className="text-[13px]">{data.location}</p>
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <ul className="flex flex-col gap-2 text-[#777777] text-sm">
                    {
                        data.items.map((it,i)=>(
                            <li key={i} className="text-[13px]"><span className="fa fa-check text-[#00a1ab] text-[13px] mr-2 text-[5px]"></span>{it}</li>
                        ))
                    }
                    
                </ul>
                </div>
            </div>
            ))
            }

            
            
        </div>

        <div className="flex bg-[#fafafa] items-center justify-center h-[110px] ">
                <div className=" bg-[#e0e0e0] w-[70vw] h-[1px]"></div>
            </div>

        </div>
        </div>
    )
}

export default Hospital