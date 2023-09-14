import {
     container, gallery, galleryItem, galleryImage, divOrdenarCorte, ordenarCorte
} from '../scss/components/_Trabajos.module.scss'
import lowFade from '../assets/images/lowFade.jpeg'
import lowFade2 from '../assets/images/lowFade2.jpeg'
import midFade from '../assets/images/midFade.jpeg'
import midFade2 from '../assets/images/midFade2.jpeg'
import tapperFade from '../assets/images/tapperFade.jpeg'
import tapperFade2 from '../assets/images/tapperFade2.jpeg'
import burstFade from '../assets/images/burstFade.jpeg'
import burstFade2 from '../assets/images/burstFade2.jpeg'
import lowFadeV from '../assets/images/lowFadeV.jpeg'
import lowFadeV2 from '../assets/images/lowFadeV2.jpeg'
import mohawk from '../assets/images/mohawk.jpeg'
import mohawk2 from '../assets/images/mohawk2.jpeg'

import seasors from '../assets/icons/seasors.svg'
import { useContext } from 'react'
import { CorteContext } from './CorteContext'

export const Trabajos = () => {

     const { corte, setCorte } = useContext(CorteContext);
     console.log(corte);

     const clickBtnOrdenar = (e) => {
          const corte = e.target.parentNode.parentNode.parentNode.lastChild.textContent;
          setCorte(corte)
     }

     return (
          <>
               <div className={container}>
                    <div className={gallery}>
                         <div>
                              <div className={galleryItem}>
                                   <div className={divOrdenarCorte}>
                                        <img className={galleryImage} src={lowFade} />
                                        <button className={ordenarCorte} onClick={clickBtnOrdenar}>Ordenar<img src={seasors} alt='Tijeras' /></button>
                                   </div>
                                   <img className={galleryImage} src={lowFade2} />
                              </div>
                              <p>Low Fade</p>
                         </div>

                         <div>
                              <div className={galleryItem}>
                                   <div className={divOrdenarCorte}>
                                        <img className={galleryImage} src={midFade} />
                                        <button className={ordenarCorte} onClick={clickBtnOrdenar}>Ordenar<img src={seasors} alt='Tijeras' /></button>
                                   </div>
                                   <img className={galleryImage} src={midFade2} />
                              </div>
                              <p>Mid Fade</p>
                         </div>

                         <div>
                              <div className={galleryItem}>
                                   <div className={divOrdenarCorte}>
                                        <img className={galleryImage} src={tapperFade} />
                                        <button className={ordenarCorte} onClick={clickBtnOrdenar}>Ordenar<img src={seasors} alt='Tijeras' /></button>
                                   </div>
                                   <img className={galleryImage} src={tapperFade2} />
                              </div>
                              <p>Tapper Fade</p>
                         </div>

                         <div>
                              <div className={galleryItem}>
                                   <div className={divOrdenarCorte}>
                                        <img className={galleryImage} src={burstFade} />
                                        <button className={ordenarCorte} onClick={clickBtnOrdenar}>Ordenar<img src={seasors} alt='Tijeras' /></button>
                                   </div>
                                   <img className={galleryImage} src={burstFade2} />
                              </div>
                              <p>Burst Fade</p>
                         </div>

                         <div>
                              <div className={galleryItem}>
                                   <div className={divOrdenarCorte}>
                                        <img className={galleryImage} src={lowFadeV} />
                                        <button className={ordenarCorte} onClick={clickBtnOrdenar}>Ordenar<img src={seasors} alt='Tijeras' /></button>
                                   </div>
                                   <img className={galleryImage} src={lowFadeV2} />
                              </div>
                              <p>Low Fade en V</p>
                         </div>

                         <div>
                              <div className={galleryItem}>
                                   <div className={divOrdenarCorte}>
                                        <img className={galleryImage} src={mohawk2} alt="" />
                                        <button className={ordenarCorte} onClick={clickBtnOrdenar}>Ordenar<img src={seasors} alt='Tijeras' /></button>
                                   </div>
                                   <img className={galleryImage} src={mohawk} alt="" />
                              </div>
                              <p>Mohawk</p>
                         </div>

                    </div>


               </div>
          </>

     )
}
