import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import { useEffect, useMemo, useRef, useState } from "react";
import CountriesListFlag from 'react-flags-select'

function Consolt (){

    const data = useRef(null);

    const [selected,setSelected] = useState('us')


    useEffect(()=>{

        if(data.current){
            intlTelInput(data.current, {
                initialCountry:'us',
                separateDialCode:true,
                utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",

            })
        }


    },[])

    return(
        <div className="bg-[#f5f5f5]">
            <div className=" relative flex flex-col items-center pt-35 justify-center] "
                    >
                <div className=' flex text-center w-[400px] justify-center cursor-pointer'>
                    <span
                        className={`absolute [top:83px] text-[23px]   lg:text-[32px] text-[#002c5f] font-bold `}
                    >
                        Consult For Free
                    </span>
                </div>
                <div className="bg-[#00a1ab] w-[70px] h-[3px] "></div>
                <p className="text-center text-[15px] text-[#777777] mt-[6px]">Speak with our medical experts about your healthcare needs</p>
            </div>


            <div className=" w-[80vw] lg:w-[50vw] md:w-[60vw] m-auto p-4 pb-20 mt-15 justify-between items-center">

                <div className="flex flex-col shadow-[0_0_15px_rgba(0,0,0,0.2)] items-center rounded-xl flex-1 justify-center gap-2">
                    <p className="text-[#002c5f] font-bold leading-relaxed pt-10 ">Get Your Free Consultation</p>
                    
                    <form action="" className="flex flex-col w-full p-8 gap-5 rounded-xl">
                        <div className="flex flex-col flex-1 gap-2" >
                            <label className="text-[#002c5f]">Full Name</label>
                            <input className="border-1 p-2 rounded-md border-[#ddd]" type="text" />
                        </div>

                        <div className="flex flex-col flex-1 gap-2 " >
                            <label className="text-[#002c5f]">Select Country</label>
                            <CountriesListFlag

                            selected={selected}

                            onSelect = {(code)=>setSelected(code)}
                            searchable = {true}
                            
                            
                            
                            />

                        </div>

                        <div className="flex flex-col flex-1 gap-2 " >
                            <label className="text-[#002c5f]">Email Address</label>
                            <input className="border-1 p-2 rounded-md border-[#ddd]" type="text" />
                        </div>

                        <div className="flex flex-col flex-1 gap-2  " >
                            <label className="text-[#002c5f]">Phone Number</label>

                            <div className="flex border-[#ddd]">
                                <input ref={data} type="tel" name="" id=""className="p-2 sm:w-[20vw] w-[50vw] border-1 border-[#ddd] rounded-md" />
                            
                        </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-[#002c5f]">Your Concern or Treatment Interest</p>
                            <textarea className="border-1 border-[#ddd]" rows='5' name="" id=""></textarea>
                        </div>


                        <button className="tracking-wider bg-[#00a1ab] self-center text-[15px] px-4 text-white py-2 rounded-full
                            hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:-translate-y-[2px] transition-all duration-300 ">
                            SUBMIT
                        </button>

                    </form>
                </div>


                
            </div>
        </div>

    )
}

export default Consolt;