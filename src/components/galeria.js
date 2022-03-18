/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
//StrictMode, UseEffect
import 'animate.css';
//import sr from './ScrollReveal'

//import images
import img1 from '../img/image1.jpg';
import img2 from '../img/image2.jpg';
import img3 from '../img/image3.jpg';
import img4 from '../img/image4.jpg';
import img5 from '../img/image5.jpg';
import img6 from '../img/image6.jpg';

//const url = "https://api-rest-mysql-jacr.herokuapp.com/post";

export default function Galeria (){

    return(
        <div className="home">
            <h1>Mira nuestros productos!!</h1>
            <span className="linea"></span>
            <section className="galery">
                <a href="#img1">
                    <img src={img1} alt="."></img>
                </a>
                <a href="#img2">
                    <img src={img2} alt=".2"></img>
                </a>
                <a href="#img3">
                    <img src={img3} alt=".3"></img>
                </a>
                <a href="#img4">
                    <img src={img4} alt=".3"></img>
                </a>
                <a href="#img5">
                    <img src={img5} alt=".4"></img>
                </a>
                <a href="#img6">
                    <img src={img6} alt=".5"></img>
                </a>
            </section>
            <article className="light-box" id="img1">
                <img src={img1} alt="."></img>
                <a href="#img2" className="next">
                    <ion-icon name="caret-forward-outline"></ion-icon>
                </a>
                <a href="#" className="cancel">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </a>
            </article>
            <article className="light-box" id="img2">
                <a href="#img1" className="next">
                    <ion-icon name="caret-back-outline"></ion-icon>
                </a>
                <img src={img2} alt="."></img>
                <a href="#img3" className="next">
                    <ion-icon name="caret-forward-outline"></ion-icon>
                </a>
                <a href="#" className="cancel">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </a>
            </article>
            <article className="light-box" id="img3">
                <a href="#img2" className="next">
                    <ion-icon name="caret-back-outline"></ion-icon>
                </a>
                <img src={img3} alt="."></img>
                <a href="#img4" className="next">
                    <ion-icon name="caret-forward-outline"></ion-icon>
                </a>
                <a href="#" className="cancel">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </a>
            </article>

            <article className="light-box" id="img4">
                <a href="#img3" className="next">
                    <ion-icon name="caret-back-outline"></ion-icon>
                </a>
                <img src={img4} alt="."></img>
                <a href="#img5" className="next">
                    <ion-icon name="caret-forward-outline"></ion-icon>
                </a>
                <a href="#" className="cancel">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </a>
            </article>

            <article className="light-box" id="img5">
                <a href="#img4" className="next">
                    <ion-icon name="caret-back-outline"></ion-icon>
                </a>
                <img src={img5} alt="."></img>
                <a href="#img6" className="next">
                    <ion-icon name="caret-forward-outline"></ion-icon>
                </a>
                <a href="#" className="cancel">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </a>
            </article>

            <article className="light-box" id="img6">
                <a href="#img5" className="next">
                    <ion-icon name="caret-back-outline"></ion-icon>
                </a>
                <img src={img6} alt="."></img>
                <a href="#" className="cancel">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </a>
            </article>
        </div>
    )

}