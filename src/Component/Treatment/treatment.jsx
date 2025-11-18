import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import WhyChoose from "./whychoose";
import Testamonies from "./testa";
import Footer from "./footer";
import Expert from "./specializedhospital";
import Doct from "./doctor";
import Procedure from "./medicalprocedure";


function Treatment() {
  const [active, setActive] = useState("department");
  const [clickedid, setClickedid] = useState(1);
  const [optionDiseClicked, setOptionDiseCLicked] = useState(null);
  const [treatOptionClickedid, setTreatOptionClickedid] = useState(null);
  const [treatmentData, setTreatmentData] = useState([]);

  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/treatment/");
        const text = await res.text();
        try {
          const datadoc = JSON.parse(text);
          setTreatmentData(datadoc);
        } catch {
          console.error("Response not valid JSON:", text);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="w-[90%] my-[50px] mx-auto bg-white rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
       
        <div className="flex border-b border-black">
          <div
            className={`flex-1 text-center px-4 py-5 font-bold cursor-pointer transition-colors duration-300 ${
              active === "department"
                ? "bg-white text-gray-700 border-b-[3px] border-blue -mb-px"
                : "bg-[#eee] text-gray-600 hover:bg-[#e0e0e0]"
            }`}
            onClick={() => setActive("department")}
          >
            Department
          </div>
          <div
            className={`flex-1 text-center px-4 py-5 font-bold cursor-pointer transition-colors duration-300 ${
              active === "experts"
                ? "bg-white text-gray-700 border-b-[3px] border-blue -mb-px"
                : "bg-[#eee] text-gray-600 hover:bg-[#e0e0e0]"
            }`}
            onClick={() => setActive("experts")}
          >
            Experts
          </div>
        </div>

       
        {active === "department" && (
          <div>
          
            <div className="text-center mb-[40px] text-white p-[20px] bg-gradient-to-br from-[#3498db] to-[#2c3e50]">
              <h1 className="mb-[10px] text-[2.5rem] font-bold">
                Medical Department
              </h1>
              <p className="text-[1.1rem] opacity-[0.9]">
                Comprehensive information about our specialized treatments
              </p>
            </div>

            <div className="flex flex-col md:flex-row bg-[#f8f9fa]">
            
              <div className="flex flex-col md:min-w-[280px] border-b md:border-b-0 md:border-r border-[#eaeaea]">
                {treatmentData.map((datatreat) => (
                  <div
                    key={datatreat.id}
                    className={`px-5 py-4 cursor-pointer flex items-center transition-all duration-300 max-h-[70px] min-h-[70px] ${
                      clickedid === datatreat.id
                        ? "text-[#3498db] bg-white border-r-[4px] border-[#3498db]"
                        : "opacity-[0.7] bg-[#f1f2f6] hover:opacity-[1] hover:bg-[#edf2f7]"
                    }`}
                    onClick={() => setClickedid(datatreat.id)}
                  >
                    <h1 className="whitespace-nowrap">{datatreat.name}</h1>
                  </div>
                ))}
              </div>

              
              <div className="flex-1 px-[30px] pr-[70px] pb-[30px] overflow-hidden bg-white">
                <AnimatePresence mode="wait">
                  {treatmentData.map(
                    (dataitems) =>
                      clickedid === dataitems.id && (
                        <motion.div
                          key={dataitems.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                         
                          <div className="flex flex-col md:flex-row flex-wrap gap-[30px]">
                            
                            <motion.div
                              className="flex-1 mb-[25px] pb-[15px] border-b border-[#eaeaea] justify-between flex-start"
                              initial={{ x: -50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: 0, opacity: 0 }}
                              transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                              <div className="flex-1">
                                <h1 className="text-[1.8rem] font-bold mb-[10px]">
                                {dataitems.treatHead}
                              </h1>
                              <p className="text-[#555] text-[1.05rem] mb-[15px]">
                                {dataitems.treatTitle}
                              </p>
                              </div>
                              <hr />
                              <br />
                              <h2 className="text-[1.5rem] font-semibold text-[#3498db] mb-[12px] font-[1.3rem]">
                                {dataitems.aboutHead}
                              </h2>
                              <p className="text-[#555] text-[1.05rem] mb-[15px]">
                                {dataitems.aboutDetail}
                              </p>

                              <h2 className="text-[1.5rem] font-semibold text-[#3498db] mb-[12px] font-[1.3rem]">
                                Common Symptoms
                              </h2>
                              {dataitems.symptoms.map((items, i) => (
                                <div key={i} className="flex ">
                                    <span className="text-[#3498db] mr-2">•</span>
                                    <p  className="mb-[15px] border-b border-dashed border-[#eaeaea] text-[#555] pb-[8px]">
                                  {items}
                                </p>
                                </div>
                              ))}
                            </motion.div>

                            
                            <motion.div
                              className="flex-1  "
                              initial={{ x: 50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: -50, opacity: 0 }}
                              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                            >
                                <div className="h-[250px] rounded-md  overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.1)]">
                                    <img className="rounde-md object-fit w-[100%] h-[100%]" src='https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' alt="" />
                                </div>
                               
                                <div className=" mt-[20px] flex-1 min-w-[300px]">
                                      <h1 className="text-[1.5rem]  font-semibold text-[#3498db] mb-[12px] font-[1.3rem]">
                                        Treatment Options
                                      </h1>
                                      <p className="text-[#555] text-[1.05rem] mb-[15px]">Different treatment methods are available.</p>
                                      {dataitems.diseaseKind.map((treat, i) => (
                                        treat.options.map((treat,i)=>(
                                          <div
                                          key={i}
                                          onClick={() =>
                                            setTreatOptionClickedid(treatOptionClickedid === i ? null : i)
                                          }
                                          
                                        >
                                          <div  className={`flex-1 flex justify-between items-center justify-between   px-5  py-4 rounded-md border-b border-[#f8f9fa] transition-all duration-300
                                        
                                                    ${treatOptionClickedid === i 
                                                        ?'bg-[#3498db] text-[white]'
                                                        :'bg-gray-200 hover:bg-gray-300  '
                                                    }
                                                    `}>
                                                        
                                                    <h1 className="font-semibold">
                                                    {treat.treatName}
                                                </h1>
                                                <i className={` transition-all duration-300 
                                                 ${ 

                                                    treatOptionClickedid === i 
                                                    ? 'fas fa-minus'
                                                    : 'fas fa-plus'
                                                }`}></i>
                                          </div>

                                          <AnimatePresence>
                                            {treatOptionClickedid === i && (
                                              <div className="flex">
                                                <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0,x: 10 }}
                                                transition={{ duration: 0.3 }}
                                                className="pl-[15px] mt-[5px] text-gray-700"
                                              >
                                                <p className="text-[#555] text-[1.05rem] mb-[15px]">{treat.treatDiscription}</p>
                                                <p className="text-[#555] text-[1.05rem] mb-[15px]">Common Techniques Involded:</p>
                                                <div >
                                                 
                                                     {treat.treatBenifits.map((b, idx) => (
                                                      <div className="flex">
                                                        <span className="text-[#3498db] mr-2">•</span>

                                                     <h1 className="mb-[15px] border-b border-dashed border-[#eaeaea] text-[#555] pb-[8px]">{b}</h1>
                                                      </div>
                                                  ))}
                                                 </div>
                                                
                                              </motion.div>
                                              <motion.div 
                                              initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0,x: -10 }}
                                                transition={{ duration: 0.3 }}
                                              className="w-[80%] h-[80%] mt-3 rounded-md overflow-hidden">
                                                <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="" />
                                              </motion.div>
                                              </div>
                                            )}
                                          </AnimatePresence>
                                        </div>
                                        ))
                                        
                                      ))}
                                    </div>
                              
                            </motion.div>
                            
                          </div>
                          <div className="stats-container">
                            <div className="stat-item">
                                <div className="stat-value">85%</div>
                                <div className="stat-label">Early Detection Success</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">2,500+</div>
                                <div className="stat-label">Patients Treated</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">94%</div>
                                <div className="stat-label">Patient Satisfaction</div>
                            </div>
                        </div>

                          
                          {dataitems.diseaseKind.map((dis, i) => (
                            <motion.div
                              key={i}
                              className="mt-[40px] shadow-md overflow-hidden"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div
                                onClick={() => setOptionDiseCLicked(optionDiseClicked === i ? null : i)}
                                className={`flex-1 flex items-center justify-between   px-5  py-4 rounded-md border-b border-[#f8f9fa] transition-all duration-300
                                        
                                        ${optionDiseClicked=== i 
                                            ?'bg-[#3498db] text-[white]'
                                            :'bg-[#f8f9fa] hover:bg-[#edf2f7] '
                                        }
                                        `}
                              >
                                <h1 className="text-[1.2rem] font-semibold">{dis.disName}</h1>
                                <span className={`fas fa-chevron-down
                                        ${
                                            optionDiseClicked === i 
                                            ? 'rotate-[180deg] transition-all duration-300'
                                            : 'rotate-[0deg] transition-all duration-300'
                                        }`}></span>
                              </div>

                              <AnimatePresence>
                                {optionDiseClicked === i && (
                                  <motion.div
                                    className=" flex-wrap flex-1 gap-[20px] mt-[10px]"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    
                                    <div className="flex flex-col md:flex-row flex-wrap gap-[30px] p-[20px]">
                                        <motion.div 
                                        initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                                    >
                                            <div >
                                      <h1 className="text-[1.5rem] font-semibold text-[#3498db] mb-[12px] font-[1.3rem]">{dis.disHead}</h1>
                                      <p className="mb-[15px]  text-[#555] pb-[8px]">{dis.disTitle}</p>
                                      <p>{dis.disDiscription}</p>
                                    </div>

                                      <h2 className="text-[1.5rem] font-semibold text-[#3498db] mb-[12px] font-[1.3rem]">
                                  Common Symptoms
                                </h2>
                                {dataitems.symptoms.map((items, i) => (
                                  <div key={i} className="flex ">
                                      <span className="text-[#3498db] mr-2">•</span>
                                      <p  className="mb-[15px] border-b border-dashed border-[#eaeaea] text-[#555] pb-[8px]">
                                    {items}
                                  </p>
                                  </div>
                                ))}
                                    </motion.div>

                                    <motion.div
                              className="flex-1 "
                              initial={{ x: 50, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: -50, opacity: 0 }}
                              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                            >
                                <div className="h-[230px] rounded-md  overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.1)]">
                                    <img className="rounde-md object-fit w-[100%] h-[100%]" src='https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' alt="" />
                                </div>
                                <div className=" mt-[20px] flex-1 min-w-[300px]">
                                      <h1 className="text-[1.5rem]  font-semibold text-[#3498db] mb-[12px] font-[1.3rem]">
                                        Treatment Options
                                      </h1>
                                      {dataitems.diseaseKind.map((treat, i) => (
                                        treat.options.map((treat,i)=>(
                                          <div
                                          key={i}
                                          onClick={() =>
                                            setTreatOptionClickedid(treatOptionClickedid === i ? null : i)
                                          }
                                          
                                        >
                                          <div  className={`flex-1 flex justify-between items-center justify-between   px-5  py-4 rounded-md border-b border-[#f8f9fa] transition-all duration-300
                                        
                                                    ${treatOptionClickedid === i 
                                                        ?'bg-[#3498db] text-[white]'
                                                        :'bg-[#f8f9fa] hover:bg-[#edf2f7] '
                                                    }
                                                    `}>
                                                        
                                                    <h1 className="font-semibold">
                                                    {treat.treatName}
                                                </h1>
                                                <i className={` transition-all duration-300 
                                                 ${ 

                                                    treatOptionClickedid === i 
                                                    ? 'fas fa-minus'
                                                    : 'fas fa-plus'
                                                }`}></i>
                                          </div>

                                          <AnimatePresence>
                                            {treatOptionClickedid === i && (
                                              <div className="flex">
                                                <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0,x: 10 }}
                                                transition={{ duration: 0.3 }}
                                                className="pl-[15px] mt-[5px] text-gray-700"
                                              >
                                                <p className="text-[#555] text-[1.05rem] mb-[15px]">{treat.treatDiscription}</p>
                                                <p className="text-[#555] text-[1.05rem] mb-[15px]">Common Techniques Involded:</p>
                                                <div >
                                                 
                                                     {treat.treatBenifits.map((b, idx) => (
                                                      <div className="flex">
                                                        <span className="text-[#3498db] mr-2">•</span>

                                                     <h1 className="mb-[15px] border-b border-dashed border-[#eaeaea] text-[#555] pb-[8px]">{b}</h1>
                                                      </div>
                                                  ))}
                                                 </div>
                                                
                                              </motion.div>
                                              <motion.div 
                                              initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0,x: -10 }}
                                                transition={{ duration: 0.3 }}
                                              className="w-[80%] h-[80%] mt-3 rounded-md overflow-hidden">
                                                <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="" />
                                              </motion.div>
                                              </div>
                                            )}
                                          </AnimatePresence>
                                        </div>
                                        ))
                                        
                                      ))}
                                    </div>
                                    
                              
                                
                              
                            </motion.div>
                                    </div>

                                    <div className="collapsible-stats">
                                            <div className="collapsible-stat-item">
                                                <div className="collapsible-stat-value">72%</div>
                                                <div className="collapsible-stat-label">Response Rate</div>
                                            </div>
                                            <div className="collapsible-stat-item">
                                                <div className="collapsible-stat-value">18 mos</div>
                                                <div className="collapsible-stat-label">Avg. Survival</div>
                                            </div>
                                            <div className="collapsible-stat-item">
                                                <div className="collapsible-stat-value">45%</div>
                                                <div className="collapsible-stat-label">Side Effects</div>
                                            </div>
                                        </div>
                                  
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          ))}
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
                <div className="consultation-cta">
                            <h3>Need Professional Advice?</h3>
                            <p>Our ENT specialists are ready to help you with diagnosis and treatment options.</p>
                            <a href="#" className="cta-button hover:-translate-y-[3px] hover:shadow-md">Book Consultation</a>
                        </div>
              </div>
              
            </div>
            
          </div>
            
        )}
        
      </div>

  {active === "department" && (
      <div className="w-[90%] mx-auto mt-[60px]">
        <WhyChoose />
      </div>
    )}

    {
      active === 'experts' && (
        <div>
          
        </div>
      )
    }
      <Expert></Expert>
      <Doct></Doct>
      <Procedure></Procedure>
      <Testamonies></Testamonies>
      <Footer></Footer>
    </div>

  );
}

export default Treatment;
