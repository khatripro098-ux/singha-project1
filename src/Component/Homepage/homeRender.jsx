import Nav from "./Nav"
import Header from "./header"
import Offer from "./offer"
import Specialty from "./specialty"
import Hospital from "./hospital"
import Doctor from "./doctor"
import Choose from "./choose"
import Testa from "./testamonials"
import Faq from "./faq"
import Cost from "./cost"
import Service from "./services"
import HealthVlog from "./healthBlog"
import Consolt from "./consultForm"
import Footer from "./footer"


function RenderHome() {

        return (
        <>
        <Nav></Nav>
        <Header></Header>
        <Offer></Offer>
        <Specialty></Specialty>
        <Hospital></Hospital>
        <Doctor></Doctor>
        <Choose></Choose>
        <Testa></Testa>
        <Faq></Faq>
        <Cost></Cost>
        <Service></Service>
        <HealthVlog></HealthVlog>
        <Consolt></Consolt>
        <ChatBot></ChatBot>
        <Footer></Footer>
        </>
        )

}

export default RenderHome;