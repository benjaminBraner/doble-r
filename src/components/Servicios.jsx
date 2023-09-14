import React from 'react'
import { servicios } from '../scss/components/_Servicios.module.scss'
import servicesLogo from '../assets/icons/services.svg'
export const Servicios = () => {
     return (
          <div className={servicios}>

               <div className="tituloServicios">
                    <h3>Servicios</h3>
                    <img src={servicesLogo} alt="" />
               </div>

               <div className="tiposServicios">
                    <div>
                         Corte de Cabello <br />
                         25Bs.
                    </div>
                    <div>
                         Corte de Cabello largo<br />
                         35Bs.
                    </div>
                    <div>
                         Cejas <br />
                         15Bs.
                    </div>
                    <div>
                         Barba <br />
                         15Bs.
                    </div>

               </div>

          </div>
     )
}
