
import { useState } from "react"
import compLogo from '../../assets/logo/compLogo.jpg'


function Cost () {

    const treatmentCost = {
    "kneeReplacement": [
    {
        "country": "United States",
        "price": "$50,000",
        "items": ["Knee Replacement Surgery", "5 Days Hospital Stay", "Physical Therapy (2 weeks)", "Medications"]
    },
    {
        "country": "United Kingdom",
        "price": "$35,000",
        "items": ["Knee Replacement Surgery", "5 Days Hospital Stay", "Physical Therapy (2 weeks)", "Medications"]
    },
    {
        "country": "Through Gods Life",
        "price": "$15,000",
        "items": ["Knee Replacement Surgery", "5 Days Hospital Stay", "Physical Therapy (2 weeks)", "Medications", "Travel & Accommodation", "24/7 Support"]
    }
    ],

    "dentalImplant": [
    {
        "country": "United States",
        "price": "$4,000",
        "items": ["Single Dental Implant", "1 Day Procedure", "Follow-Up Visit", "Medications"]
    },
    {
        "country": "India",
        "price": "$800",
        "items": ["Single Dental Implant", "1 Day Procedure", "Follow-Up Visit", "Medications", "Travel & Accommodation"]
    },
    {
        "country": "Through Gods Life",
        "price": "$700",
        "items": ["Single Dental Implant", "1 Day Procedure", "Follow-Up Visit", "Travel & Accommodation", "24/7 Support"]
    }
    ],

    "heartBypass": [
    {
        "country": "United States",
        "price": "$120,000",
        "items": ["Heart Bypass Surgery", "7 Days Hospital Stay", "ICU Stay", "Medications"]
    },
    {
        "country": "Germany",
        "price": "$70,000",
        "items": ["Heart Bypass Surgery", "7 Days Hospital Stay", "ICU Stay", "Medications"]
    },
    {
        "country": "Through Gods Life",
        "price": "$30,000",
        "items": ["Heart Bypass Surgery", "7 Days Hospital Stay", "ICU Stay", "Travel & Accommodation", "24/7 Support"]
    }
    ],

    "cataractSurgery": [
    {
        "country": "United States",
        "price": "$3,500",
        "items": ["Cataract Surgery", "1 Day Procedure", "Follow-Up Visit", "Medications"]
    },
    {
        "country": "India",
        "price": "$600",
        "items": ["Cataract Surgery", "1 Day Procedure", "Follow-Up Visit", "Medications", "Travel & Accommodation"]
    },
    {
        "country": "Through Gods Life",
        "price": "$500",
        "items": ["Cataract Surgery", "1 Day Procedure", "Follow-Up Visit", "Travel & Accommodation", "24/7 Support"]
    }
    ],

    "dentalCleaning": [
    {
        "country": "United States",
        "price": "$200",
        "items": ["Routine Dental Cleaning", "1 Day Procedure"]
    },
    {
        "country": "Thailand",
        "price": "$50",
        "items": ["Routine Dental Cleaning", "1 Day Procedure", "Travel & Accommodation"]
    },
    {
        "country": "Through Gods Life",
        "price": "$40",
        "items": ["Routine Dental Cleaning", "1 Day Procedure", "Travel & Accommodation", "24/7 Support"]
    }
    ]
}

    const [searchText,setSearchText] = useState("kneeReplacement")

    const [search,setSearch] = useState('')

    const searched = Object.keys(treatmentCost).find((key)=>
        key.toLowerCase().includes(search.toLowerCase())
    )

    const activate = searched || searchText





    return(
        <div>
            <div className=" relative flex flex-col items-center pt-35 justify-center] "
                    >
                <div className=' flex text-center w-[400px] justify-center cursor-pointer'>
                    <span
                        className={`absolute [top:83px] text-[23px]   lg:text-[32px] text-[#002c5f] font-bold `}
                    >
                        Cost Analysis
                    </span>
                </div>
                <div className="bg-[#00a1ab] w-[70px] h-[3px] "></div>
                <p className="text-center text-[15px] text-[#777777] mt-[6px]">Compare treatment costs between countries</p>
            </div>

            <div className="flex items-center justify-center p-3 ">
                <input type="text" className="rounded-full mt-3  w-[65vw] p-3 border-2 outline-none border-[#002c5f]" 
                placeholder="Search For Treatment"
                onChange={e=> setSearch(e.target.value)}/>
            </div>

            <div className="w-[95vw] m-auto ">
                <div key={searchText} className="flex flex-wrap gap-7 justify-center p-5 pt-2" >
                    
                    { treatmentCost[activate].map((treatmentName ,index)=>{
                        
                        return (
                            <div key={index} className="flex flex-col gap-2 shadow-[0_0_15px_rgba(0,0,0,0.2)] mt-5 p-7 pb-2 rounded-xl sm:w-[280px] 
                                w-[280px]">
                                <div className="relative flex flex-col gap-4 items-center justify-center">
                                    {
                                        treatmentName.country === "Through Gods Life" && (
                                            <img className={`rounded-full h-8 [top:-4px] [left:-1px] absolute`} src={compLogo} alt="" />
                                        )}

                                    <h3 className="text-[#002c5f] font-bold leading-relaxed">{treatmentName.country}</h3>
                                    <h1 className="text-[#00a1ab] font-bold mb-2 text-3xl leading-relaxed">{treatmentName.price}</h1>
                                </div>
                                
                                    {treatmentName.items.map((item,index)=>{
                                        return(
                                            <div key={index} className="flex gap-2 items-center">
                                                <i className="fas fa-check text-[#00a1ab] text-[13px]"></i>
                                                <p className="text-[#777777]">{item}</p>
                                            </div>

                                        )
                                    })}
                                    {
                                        treatmentName.country === "Through Gods Life" && (

                                            <button className='cursor-pointer mt-3 self-center text-sm tracking-wider text-white
                                        bg-[#13a5a5] px-[25px] py-[12px] rounded-[15px] 
                                        hover:shadow-xl hover:-translate-y-1 hover:text-[#13a5a5] 
                                        hover:bg-[#156a6a27]  transition-all duration-400  '>
                                        GET QUOTE</button>
                                            
                                        )
                                                    
                                    }
                        

                            </div>
                        )
                }) }
                </div>
            </div>

            <div className="flex items-center justify-center h-[110px] mt-5 ">
                <div className=" bg-[#e0e0e0] w-[70vw] h-[1px]"></div>
            </div>
        </div>
    )
}

export default Cost