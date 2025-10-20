import TopSection from "./sectionTop1";
import Nav from "../Homepage/Nav";
import Footer from "../Homepage/footer";

import Hospital from "../Homepage/hospital";
import Testa from "../Homepage/testamonials";

import Opinion from "./opinion";



function RenderOffer(){

    return (
        <>
        <Nav></Nav>
        <TopSection></TopSection>
        <Opinion></Opinion>
        <Hospital></Hospital>
        <Testa></Testa>
        <Footer></Footer>
        </>
    )
}

export default RenderOffer;