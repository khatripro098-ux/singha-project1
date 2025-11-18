import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function RenderDoctorDetail() {


const [doctorInfo, setDoctorInfo] = useState(null);

const {id} = useParams();



useEffect(()=>{
    fetch(`/api/doctor/${id}`)
    .then((res)=> res.json())
    .then((data)=>setDoctorInfo(data))
    .catch((err)=>console.log('erroe',err))
},[id])

if (!doctorInfo) {
return (
    <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-600">
    Loading doctor details...
    </div>
);
}

const detail = doctorInfo.doctorInfo?.[0] || {}
const experties = doctorInfo.doctorInfo?.[0]?.experties || [];
const certificate = doctorInfo.doctorInfo?.[0]?.certificate || [];
const language = doctorInfo.doctorInfo?.[0]?.languages || [];
const education = doctorInfo.doctorEducation || [];
const experience = doctorInfo.doctorExperience || [];


return (
<div>
    
    <div className="bg-[#f5f7fa] text-gray-800">
    
    <header className="bg-white shadow sticky top-0 z-50">
    <div className="w-[90%] max-w-[1200px] mx-auto flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1iie8n5MkShNgEeBfpmQfPl2lCBqpYOnQg&s"
            alt="Gods Life Health Care"
            className="h-12 w-auto rounded-full"
        />
        <h1 className="text-2xl font-bold text-[#2c3e50]">
            Gods <span className="text-[#3498db]">Life</span>
        </h1>
        </div>

        {/* Nav Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
        {["Home", "Services", "Destinations", "Doctors", "Testimonials", "About Us", "Contact"].map(
            (item) => (
            <li key={item}>
                <a href="#" className="text-[#2c3e50] hover:text-[#3498db] transition">
                {item}
                </a>
            </li>
            )
        )}
        <li>
            <a
            href="#"
            className="bg-[#3498db] text-white px-5 py-2 rounded-md hover:bg-[#2980b9] transition"
            >
            Get Consultation
            </a>
        </li>
        </ul>

        <div className="block md:hidden">
        <img src="./logo/hamburger.png" alt="Menu" className="h-6 w-auto" />
        </div>
    </div>
    </header>

    {/* Profile Content */}
    
                <section className="w-full bg-white shadow-xl overflow-hidden">
    <div className="flex flex-col lg:flex-row min-h-[700px]">
        {/* Left Column */}
        <aside className="lg:w-2/5 bg-gray-50 p-8 lg:pt-20 flex flex-col items-center border-r border-gray-200">
        <div className="w-full max-w-[800px] h-[500px] rounded-lg overflow-hidden shadow-lg mb-8">
            <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1000&q=80"
            alt="Doctor"
            className="w-full h-full object-cover"
            />
        </div>

        {/* Expertise */}
        <div className="w-full mb-8">
            <h3 className="text-xl font-semibold mb-4">Expertise</h3>
            <div className="bg-white rounded-lg shadow p-6 space-y-3">
            {experties.map((skill, i) => (
                <div
                key={i}
                className="flex items-center bg-[#f8fafc] rounded-md border-l-4 border-[#3498db] px-3 py-3 hover:bg-[#e3f2fd] transition"
                >
                <span className="w-2 h-2 bg-[#3498db] rounded-full mr-3"></span>
                <p className="font-medium text-gray-800">{skill}</p>
                </div>
            ))}
            </div>
        </div>

        {/* Contact Info */}
        <div className="w-full mb-8">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-600">
            <p>📞 {detail.phone}</p>
            <p>📧 {detail.email}</p>
            <p>📍 {detail.location}</p>
            </div>
        </div>

    
        <div className="w-full mb-8">
            <h3 className="text-xl font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4 text-gray-600 text-xl">
            <a href="#" className="hover:text-blue-700">
                <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-500">
                <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-600">
                <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-800">
                <FaLinkedinIn />
            </a>
            </div>
        </div>

        <button className="w-full bg-[#007bff] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Book Appointment
        </button>
        </aside>

        {/* Right Column */}
        <main className="lg:w-3/5 p-10 space-y-10">
        <div>
            <h1 className="text-5xl font-bold text-gray-900">{doctorInfo.name}</h1>
            <p className="text-3xl text-blue-600 font-semibold mt-2">
            {detail.liscence}
            </p>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            {detail.description}
            </p>
        </div>

        {/* Education */}
        <section>
            <h2 className="text-3xl font-semibold mb-6">Education</h2>
            <div className="relative border-l-2 border-gray-200 pl-6 space-y-8 ml-4">
            {education.map((edu, i) => (
                <div key={i} className="relative">
                <span className="absolute  top-12 -left-4 w-3 h-3 bg-gray-300 rounded-full border-2 border-white"></span>
                <p className="text-gray-500">{edu.fromyear} - {edu.toyear}</p>
                <h3 className="text-xl font-semibold">{edu.course}</h3>
                <p className="text-gray-500">{edu.university}</p>
                <p className="text-gray-600 mt-1">{edu.Discription}</p>
                </div>
            ))}
            </div>
        </section>

        {/* Experience */}
        <section>
            <h2 className="text-3xl font-semibold mb-6">Professional Experience</h2>
            <div className="relative border-l-2 border-gray-200 pl-6 space-y-8 ml-4">
            {experience.map((exp, i) => (
                <div key={i} className="relative">
                <span className="absolute -left-4 top-15 w-3 h-3 bg-gray-300 rounded-full border-2 border-white"></span>
                <p className="text-gray-500">{exp.fromyear} - {exp.toyear}</p>
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className="text-gray-500">{exp.institute}</p>
                <p className="text-gray-600 mt-1">{exp.discription}</p>
                </div>
            ))}
            </div>
        </section>

        {/* Certifications */}
        <section>
            <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
            <ul class="text-primary-text space-y-4 text-lg ml-4">
                {
                    certificate.map((cert,i)=>{
                        return(
                            <li class="flex items-start">
                                <svg class="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{cert}</span>
                            </li>
                        )
                    })
                }
                
            </ul>
        </section>

        {/* Languages */}
        <section>
            <h2 className="text-3xl font-semibold mb-4">Languages</h2>
            <div className="flex flex-wrap gap-3">
            {language.map((lang, i) => (
                <span
                key={i}
                className="px-4 py-2 bg-blue-100 text-blue-700 text-lg font-medium rounded-full"
                >
                {lang}
                </span>
            ))}
            </div>
        </section>
        </main>
    </div>
    </section>

            
    {/* Footer */}
    <footer className="bg-[#2c3e50] text-white py-10 mt-10">
    <div className="w-[90%] max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
        <div>
        <h3 className="text-xl font-semibold mb-3">Gods Life Health Care</h3>
        <p className="text-gray-300">
            Providing world-class medical tourism services with compassion and
            excellence.
        </p>
        <div className="flex gap-4 mt-4">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
        </div>
        </div>
        <p className="md:col-span-3 text-center text-gray-400 border-t border-gray-600 pt-6 mt-6">
        © 2025 Gods Life Health Care. All rights reserved.
        </p>
    </div>
    </footer>
</div>
    


</div>
);
}

export default RenderDoctorDetail;
