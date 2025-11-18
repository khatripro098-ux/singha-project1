

function HealthVlog(){

    const blogs = [
        {
            img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title:'10 Tips for Maintaining a Healthy Heart',
            learn:'Learn how to keep your heart healthy with these simple lifestyle changes that can make a big difference.',
            read:'Read More'
        },
        {
            img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title:'10 Tips for Maintaining a Healthy Heart',
            learn:'Learn how to keep your heart healthy with these simple lifestyle changes that can make a big difference.',
            read:'Read More'
        },
        {
            img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title:'10 Tips for Maintaining a Healthy Heart',
            learn:'Learn how to keep your heart healthy with these simple lifestyle changes that can make a big difference.',
            read:'Read More'
        }
    ]

    return(

        <div>
            <div className="w-[82vw]  m-auto flex justify-between items-center">
                <div className="flex flex-col mt-10   py-20] "
                    >
                <div className='self-start flex text-center justify-center cursor-pointer'
                    >
                    <h1 className=" text-[23px] lg:text-[32px] font-bold  text-[#002c5f]">
                    Health Blog
                    </h1>
                </div>
                <div className="self-center mr-[120px] mt-[10px] mb-[6px] bg-[#00a1ab] w-[70px] h-[3px]"></div>
                <p className="text-[#777777] text-[15px]">Latest articles and health tips from our experts</p>
            </div>

            <button className="self-center cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] mt-[90px] text-[13px] md:text-[16px]  py-2 px-4 text-white bg-[#00a1ab] rounded-full tracking-wider transition-all duration-300">VIEW ALL</button>
            </div>

            <div className="flex flex-wrap gap-7 pb-14 cursor-pointer justify-center w-[85vw] m-auto ">
                {blogs.map((items,index)=>{

                    return(
                        <div key={index} className="mt-7 w-[332px] rounded-md shadow-[0_0_15px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col group hover:scale-105 transition-all duration-300">
                            <div  className=" overflow-hidden">
                                <img className=" group-hover:scale-102  object-cover h-43 w-83   transition-all duration-1000" src= {items.img} alt="" />
                            </div>
                            <div className="p-4 flex flex-col gap-3 leading-relaxed">
                            
                            <p className="font-bold text-[17px] text-[#002c5f] group-hover:text-[#008a93]">{items.title}</p>
                            <p className="text-[#777777] text-sm">{items.learn}</p>
                            <p className="underline text-[#008a93]">{items.read}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex items-center bg-[#fafafa] justify-center h-[110px] mt-5 ">
                <div className=" bg-[#e0e0e0] w-[150vh] h-[1px]"></div>
            </div>
        </div>
    )
}

export default HealthVlog