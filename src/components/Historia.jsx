import React from 'react'
import {
     historia,
     historiaContainer,
     historiaTxt
} from '../scss/components/_Historia.module.scss'
export const Historia = () => {
     return (
          <div className={historia}>
               <div className={historiaContainer}>
                    <div className={historiaTxt}>
                         Doble Erre es tu barbería de barrio de confianza, fundada por Julio Guzmán con la intención de brindarte el mejor estilo posible. Ubicada en <span>Santa Cruz - Bolivia</span>, en la Radial 10 casi en el 4to anillo, en la Calle 2. No dudes en reservar tu <span>cita</span> y disfruta de un corte a <span>medida</span>, perfilado de cejas o de barba, solo para vos por un peluquero experimentado en un ambiente juvenil, calido y amigable, con el mejor ambiente musical elegido por vos.
                    </div>
               </div>
          </div>
     )
}
