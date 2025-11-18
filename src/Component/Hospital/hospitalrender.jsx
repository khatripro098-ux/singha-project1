    function HospitalRender() {
    return (
    <section className="partners">
        <div className="partners-grid">

        <div
            className="partner-card"
            data-name="Artemis Hospital"
            data-city="Gurgaon"
            data-department="Cardiac Surgery, Orthopedics, Oncology"
        >
            <div className="partner-img">
            <img src="hospital/h1.jpg" alt="Artemis Hospital" />
            <div className="partner-overlay">
                <h3 className="partner-name">Artemis Hospital, Gurgaon</h3>
                <div className="partner-location">
                <i className="fas fa-map-marker-alt"></i> Gurgaon, India
                </div>
            </div>
            </div>
            <div className="partner-content">
            <ul className="partner-specialties">
                <li>Cardiac Surgery</li>
                <li>Orthopedics</li>
                <li>Oncology</li>
            </ul>
            <button
                className="hospital-btn"
                
            >
                Learn More
            </button>
            </div>
        </div>

        </div>
    </section>
    );
    }

    export default HospitalRender;
