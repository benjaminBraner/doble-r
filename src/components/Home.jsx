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
     return (
          <main className={main}>
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
                         <button>Reserva</button>
                    </div>
               </div>
          </main>
     )
}
