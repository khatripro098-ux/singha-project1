
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function RenderDoctor(){
const { id } = useParams();

const [doctorInfo, setDoctorInfo] = useState([])

useEffect(()=>{
    fetch("http://localhost/api/doctor")
    .then((res)=> res.json())
    .then((data)=>setDoctorInfo(data))
    .catch((err)=>console.log('error',err))
},[])

return (
<div>

    <div className="relative flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 min-h-[80vh]">
    <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('dockback1.png')" }}
    ></div>

    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-custom-dark mb-4">
            Your Health Deserves the right{" "}
            <span className="font-playfair italic font-normal">specialist</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-md mx-auto lg:mx-0 mb-8">
            Connect with top rated doctors who listen and prioritize your health journey
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button className="bg-custom-dark text-white font-medium py-3 px-6 rounded-full flex items-center shadow-lg hover:bg-opacity-90 transition duration-300 w-full sm:w-auto justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search w-5 h-5 mr-2"
            >
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
            </svg>
            Find a Doctor
            </button>

            <button className="bg-white text-gray-800 font-medium py-3 px-6 rounded-full flex items-center border border-gray-300 shadow-md hover:bg-gray-50 transition duration-300 w-full sm:w-auto justify-center">
            How It Works
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right w-5 h-5 ml-2"
            >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
            </svg>
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div>
            <h3 className="text-xl font-semibold text-custom-dark mb-2">Free Checkup</h3>
            <p className="text-gray-600 text-base">
                Comprehensive evaluation with no upfront costs. Limited time offer.
            </p>
            </div>
            <div>
            <h3 className="text-xl font-semibold text-custom-dark mb-2">
                Custom Treatment Plan
            </h3>
            <p className="text-gray-600 text-base">
                From diagnosis to recovery, we map every step for your unique needs.
            </p>
            </div>
        </div>
        </div>

        <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
        <div className="doctor-image-container relative h-full w-full flex justify-center items-end">
            <img
            src=""
            alt=""
            className="doctor-img1 w-full h-auto object-contain object-center-bottom max-w-full opacity-0"
            />

            <div className="overlay-card patients-joined absolute bg-white rounded-xl shadow-card p-4 z-20 max-w-[280px] lg:bottom-2/5 lg:-left-5 lg:w-72">
            <div className="flex justify-center -space-x-2 mb-2">
                <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80"
                alt="Avatar 1"
                className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                alt="Avatar 2"
                className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
                alt="Avatar 3"
                className="w-10 h-10 rounded-full border-2 border-white"
                />
                <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-700">
                30M+
                </div>
            </div>
            <p className="text-sm text-gray-700 font-medium leading-snug">
                Join millions who found the right doctor for their unique health needs.
            </p>
            </div>

            <div className="overlay-card medical-history absolute bg-white rounded-xl shadow-card p-4 z-20 max-w-[280px] lg:-bottom-60 lg:left-10 lg:w-64">
            <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-file-medical text-gray-500 text-lg"></i>
                </div>
                <div>
                <p className="text-sm font-semibold text-gray-700">
                    Your full medical history
                </p>
                <p className="text-xs text-gray-500 leading-snug">
                    available to every clinician
                </p>
                </div>
            </div>
            </div>

            <div className="overlay-card virtual-care absolute bg-white rounded-xl shadow-card p-4 z-20 max-w-[280px] lg:-top-1 lg:-right-16 lg:w-72">
            <div className="flex items-center space-x-4">
                <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&q=80"
                alt="Small Doctor Avatar"
                className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                <p className="text-sm font-semibold text-gray-700">
                    24/7 Virtual Care Team at Your Service
                </p>
                <p className="text-xs text-gray-500 leading-snug mt-1">
                    Board certified doctors available anytime
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>

    
    <div className="container mx-auto px-4 max-w-[1600px]">
    <div className="section-title text-center mb-2 text-custom-dark-teal relative">
        <h2 className="partner-doctor text-4xl mb-4 relative inline-block transition-opacity duration-300 cursor-pointer">
        Our Partner Doctors
        </h2>
        <p className="text-custom-gray max-w-2xl mx-auto">
        World-renowned medical professionals
        </p>
    </div>

    <div
        className="partners-grid grid gap-8 mt-10"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
    >
        {
            doctorInfo.map((docs)=>{
                let docsDetail = docs.doctorInfo?.[0]|| {}
                return(
                    <div className="doctor-card text-center p-5 bg-white rounded-lg shadow-partner transition-all duration-300 block h-full relative hover:scale-105 hover:shadow-partner-hover">
        <div className="doctor-img w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-0">
            <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80"
            alt="Dr. Ram Yadav"
            className="w-full h-full object-cover"
            />
        </div>
        <h3 className="doctor-name text-custom-dark-teal mb-1 text-lg transition-all duration-300">
            {docsDetail.name}
        </h3>
        <div className="doctor-specialty text-custom-teal font-semibold mb-1 text-sm">
            {docsDetail.specialization}
        </div>
        <div className="doctor-experience text-custom-gray mb-2 text-sm">
            {docsDetail.experience}
        </div>
        <div className="doctor-hospital text-custom-gray italic mb-4 text-sm">
            {docsDetail.hospital}
        </div>
        <div className="doctor-buttons flex gap-2 justify-center mt-4">
            <a
            href="#"
            className="btn bg-custom-blue text-white py-2 px-4 rounded text-sm border-none cursor-pointer transition-all duration-300 no-underline inline-block hover:bg-custom-dark-blue"
            >
            Book Appointment
            </a>
            <a
            href="docprofile/docpro1.html"
            className="btn bg-gray-50 text-custom-dark py-2 px-4 rounded text-sm border border-gray-300 cursor-pointer transition-all duration-300 no-underline inline-block hover:bg-gray-100"
            >
            View Profile
            </a>
        </div>
        </div>
                )
            })
        }
    </div>
    </div>
</div>
);
}



export default RenderDoctor