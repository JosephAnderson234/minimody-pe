import {React} from "react";
import 'animate.css';
import {ScrollReveal} from 'scrollreveal';

function Home(){
    ScrollReveal().reveal('.home');
    return(
        <div className="home">
            <h1>Mira nuestros productos!!</h1>
            <div className="banner1">
            </div>
            <div className="banner2"></div>
            <div className="banner3"></div>
            <div className="banner4"></div>
        </div>
    )
}

export default Home;