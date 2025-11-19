import { useState } from "react"


function Faq () {


    const [open,setOpen] = useState(null)


    const toggleDrop = (index) =>{
        setOpen(index === open ? null : index)
    }
    const faq = [
        {
            question : 'What is medical tourism, and why do people travel abroad for medical treatments? ',
            answer : `
            Medical tourism is a global phenomenon whereby patients travel abroad looking for medical treatment. The reasons to travel vary from origin country of the patients but some common reasons are as follows:
Availability of medical care - Unfortunately, many underdeveloped/ developing countries lack tertiary care centers in their country and patients dont even have an option of getting treated in their home country
Better expertise abroad - A lot of patients have doctors available in their home country but unfortunately the infrastructure, latest equipments and experience of the doctors is so limited that patients don't want to risk their life and opt to travel abroad.
Affordable care - Many patients (uninsured in their home country) have expertise and healthcare available but the cost is prohibitive for getting treated locally and they save a lot of money (even after adding travel and stay expenses) by traveling abroad for treatment
Long waiting queue - Many Developed Countries which have public health systems which even offer quality care with best expertise for free of cost but patients may have to wait for weeks, months or sometimes years to access it. Many of these patients opt to travel and access healthcare faster.
Miscellaneous - Add medical procedure with tourism, privacy of not getting treated in their home country are some of the other reasons people opt to travel abroad.`        
        },
        {
            question : 'What are the visa and travel requirements for medical tourism in different countries?',
            answer : `
            Visa requirements for each country vary based on the origin country of the patient. Gods Life Health Care has created a dedicated tool for patients to check the requirements. Your case manager can also help you get all details related to your visa requirements and any medical visa invitation letter from your chosen healthcare service provider.`        
        }
    ]
    

    return(
        
        <div>
            <div className="bg-[#f5f5f5]">
        <div className=" relative flex flex-col items-center pt-35 justify-center] "
                    >
                <div className=' flex text-center w-[400px] justify-center cursor-pointer'>
                    <span
                        className={`absolute [top:83px] text-[23px]   lg:text-[32px] text-[#002c5f] font-bold `}
                    >
                        Frequently Asked Questions
                    </span>
                </div>
                <div className="bg-[#00a1ab] w-[70px] h-[3px] "></div>
                <p className="text-center text-[15px] text-[#777777] mt-[6px]">Find answers to common questions about medical tourism</p>
            </div>

            <div className=" w-[70vw] p-5 pb-20 m-auto mt-10 flex flex-col">

                {
                    faq.map ((items, index)=>{

                        return (
                            <div key={index}
                                onClick={()=>toggleDrop(index)}    className="flex cursor-pointer flex-col shadow-[0_0_15px_rgba(0,0,0,0.2)] mb-4  rounded-xl ">
                            <div className="flex justify-between p-5 items-center">
                                <p className="text-[#002c5f]  font-semibold">{items.question} </p>
                            <i className={` fas fa-chevron-down text-[#002c5f] transition-transform dutation-300 ease-in-out
                                        ${index === open ? 'rotate-180' : 'rotate-0' }`}></i>
                            </div>
                            {
                                index === open &&
                                <p className="p-5 font-light">{items.answer}</p>
                            }
                            </div>
                        )
                    })
                }

            </div>

            
        </div>

                <div className="flex items-center justify-center h-[110px] mt-5 ">
                <div className=" bg-[#e0e0e0] w-[150vh] h-[1px]"></div>
            </div>
    </div>
    )

}

export default Faq