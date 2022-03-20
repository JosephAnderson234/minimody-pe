import React from "react";
import ReactPlayer from 'react-player'

import capture1 from '../img/capture1.jpeg';
import capture2 from '../img/capture2.jpeg';
import capture3 from '../img/capture3.jpeg';
import capture4 from '../img/capture4.jpeg';

function Contacto (){
    const [whatsapp, setWhatsapp] = React.useState(true);
    const [email, setEmail] = React.useState(false);
    const [facebook, setFacebook] = React.useState(false);
    const [instagram, setInstagram] = React.useState(false);

    const handleWhatsapp = () => {
        setWhatsapp(true);
        setEmail(false);
        setFacebook(false);
        setInstagram(false);
    };

    const handleEmail = () => {
        setWhatsapp(false);
        setEmail(true);
        setFacebook(false);
        setInstagram(false);
    };

    const handleFacebook = () => {
        setWhatsapp(false);
        setEmail(false);
        setFacebook(true);
        setInstagram(false);
    };

    const handleInstagram = () => {
        setWhatsapp(false);
        setEmail(false);
        setFacebook(false);
        setInstagram(true);
    }

    return(
        <React.Fragment>
            <div className="socialConteiner">
                <div className="navSocial">
                    <ul>
                        <li className={ whatsapp ? "active" : "disable"} onClick={handleWhatsapp}>
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </li>

                        <li className={ facebook ? "active" : "disable"} onClick={handleFacebook}>
                            <ion-icon name="logo-facebook"></ion-icon>
                        </li>

                        <li className={ instagram ? "active" : "disable"} onClick={handleInstagram}>
                            <ion-icon name="logo-instagram"></ion-icon>
                        </li>

                        <li className={ email ? "active" : "disable"} onClick={handleEmail}>
                            <ion-icon name="mail-outline"></ion-icon>
                        </li>
                    </ul>
                </div>
                <div className={ whatsapp ? "containerS" : "off"} id="whatssapp">
                    <div className="iconG">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </div>
                    <div className="example">
                        <img src={capture1} alt=".10"/>
                        <a href="https://wa.link/augpap" target="_blank" rel="noreferrer"> Click Me :D</a>
                    </div>
                </div>
                <div className={ facebook ? "containerS" : "off"} id="facebook">
                    <div className="iconG">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </div>
                    <div className="example">
                        <img src={capture2} alt=".11"/>
                        <a href="https://www.facebook.com/minimody.peru" target="_blank" rel="noreferrer"> Click Me :D</a>
                    </div>
                </div>
                <div className={ instagram ? "containerS" : "off"} id="instagram">
                    <div className="iconG">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                    <div className="example">
                        <img src={capture3} alt=".12"/>
                        <a href="https://www.instagram.com/minimody.peru/" target="_blank" rel="noreferrer"> Click Me :D</a>
                    </div>
                </div>
                <div className={ email ? "containerS" : "off"} id="mail">
                    <div className="iconG">
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                    <div className="example">
                        <img src={capture4} alt=".13"/>
                        <a href="mailto:minimodyperu@gmail.com" target="_blank" rel="noreferrer"> Click Me :D</a>
                    </div>
                </div>
                <div className="spanVideo">
                    <div style={{"height": "150px", "overflow": "hidden",}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{"height": "100%", "width": "100%",}}><path d="M0.00,49.98 C268.62,162.34 354.97,-17.25 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{"stroke": "none", "fill": "black",}}></path></svg></div>
                    <div className="vdS">
                        <div className="video">
                            <ReactPlayer 
                            width="100%"
                            height="100%"
                            url={require('../img/3566f7c997a94f2aab11a0557fd40d64.mp4')}
                            controls={true}
                            />
                        </div>
                        <p>Créditos a <br/> <a href="https://www.tiktok.com/@lalitovfx" target="_blank" rel="noreferrer">Lalitovfx</a></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contacto;