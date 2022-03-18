import {React} from "react";
import { NavLink } from "react-router-dom";
import img from '../img/logo192.png';


function Foter(){
    return(
        <div className="foter">
            <div className="imgL">
                <NavLink to="/" className="link">
                    <img src={img} alt=".7"/>
                </NavLink>
                <NavLink to="/" className="link_o">
                    Minimody
                </NavLink>
            </div>
            <div className="textL">
                <section className="tags">
                    <ul>
                        <li>
                            Ropa
                        </li>
                        <li>
                            Prendas de Vestir
                        </li>
                        <li>
                            Confeccion
                        </li>
                    </ul>
                </section>
                <section className="linksG">
                    <ul>
                        <li>
                            © 2020 Minimody
                        </li>
                        <li>
                            <NavLink to="/terms&conditions" className="linkToTA"> Term of Use</NavLink>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Foter;