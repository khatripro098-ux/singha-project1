import { useEffect } from "react";


function Choose(){


    useEffect(()=>{

        const cards = document.querySelectorAll(".choose-card")

        let i = 0;

        function animate (){

            cards.forEach(card => card.classList.remove('animate'))
            cards[i].classList.add('animate')
            i = (i+1) % cards.length
        }

        animate();
        setInterval(animate,1500)
    },[])



    return(

        <div>
            <div className="bg-[#f5f5f5] pb-16">
            <div className=" relative flex flex-col items-center pt-35 justify-center] "
                    >
                <div className=' flex text-center w-[400px] justify-center cursor-pointer'>
                    <span
                        className={`absolute [top:83px] text-[23px]   lg:text-[32px] text-[#002c5f] font-bold `}
                    >
                        Why Choose God Life
                    </span>
                </div>
                <div className="bg-[#00a1ab] w-[70px] h-[3px] "></div>
                <p className="text-center text-[15px] text-[#777777] mt-[6px]">We are committed to providing the highest quality healthcare experience</p>
            </div>

            <div className="w-[90vw] flex p-5 m-auto justify-center  flex-wrap">
                <div className="choose-card mt-8 w-[260px] flex shadow-[0_0_15px_rgba(0,0,0,0.2)] p-7 text-center
                    rounded-xl flex-col items-center gap-3">
                    <i className="fas fa-user-md text-[40px] text-[#00a1ab]"></i>
                    <p className="font-bold text[17px] text-[#002c5f]">World-Class Doctors</p>
                    <p className="text-[15px] p-2">Our network includes internationally trained and experienced medical professional.</p>
                </div>

                <div className="choose-card mt-5 w-[260px] flex shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-xl text-center p-7 flex-col items-center gap-3">
                    <i className="fas fa-hand-holding-usd text-[40px] text-[#00a1ab]"></i>
                    <p className="font-bold text-[17px] text-[#002c5f]">Affordable Pricing</p>
                    <p className="text-[15px] p-2">High-quality treatments at 30-70% lower costs compared to Western countries.</p>
                </div>

                <div className="choose-card mt-5 w-[260px] flex shadow-[0_0_15px_rgba(0,0,0,0.2)] p-7 rounded-xl text-center flex-col items-center gap-3">
                    <i className="fas fa-notes-medical text-[40px] text-[#00a1ab]"></i>
                    <p className="font-bold text-[17px] text-[#002c5f]">Comprehensive Care</p>
                    <p className="text-[15px] p-2">End-to-end assistance from consultation to recovery and follow-up care.</p>
                </div>

                <div className="choose-card mt-5 w-[260px] flex shadow-[0_0_15px_rgba(0,0,0,0.2)] p-7 flex-col rounded-xl text-center items-center gap-3">
                    <i className="fas fa-globe text-[40px] text-[#00a1ab]"></i>
                    <p className="font-bold text-[17px] text-[#002c5f]">Global Destinations</p>
                    <p className="text-[15px] p-2">Access to premium healthcare facilities in world-renowned medical tourism destinations.</p>
                </div>
            </div>


        </div>

        <div className="flex items-center justify-center h-[110px] ">
                <div className=" bg-[#e0e0e0] w-[150vh] h-[1px]"></div>
            </div>
        </div>
    )
}

export default Choose;