


function Footer () {

    return (

        <div className="bg-[#1e4242] ">
            <div className="pt-[70px] px-[70px]">
                <div className=" leading-relaxed text-white grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  border-b border-[#ffffff1a] pb-17">
            <div className="flex flex-col gap-5">
                <h1 className="text-[#00a1ab] text-xl font-bold">Gods Life Health Care</h1>
                <p>Providing world-class medical tourism services with compassion and excellence.</p>
                <div className="flex gap-3">
                    <div className="bg-[#ffffff1a] h-11 text-lg text-center flex items-center justify-center w-11 rounded-full">
                        <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="bg-[#ffffff1a] h-11 text-lg text-center flex items-center justify-center w-11 rounded-full">
                        <i className="fab fa-twitter text-lg "></i>
                    </div>
                    <div className="bg-[#ffffff1a] h-11 text-lg text-center flex items-center justify-center w-11 rounded-full">
                        <i className="fab fa-instagram text-lg"></i>
                    </div>
                    <div className="bg-[#ffffff1a] h-11 text-lg text-center flex items-center justify-center w-11 rounded-full">
                        <i className="fab fa-linkedin-in text-lg"></i>
                    </div>  
                </div>
                </div>

                <div className="flex flex-col items-start gap-5">
                    <h1 className="text-[#00a1ab] text-xl font-bold">Quick Links</h1>
                    <div className="flex flex-col items-start gap-3">
                    <p className="hover:text-[#00a1ab] cursor-pointer translation-all duration-300">Home</p>
                    <p className="hover:text-[#00a1ab] cursor-pointer translation-all duration-300">Services</p>
                    <p className="hover:text-[#00a1ab] cursor-pointer translation-all duration-300">Destinations</p>
                    <p className="hover:text-[#00a1ab] cursor-pointer translation-all duration-300">Doctors</p>
                    <p className="hover:text-[#00a1ab] cursor-pointer translation-all duration-300">Testamonies</p>
                    </div>
                
                </div>

                <div className="flex flex-col items-start gap-5">
                    <h1 className="text-[#00a1ab] text-xl font-bold">Medical Sevices</h1>
                    <ul className="flex flex-col gap-3 items-start">
                    <li className="hover:text-[#00a1ab] cursor-pointer translation-all duration-300">Cardiac Surgery</li>
                    <li className="hover:text-[#00a1ab] cursor-pointer  translation-all duration-300">Orthopedics</li>
                    <li className="hover:text-[#00a1ab] cursor-pointer  translation-all duration-300">Cosmetics Surgery</li>
                    <li className="hover:text-[#00a1ab] cursor-pointer  translation-all duration-300">Dental Care</li>
                    <li className="hover:text-[#00a1ab] cursor-pointer  translation-all duration-300">Fertility Treatment</li>
                    </ul>
                
                </div>

                <div className="flex flex-col gap-5">
                    <h1 className="text-[#00a1ab] text-xl font-bold">Contact Us</h1>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2">
                            <i className="fas fa-map-marker-alt items-center" ></i>
                            <p> 123 Medical Avenue, Health City</p>
                        </div>
                    
                        <div className="flex gap-2 items-center">
                            <i className="fas fa-phone"></i>
                            <p>+1 234 567 8900</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <i className="fas fa-envelope"></i>
                            <p>info@godslifehealthcare.com</p>
                        </div>
                    </div>
                
                </div>
        </div>
            </div>

        <div className="flex justify-center h-13 items-center text-white text-sm">
            © 2023 Gods Life Health Care. All rights reserved.
        </div>
        </div>
    )
}

export default Footer