
import {
     socialMediaContainer,
     card, socialContainer, containerOne, containerTwo, containerThree, containerFour, socialSvg,
} from '../scss/components/_Social.module.scss'
import instagramLogo from '../assets/icons/instagram.svg'
import tiktokLogo from '../assets/icons/tiktok.svg'
// import facebookLogo from '../assets/icons/facebook.svg'
import whatsappLogo from '../assets/icons/whatsapp.svg'

export const Social = () => {
     return (
          <div className={socialMediaContainer}>
               <p>FOLLOW DOBLE R</p>
               <p>Mantente informado sobre novedades y ofertas especiales que te ofrece el equipo de Doble R.</p>
               <div className={card} >
                    <a
                         href="https://www.instagram.com/doble.eree/"
                         className={`${socialContainer} ${containerOne}`}
                         target='_blank'
                    >
                         <img src={instagramLogo} className={socialSvg} />
                    </a>

                    <a
                         href="https://www.tiktok.com/@doble.eree"
                         className={`${socialContainer} ${containerTwo}`}
                         target='_blank'
                    >
                         <img src={tiktokLogo} className={socialSvg} />
                    </a>

                    <a
                         href="https://api.whatsapp.com/send?phone=59176852997"
                         className={`${socialContainer} ${containerFour}`}
                         target='_blank'
                    >
                         <img src={whatsappLogo} className={socialSvg} />

                    </a>
               </div >
          </div>
     )
}
