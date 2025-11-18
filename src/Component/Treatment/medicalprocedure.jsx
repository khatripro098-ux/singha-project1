
export default function Procedure(){

    return(

        <div className="items">
            <section className="procedures-section">
                <div className="container w-[90%] ">
                    <div className="section-title animate-on-scroll">
                        <h2>Medical Procedures</h2>
                        <p>Advanced treatments and procedures for various medical conditions</p>
                    </div>
                    
                    <div className="procedures-grid stagger-animation">
                       
                        <div className="procedure-card">
                            <div className="procedure-icon">
                                <i className="fas fa-lungs"></i>
                            </div>
                            <h3 className="procedure-name">ENT Surgery</h3>
                            <p className="procedure-desc">Minimally invasive surgical procedures for ENT treatment with faster recovery times.</p>
                            <ul className="procedure-details">
                                <li>Video-Assisted Thoracoscopic Surgery (VATS)</li>
                                <li>Lobectomy or Pneumonectomy</li>
                                <li>Robotic-Assisted Surgery</li>
                                <li>Post-operative care and monitoring</li>
                            </ul>
                        </div>
                        
                        <div className="procedure-card">
                            <div className="procedure-icon">
                                <i className="fas fa-tint"></i>
                            </div>
                            <h3 className="procedure-name">Stem Cell Transplantation</h3>
                            <p className="procedure-desc">Advanced stem cell therapies for Dental patients with high success rates.</p>
                            <ul className="procedure-details">
                                <li>Autologous Stem Cell Transplant</li>
                                <li>Allogeneic Stem Cell Transplant</li>
                                <li>Pre-transplant conditioning</li>
                                <li>Post-transplant immune support</li>
                            </ul>
                        </div>
                        
                        <div className="procedure-card">
                            <div className="procedure-icon">
                                <i className="fas fa-heartbeat"></i>
                            </div>
                            <h3 className="procedure-name">Cardiac Bypass Surgery</h3>
                            <p className="procedure-desc">Comprehensive heart surgery procedures to restore proper blood flow to the heart.</p>
                            <ul className="procedure-details">
                                <li>Coronary Artery Bypass Grafting (CABG)</li>
                                <li>Minimally Invasive Direct CABG</li>
                                <li>Off-pump Coronary Artery Bypass</li>
                                <li>Post-surgical rehabilitation program</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </section>
            
                    <div className="consultation-cta animate-on-scroll m-auto w-[85%]  flex-1 items-center border " >
                <h3>Need Professional Advice?</h3>
                <p>Our specialists are ready to help you with diagnosis and treatment options.</p>
                <a href="#" className="cta-button hover:-translate-y-1">Book Consultation</a>
            
                </div>
            
        </div>
    )
}