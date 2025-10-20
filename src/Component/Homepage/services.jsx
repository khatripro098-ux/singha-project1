import { use, useEffect, useState } from "react"


function Service (){



    const serviceArray = [
        {icon :'fas fa-stethoscope' ,lable:'Medical Opinion'},
        {icon :'fas fa-headset', lable:'Pre-Travel Consoltation'},
        {icon :'fas fa-passport', lable:'Visa Assistance'},
        {icon :'fas fa-money-bill-wave', lable:'Money Exchange'},
        {icon :'fas fa-car', lable : 'Transportation'},
        {icon :'fas fa-hotel', lable : 'Accomodation'},
        {icon :'fas fa-hotel', lable : 'Accomodation'},
        {icon :'fas fa-hotel', lable : 'Accomodation'},
        {icon :'fas fa-hotel', lable : 'Accomodation'},
        {icon :'fas fa-hotel', lable : 'Accomodation'}

    ]


    const [rotation,setRotation] = useState(0);

    useEffect(()=>{

        let animationFrame;


        const animate=()=>{

        setRotation(prev=> prev+0.2)

        animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
    },[])

    return (

        <div className=" overflow-hidden">
            <div className="bg-[#f5f5f5]">
            <div className=" relative flex flex-col items-center pt-35 justify-center] "
                    >
                <div className=' flex text-center w-[400px] justify-center cursor-pointer'>
                    <span
                        className={`absolute [top:83px] text-[23px]   lg:text-[32px] text-[#002c5f] font-bold `}
                    >
                        Our Services
                    </span>
                </div>
                <div className="bg-[#00a1ab] w-[70px] h-[3px] "></div>
                <p className="text-center text-[15px] text-[#777777] mt-[6px]">Comprehensive support for your medical journey</p>
            </div>


            <div className="flex mt-30 pb-25 items-center justify-center h-140">
                <div 
                style={{
                    transform: `rotate(${rotation}deg)`
                }}
                className="relative w-[70vw] h-[70vw] lg:h-[40vw] lg:w-[40vw] md:h-[45vw] md:w-[45vw] rounded-full flex items-center justify-center border-2 h-10 rotate-360 transmission-all duration-500">
                    <div

                    style={{
                        transform:`rotate(-${rotation-9}deg) `
                    }}
                    className=" w-24 text-white bg-[#00a1ab] shadow-[0_0_0_10px_rgba(0,161,171,0.2)] h-24 rounded-full flex items-center justify-center">
                        Your Journey
                    </div>

                    {serviceArray.map((items,i)=>{

                        const angle = (360/serviceArray.length)*i

                        return(
                            <div key={i} 
                            
                            style={{
                                transform: `rotate(${angle}deg) translate(var(--radius)) rotate(-${angle}deg) `
                            }}

                            className="absolute top-1/2 left-1/2 z-1 bg-white -translate-x-1/2 rounded-full -translate-y-1/2 origin-center ittems">
                                <div

                                    style={{
                                        transform: `rotate(-${rotation-10}deg) `
                                    }}
                                
                                    className={`flex flex-col p-3 gap-1 h-24 w-24 rounded-full items-center
                                    justify-center text-center shadow-[0_0_15px_rgba(0,0,0,0.2)]`}>
                                <i className={`text-[#00a1ab]  ${items.icon}`}></i>
                                <p className="text-[13px] font-semibold ">{items.lable}</p>
                            </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            
        </div>
        <div className="flex items-center bg-[#fafafa] justify-center h-[110px] ">
                <div className=" bg-[#e0e0e0] w-[150vh] h-[1px]"></div>
            </div>
        </div>

            


    )
}

export default Service