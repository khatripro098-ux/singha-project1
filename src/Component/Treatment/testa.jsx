import useScrollAnimation from "./treatani"

function Testamonies(){

    useScrollAnimation()
    return(
        <section className="testimonials">
        <div className="container">
            <div className="section-title animate-on-scroll">
                <h2>Patient Testimonials</h2>
                <p>Hear from our patients who have experienced our exceptional healthcare services</p>
            </div>
            
            <div className="testimonials-container">
                <div className="testimonial-wrapper stagger-animation">
                    <div className="testimonial text-center">
                        <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="Robert Chen"/>
                        <p>"The care I received was exceptional. The surgeons were highly skilled, and the hospital facilities were state-of-the-art. The recovery vacation package was the perfect way to recuperate."</p>
                        <div className="name">Robert Chen</div>
                        <div className="position">Cardiac Surgery Patient from Australia</div>
                    </div>

                    <div className="testimonial">
                        <img src="https://randomuser.me/api/portraits/women/42.jpg" alt="Ching Chang"/>
                        <p>"The care I received was exceptional. The surgeons were highly skilled, and the hospital facilities were state-of-the-art. The recovery vacation package was the perfect way to recuperate."</p>
                        <div className="name">Ching Chang</div>
                        <div className="position">Cardiac Surgery Patient from Australia</div>
                    </div>
                    
                    <div className="testimonial">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Emma Williams"/>
                        <p>"I needed extensive dental work that was too expensive back home. Gods Life arranged everything beautifully - the treatment was top-notch, and I got to explore a beautiful country during my recovery."</p>
                        <div className="name">Emma Williams</div>
                        <div className="position">Dental Care Patient from UK</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Testamonies