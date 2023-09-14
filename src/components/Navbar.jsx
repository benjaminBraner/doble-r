import React, { useEffect, useRef } from 'react'
import { header, navbar, navMenu, logoMenu, active, navLink, sticky, logoCont } from '../scss/components/_Navbar.module.scss'
import menuLogo from '../assets/icons/menu.svg'
import dobleRLogo from '../assets/icons/logo.png'

export const Navbar = () => {

     const clickMenuIcon = () => {
          const menuWrapper = document.getElementById(`menuWrapper`);
          menuWrapper.classList.toggle(active);
     }
     const myElementRef = useRef(null);

     useEffect(() => {
          const headerr = document.getElementById("header");
          window.addEventListener("scroll", () => {
               headerr.classList.toggle(sticky, window.scrollY > 0);
          })
     }, [])


     return (
          <>
               <header className={header} id='header' ref={myElementRef}>
                    <nav className={navbar}>
                         <div className={logoCont}>
                              <img src={dobleRLogo} alt="R" />
                              <h3>DOBLE R</h3>
                         </div>

                         <ul className={navMenu} id='menuWrapper'>
                              <li>
                                   <a
                                        to='home'
                                        exact='true'
                                        onClick={clickMenuIcon}
                                        className={navLink}
                                   >
                                        Home
                                   </a>
                                   <p>Pagina principal</p>
                              </li>
                              <li>
                                   <a
                                        href="/#sobre-nosotros"
                                        onClick={clickMenuIcon}
                                        className={navLink}
                                   >
                                        Cortes
                                   </a>
                                   <p>Elige el que mejor se adapte</p>
                              </li>
                              <li>
                                   <a
                                        to='ubicion'
                                        exact='true'
                                        onClick={clickMenuIcon}
                                        className={navLink}
                                   >
                                        Ubicacion
                                   </a>
                                   <p>Donde puedes encontrarme</p>
                              </li>
                              <li>
                                   <a
                                        to='contact'
                                        exact='true'
                                        onClick={clickMenuIcon}
                                        className={navLink}
                                   >
                                        Contacto
                                   </a>
                                   <p>Agenda una cita para tu corte</p>
                              </li>
                         </ul>

                         <img src={menuLogo} alt='menu' className={logoMenu} onClick={clickMenuIcon} />

                    </nav>
               </header>
          </>
     )
}
