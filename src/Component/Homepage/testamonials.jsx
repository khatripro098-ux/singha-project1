import { div, img } from "framer-motion/client";
import { use, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import youtubePlay from '../../assets/offer/youtubeplay.jpg'



function Testa(){

    const [index,setIndex] = useState(0);
    const [scaleIndex,setScale] = useState(0);
    const [video,setVideo] = useState(false)

    const location = useLocation();


    const testamonies = [
        {
            img : 'https://randomuser.me/api/portraits/women/42.jpg',
            text : '"The care I received was exceptional. The surgeons were highly skilled, and the hospital facilities were state-of-the-art. The recovery vacation package was the perfect way to recuperate."',
            name : "Ching Chang",
            care : "Cardiac Surgery Patient from China"
        },

        {
            img :'https://randomuser.me/api/portraits/women/32.jpg',
            text : '"I needed extensive dental work that was too expensive back home. Gods Life arranged everything beautifully - the treatment was top-notch, and I got to explore a beautiful country during my recovery."',
            name : 'Emma Williams',
            care : 'Dental Care Parient From Uk',

        },

        {
            img : "https://randomuser.me/api/portraits/women/47.jpg",
            text: '"A world-class experience! The staff were warm and welcoming. I felt taken care of from start to finish.. I highly recommend them."',
            name : "Aditi Sharma",
            care : "Cosmetic Surgery Pateint Form India"
        },

        {
            img : "https://randomuser.me/api/portraits/men/47.jpg",
            text: '"A world-class experience! The staff were warm and welcoming. I felt taken care of from start to finish.. I highly recommend them."',
            name : "Aditi Sharma",
            care : "Cosmetic Surgery Pateint Form India"
        }



        

    ]

    useEffect(()=>{

        const timer = setInterval (()=>{

            setScale(-1)
            setIndex(prev=> {
            const newIndex = (prev + 1) % testamonies.length 
                setTimeout(()=>{

                setScale(newIndex)

            },1000)

            return newIndex
        })
            

            

        },4000
        )

        return () => clearInterval(timer)



    },[testamonies.length])

    const handleClick = ()=>{

        setVideo(true)
    }
    

    return(

        <div>
            <div className=" relative flex flex-col items-center pt-35 justify-center] "
                    >
                <div className=' flex text-center w-[400px] justify-center cursor-pointer'>
                    <span
                        className={`absolute [top:83px] text-[23px]   lg:text-[32px] text-[#002c5f] font-bold `}
                    >
                        Patient Testamonies
                    </span>
                </div>
                <div className="bg-[#00a1ab] w-[70px] h-[3px] "></div>
                <p className="text-center text-[15px] text-[#777777] mt-[6px]">Hear from our patients who have experienced our exceptional healthcare services</p>
            </div>
            <div>
                <div className="relative h-[350px] mt-7 p-10  sm:w-[75vw] w-[90vw] overflow-x-hidden text-center flex items-center justify-center m-auto">
                {
                    testamonies.map((card, i)=>{

                        let className = ''

                        if(i === index)
                            className = "opacity-100 z-100 bg-white  translate-x-0"

                        else if(i === (index - 1 + testamonies.length)% testamonies.length)
                            className = 'opacity-50 scale-90 z-0 -translate-x-[100%]'

                        else if(i === (index + 1) % testamonies.length)
                            className = "opacity-50 scale-90 z-0 translate-x-[100%]"
                        else className = 'opacity-0 translate-x-[200%]'

                        let scale = (i === scaleIndex) ? "scale-120 z-10" : "scale-90"

                        
                        


                        return (
                    
                                <div onClick={handleClick} key={i} className={`

                                    
                                
                                absolute flex-shrink-0 flex w-[calc(70%-30px)] p-5 
                                shadow-[0_0_15px_rgba(0,0,0,0.2)] flex-col gap-3 items-center
                                rounded-md
                                ${scale}
                                ${className}
                                
                                    transition-transform duration-2000 ease-in-out
                                `}>
                                <div className="lg:h-18 lg:w-18 h-13 w-13  border-[#00a1ab] rounded-full border-2 overflow-hidden">
                                    <img className="object-fit" src={card.img} alt="" />
                                
                                {location.pathname === "/offer" && (
                                <div
                                    onClick={handleClick}
                                    className="absolute inset-0 top-[-21%] flex items-center justify-center cursor-pointer"
                                >
                                    <div className=" ">
                                        <img className="h-5 rounded-full " src={youtubePlay} alt="" />
                                    </div>
                                </div>

                                
                                )}

                                </div>

                                <p className="text-[#777777] italic lg:text-[13px] text-[10px] md:text-[12px] ">{card.text}</p>
                                <p className="text-[#002c5f] font-semibold lg:text-default text-[13px] md:text-[14px] ">{card.name}</p>
                                <p className="text-[#00a1ab] lg:text-sm text-[11px] md:text-[14px]  ">{card.care}</p>

                                                                

                            </div>
                        
                        )
                    })
                }

                
            </div>

                    {video && (
            <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center">
                <div className="relative w-[80vw] max-w-[800px] aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Patient Testimony"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                
                <button
                    onClick={() => setVideo(false)}
                    className="absolute top-2 right-2 bg-white/70 hover:bg-white text-black rounded-full px-3 py-1 font-bold text-sm"
                >
                    ✕
                </button>
                </div>
            </div>
            )}

            
            </div>

            <div className="flex items-center justify-center h-[110px] mt-5 ">
                <div className=" bg-[#e0e0e0] w-[70vw] h-[1px]"></div>
            </div>
        </div>
    )
}

export default Testa