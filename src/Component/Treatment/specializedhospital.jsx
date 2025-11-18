export default function Expert(){
    return(
        <div>

            <section className="partners">
                <div className="container">
                    <div className="section-title animate-on-scroll">
                        <h2 className="hospital-partner"><a href="hospital.html">Specialized Hospitals</a></h2>
                        <p>We work with the world's leading healthcare institutions</p>
                    </div>
                    
                    <div className="partners-grid stagger-animation">
                        
                        <a href="#" className="partner-card">
                            <div className="partner-img">
                                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Global Health Institute"/>
                                <div className="partner-overlay">
                                    <h3 className="partner-name " style={{textDecoration : 'none'}}>Global Health Institute</h3>
                                    <div className="partner-location">
                                        <i className="fas fa-map-marker-alt" style={{ color: '#fff', marginRight: '4px' }}></i> Singapore

                                    </div>
                                </div>
                            </div>
                            <div className="partner-content">
                                <div className="partner-specialties">
                                    <p>Cardiac Surgery</p>
                                    <p>Cardiology/CVTS</p>
                                    <p>Oncology</p>
                                </div>
                            </div>
                        </a>
                        
                        
                        <a href="#" className="partner-card">
                            <div className="partner-img">
                                <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Asia Medical Center"/>
                                <div className="partner-overlay">
                                    <h3 className="partner-name">Asia Medical Center</h3>
                                    <div className="partner-location">
                                        <i className="fas fa-map-marker-alt"></i> Singapore
                                    </div>
                                </div>
                            </div>
                            <div className="partner-content">
                                <ul className="partner-specialties">
                                    <li>Neurosurgery</li>
                                    <li>Transplant Surgery</li>
                                    <li>Fertility Treatments</li>
                                </ul>
                            </div>
                        </a>
                        
                        
                        <a href="#" className="partner-card">
                            <div className="partner-img">
                                <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Mediterranean Wellness"/>
                                <div className="partner-overlay">
                                    <h3 className="partner-name">Mediterranean Wellness</h3>
                                    <div className="partner-location">
                                        <i className="fas fa-map-marker-alt"></i> Istanbul, Turkey
                                    </div>
                                </div>
                            </div>
                            <div className="partner-content">
                                <ul className="partner-specialties">
                                    <li>Bariatric Surgery</li>
                                    <li>Hair Transplantation</li>
                                    <li>Dermatology</li>
                                </ul>
                            </div>
                        </a>
                         
                    </div>
                </div>
            </section>
        </div>
    )
}