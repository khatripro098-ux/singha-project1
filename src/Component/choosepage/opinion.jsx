
import Opinionimg from '../../assets/offer/opinion.jpg'
import Treatmentimg from '../../assets/offer/treatmentimg.jpg'
import Doctorsimg from '../../assets/offer/doctor.jpg'
import Equipmentimg from '../../assets/offer/equipment.jpg'
import Visaimg from '../../assets/offer/visa.jpg'
import { useEffect, useRef, useState } from 'react';
import { div, h1 } from 'framer-motion/client'


function Opinion (){

    const services = [
        {
        head :'Get Expert Opinion' ,
        para :"Get the best opinions and guidance from our team of professional doctors and experienced healthcare staff. Our experts are committed to providing accurate, personalized, and reliable advice to ensure your health and well-being are always prioritized. With a combination of medical expertise, advanced knowledge, and compassionate care, we help you make informed decisions for a healthier life.",
        img : Opinionimg,

            
        },
        {
        head: 'Speciality Treatment',
        para: 'Access world-class medical treatments from specialists in every major field. We connect you to hospitals that provide advanced care, ensuring accurate diagnosis and the right course of treatment for your specific needs.',
        img: Treatmentimg,
        },
        {
        head: 'Experienced Doctors',
        para: 'Our network of experienced and internationally certified doctors guarantees the highest quality of medical care. Each professional is dedicated to providing compassionate and effective treatment tailored to each patient.',
        img: Doctorsimg,
        },
        {
        head: 'New and Improved Equipment',
        para: 'We ensure our partnered hospitals are equipped with cutting-edge technology and modern medical equipment for precise diagnosis and advanced treatment procedures.',
        img: Equipmentimg,
        },
        {
        head: 'Visa Assistance',
        para: 'Our team assists patients and their families in acquiring medical visas quickly and smoothly, ensuring a stress-free journey for your healthcare needs.',
        img: Visaimg,
        },

    ]

    const country = [
        {
        name: 'United States',
        details: 'The US offers top-tier healthcare institutions and streamlined medical visa support for international patients.',
        },
        {
        name: 'United Kingdom',
        details: 'The UK provides world-renowned specialists and hospitals with smooth visa processing for overseas patients.',
        },
        {
        name: 'Singapore',
        details: 'Singapore is known for its clean medical facilities, quick visa approvals, and advanced treatment technology.',
        },
        {
        name: 'Thailand',
        details: 'Thailand combines affordability with high-quality medical care and easy visa options for medical travelers.',
        },
        {
        name: 'India',
        details: 'India is a popular choice for affordable and advanced medical treatments, with quick e-medical visa facilities.',
        },
        {
        name: 'China',
        details: 'China offers innovative treatments, modern hospital systems, and medical visa assistance for global patients.',
        },
    ]

    const [visible,setVisible] = useState([]);
    const refs = useRef([]);

    const [open,setopen] = useState(false);
    const [countryClicked,setcountryClicked] = useState(null)

    const setcountryClickedFun = (index)=>{
        setcountryClicked(prev => prev === index ? null : index)
    }

    const visaClicked = ()=>{
        setopen(!open)
    }

    useEffect(()=>{
        const observer = new IntersectionObserver (
            (entries)=>{

                entries.forEach((entry)=>{
                    const index = parseInt(entry.target.dataset.index)
                    if (entry.isIntersecting){
                        setVisible((prev)=>
                            prev.includes(index) ? prev : [...prev,index]
                        )
                    } else {
                        setVisible((prev)=> prev.filter(i=> i !== index))
                    }
                })

        
        },{threshold:0.3})

        refs.current.forEach((ref)=> ref && observer.observe(ref));
        return()=> observer.disconnect();
    },[])




    return(

        <div className=' mb-20'>
            {services.map((items,i)=>{
                return (
                    <div  key={i} 
                    data-index ={i}
                        ref={(el)=> refs.current[i]=el}>

                        <div
                        className='w-[85vw] p-6 m-auto mt-20 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.2)] overflow-x-hidden'>
                        <div  className="  flex gap-10"  onClick={items.head === 'Visa Assistance' ?
                                        visaClicked : undefined
                        }>
                        <div className=" flex flex-col gap-4 justify-center items-center text-center w-[70vw] ">
                            <h1 className="font-bold text-[25px]  text-[#002c5f]">{items.head}</h1>
                            <p className={`text-[#777777] transform transition-all duration-1000
                        ${
                            visible.includes(i) ?
                            'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px]'
                        }`}>
                    {items.para}
                </p>
            </div>

            <div className={`transform transition-all duration-1000 ${visible.includes(i) ?
                'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'
            }`}>
                <img className="w-[300px] h-[200px] rounded-2xl" src={items.img} alt="" />
            </div>

            
        </div>

        

                    {  (items.head.includes('Visa Assistance')) &&
                
                open  &&
                (
                    
                    <div className=' flex w-[80vw] mt-5 m-auto relative flex-col  '>
                        <div className=' h-[2px] ml-30 bg-[#0077b6] mb-5 w-[60vw]'>
            
                        </div>
                    <div className='flex  justify-center flex-wrap gap-6 bg-[#002c5f]'>
                        {
                        country.map((items,index)=>(
                        <div key={index} onClick={()=>setcountryClickedFun(index)}
                        className=' py-8 flex  gap-12 justify-center mt-3 '>
                        
                            
                                <div className='  z-[100] flex  bg-[#00a1ab] px-2 py-4 min-w-[120px] rounded-xl justify-center'>
                                {items.name}
                            </div>
                        

                            
                    </div>
                    )
                    )
                    }
                    </div>
                    
                                {countryClicked !== null && (
                                    <div className='text-center  bg-white z-[10] shadow-[0_0_15px_rgba(0,0,0,0.2)] p-5  justify-center items-center'>
                                        {country[countryClicked].details}
                                    </div>
                                )}
                            

                    

                    
                    
                </div>
                )
            }
            </div>




            

            <div className="flex items-center justify-center h-[110px] mt-15 ">
                <div className=" bg-[#e0e0e0] w-[70vw] h-[1px]"></div>
            </div>
                    </div>
            
                    
                )
            })}
        </div>

    )
}

export default Opinion;