import React, { useContext } from 'react'
import {
     contact,
     formContainer,
     contactForm,
     contactInput,
     btnSendForm,
     fadeSelect
} from '../scss/components/_Reserva.module.scss'
import { CorteContext } from './CorteContext';


export const Reserva = () => {
     const { corte } = useContext(CorteContext);


     const enviarMensaje = (e) => {
          e.preventDefault();
          const { nombre, telefono, hora, fecha, corte, preferencias } = Object.fromEntries(new window.FormData(e.target))
          const url = "https://api.whatsapp.com/send?phone=+59176852997&text=";
          const mensaje = `${url}Buenas, te hablo de la pagina de Doble R.%0ANombre: ${nombre}.%0ATelefono: ${telefono}.%0AFecha cita: ${fecha}%0AHora cita: ${hora}%0ACorte: ${corte}. %0A%0A Queria ver si podriamos coordinar una cita para un corte porfavor. ${preferencias}`
          window.open(mensaje, "_blank")
     }

     return (
          <>
               <section className={contact} id="contact">
                    <div>
                         <h4>Reserva</h4>
                         <div className={formContainer}>
                              <form className={contactForm} onSubmit={enviarMensaje}>
                                   <input
                                        type="text"
                                        placeholder="Nombre Completo"
                                        className={contactInput}
                                        name="nombre"
                                        autoComplete='off'
                                   />
                                   <input
                                        type="number"
                                        placeholder="Telefono"
                                        className={contactInput}
                                        name="telefono"
                                        autoComplete='off'
                                   />
                                   <label htmlFor="fadeSelect">Fecha de tu cita</label>
                                   <input
                                        type="date"
                                        className={contactInput}
                                        name="fecha"
                                        autoComplete='off' />
                                   <label htmlFor="fadeSelect">Hora de la cita</label>
                                   <input
                                        type="time"
                                        id="hora"
                                        className={contactInput}
                                        name="hora" />
                                   <label htmlFor="fadeSelect">Tipo de corte</label>
                                   <select className={`${fadeSelect} ${contactInput}`} name="corte" value={corte}>
                                        <option value="Burst Fade">Burst Fade</option>
                                        <option value="Low Fade">Low Fade</option>
                                        <option value="Taper Fade">Tapper Fade</option>
                                        <option value="Low Fade en V">Low Fade en V</option>
                                        <option value="Mid Fade">Mid Fade</option>
                                        <option value="Mohawk">Mohawk</option>
                                        <option value="Personalizado">Personalizado</option>
                                   </select>
                                   <textarea
                                        name="preferencias"
                                        cols="30"
                                        rows="10"
                                        placeholder="Preferencias"
                                        className={contactInput}
                                        autoComplete='off'>
                                   </textarea>
                                   <input
                                        value="Send"
                                        type="submit"
                                        className={`${contactInput} ${btnSendForm}`}
                                   />
                              </form>
                         </div>
                    </div>
               </section>

          </>
     )
}
