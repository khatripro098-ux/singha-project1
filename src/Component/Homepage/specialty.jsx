import { useEffect, useRef, useState } from 'react';
import heartPic from '../../assets/organs/heart.jpg'
import { Link } from 'react-router-dom';

function Specialty (){

    const specAni = useRef(null);

    const [hover, setHovered] = useState(false);

    const treatments = [
    {
    title: 'Cardiac Surgery',
    cost: '$8,500',
    img: heartPic,
    details: [
        'Bypass surgery and valve replacement',
        'World-renowned cardiac surgeons',
        'State-of-the-art facilities',
    ],
    },
    {
    title: 'Orthopedic Surgery',
    cost: '$6,200',
    img: heartPic,
    details: [
        'Joint replacements',
        'Minimally invasive techniques',
        'Expert rehabilitation programs',
    ],
    },
    {
    title: 'Cosmetic Surgery',
    cost: '$4,000',
    img: heartPic,
    details: [
        'Facelift and body contouring',
        'Certified cosmetic surgeons',
        'Advanced equipment and care',
    ],
    },
    {
    title: 'Neurosurgery',
    cost: '$9,500',
    img: heartPic,
    details: [
        'Brain tumor removal',
        'Highly experienced neurosurgeons',
        'Cutting-edge medical facilities',
    ],
    },
    {
    title: 'Dental Implants',
    cost: '$1,200',
    img: heartPic,
    details: [
        'High-quality implant systems',
        'Cosmetic & functional restoration',
        'Painless procedures',
    ],
    },
    {
    title: 'Eye Surgery',
    cost: '$1,800',
    img: heartPic,
    details: [
        'Cataract & LASIK treatments',
        'Laser-assisted precision',
        'Experienced ophthalmologists',
    ],
    },
];


    useEffect(()=>{

        const container = specAni.current;
        let scrollSpeed = 0
        let direction = 1
        let startStopFrame

        const scroll=()=>{
            if(container){
                
                scrollSpeed += direction 
                container.scrollLeft = scrollSpeed
                

                if(scrollSpeed >= container.scrollWidth - container.clientWidth || scrollSpeed <= 0 ){
                    direction *= -1
                }
                startStopFrame = requestAnimationFrame(scroll)

                
            }

        }

        const stopScroll = ()=>{

            cancelAnimationFrame(startStopFrame)
        }

    scroll();

    container.addEventListener('mouseenter', ()=> cancelAnimationFrame(startStopFrame));
    container.addEventListener('mouseleave', scroll);

    return () => {
        cancelAnimationFrame(startStopFrame);
        container.removeEventListener('mouseenter', stopScroll);
        container.removeEventListener('mouseleave', scroll);
    };

    },[])









    return(
        <div>
            <div className='bg-[#f5f5f5] py-20'>
            <div className=" relative flex flex-col items-center mt-10 justify-center] "
                    >
                <Link to = "/treatment">
                <div className=' flex text-center w-[400px] justify-center cursor-pointer' onMouseEnter={()=>setHovered(true)}
                    onMouseLeave={()=>setHovered(false)}>
                    <span
                        className={`absolute [top:-57px] text-[23px]   lg:text-[32px] text-[#002c5f] font-bold transition-opacity duration-500 ${hover ? 'opacity-0' : 'opacity-100'}`}
                    >
                        Specialty Treatments
                    </span>
                    <span
                        className={`absolute [top:-57px] text-[25px]   lg:text-[32px] text-[#00a1ab] font-bold transition-opacity duration-500 ${hover ? 'opacity-100' : 'opacity-0'}`}
                    >
                        Explore More 
                    </span>
                </div>
                </Link>
                <div className="bg-[#00a1ab] w-[70px] h-[3px] mb-[6px]"></div>
                <p className="text-center text-[15px] text-[#777777]">Explore our world-class medical procedures at affordable costs</p>
            </div>

            <div className='w-[90vw]   m-auto' 
                style={{ 
                            boxShadow: 
                                `
                                0 0 35px rgba(100,0,0,0.2),
                                inset 5px 0 35px rgba(0,0,0,0.2)
                                `,
                            
                            
                            borderRadius: '8px',
                        }}>
                <div  ref={specAni} 
                    className=" w-[89vw] mt-15 m-auto py-4  leading-relaxed overflow-x-auto no-scrollbar"
                    
                    >
                <div className='flex gap-3  flex-nowrap'>
                    {treatments.map((item, index)=>(

                        <div key={index} className="cursor-pointer border-1 border-[#6492af19] max-w-[255px] min-w-[255px] rounded-md bg-[#6492af19]
                        hover:border-1 hover:border-[#00a1ab] 
                        hover:-translate-y-1 transition-all duration-300 ">
                        <img src={item.img} className='h-[169px] rounded-sm' alt="" />
                        <div className='flex flex-col gap-3 h-[60%] p-2 items-start'>
                            <h1 className="text-[#002c5f] pl-1 text-[17px]"><strong>{item.title}</strong></h1>
                            <p className="text-[#00a1ab] pl-1 font-semibold text-[14px]">Avg. Cost:{item.cost}</p>

                            <ul className="list-disc pl-[18px] marker:text-[#00a1ab] flex flex-col gap-1 ">
                                {item.details.map(
                                    (details, index)=>(
                                    <li className='text-[#777777] text-[15px] font-light'>{details}</li>
                                )
                                )}
                            </ul>

                            <button className='self-center  mt-auto text-sm tracking-wider text-white
                                bg-[#13a5a5] px-[25px] py-[12px] rounded-[15px] 
                                hover:shadow-xl hover:-translate-y-1 hover:text-[#13a5a5] 
                                hover:bg-[#156a6a27]  transition-all duration-400  '>
                                    GET QUOTE</button>

                            
                        </div>

                        
                            
                        

                        
                    </div>

                    

                    
                    ))}
                    
                </div>
            </div>
            </div>  
        </div>
            <div className="flex bg-[#fafafa] items-center justify-center h-[110px] ">
                <div className=" bg-[#e0e0e0] w-[70vw] h-[1px]"></div>
            </div>
        </div>

        
    )
}

export default Specialty;