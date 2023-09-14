import { useState } from 'react'
import { CorteContext } from './components/CorteContext'
import { Historia } from './components/Historia'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Reserva } from './components/Reserva'
import { Servicios } from './components/Servicios'
import { Social } from './components/Social'
import { Trabajos } from './components/Trabajos'
import { Ubicacion } from './components/Ubicacion'

function App() {

     const [corte, setCorte] = useState("");

     return (
          <>
               <CorteContext.Provider value={{ corte, setCorte }}>

                    <Navbar />
                    <Home />
                    <Historia />
                    {/* <Servicios /> */}
                    <Trabajos />
                    <Social />
                    <Ubicacion />
                    <Reserva />

               </CorteContext.Provider>
          </>
     )
}

export default App
