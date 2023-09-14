import React from 'react'
import dobleRUbicacion from '../assets/images/dobleRUbicacion.jpg'
import {
     ubicacion, ubicImgCont
} from '../scss/components/_Ubicacion.module.scss'
export const Ubicacion = () => {
     return (
          <section className={ubicacion}>
               <div>
                    <h4>Ubicación</h4>
                    <div className={ubicImgCont}>
                         <img src={dobleRUbicacion} alt="Ubicacion de Doble R" />
                         <a href="https://www.google.com/maps/place/17%C2%B048'23.6%22S+63%C2%B009'09.7%22W/@-17.8065662,-63.1552772,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-17.8065662!4d-63.1527023?hl=es&entry=ttu" target="_blank"></a>
                    </div>
               </div>
          </section>
     )
}
