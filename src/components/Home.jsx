import React from 'react'
import {
     main,
     hero,
     leftImg,
     secondImgCont,
     tituloCont
} from '../scss/components/_Home.module.scss'
import homeLeftImg from '../assets/images/home-left.jpg'
import heroImg from '../assets/images/hero.jpeg'
// import heroImg2 from '../assets/images/salah-regouane-MRCdF3qUbp0-unsplash.jpg'
// import heroImg3 from '../assets/images/salah-regouane-rM_ev_MroKA-unsplash.jpg'

export const Home = () => {

     const clickReservaBtn = () => {
          const reservaSection = document.getElementById("contacto");
          reservaSection.scrollIntoView();
     }

     return (
          <main className={main} id='home'>
               <div className={hero}>

                    <img src={homeLeftImg} alt="" className={leftImg} />
                    {/* <img src={homeLeftImg} alt="" className={leftImg} />  */}
                    {/* <img src={heroImg3} alt="" className={leftImg} /> */}
                    <div className={secondImgCont}>

                         <img src={heroImg} alt="" />
                    </div>
                    <div className={tituloCont}>
                         <h1>DOBLE R</h1>
                         <p><span>Estilo impecable</span> , <span>Confianza elevada</span></p>
                         <button onClick={clickReservaBtn}>Reserva</button>
                    </div>
               </div>
          </main>
     )
}
