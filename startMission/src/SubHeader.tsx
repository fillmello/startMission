import overlay from './assets/quadrado_branco@2x.png'
import quadradinhos from './assets/quadradinhos@2x.png'
import aro1 from './assets/aro_1@2x.png'
import aro2 from './assets/aro_2@2x.png'
import bolas from './assets/bolas@2x.png'
import pt from './assets/pt@2x.png'
import "./SubHeader.css"
import { Header } from './Header'

export function SubHeader(){
    return(

        
    <div className='size__container'>


        <Header />
        <img src={overlay} alt="overlay" className="overlay__image" />
        <img src={quadradinhos} alt="quadradinhos" className='quadradinhos' />
        <img src={aro1} alt="aro 1" className='aro aro-1' />
        <img src={aro2} alt="aro 2" className='aro aro-2' />
        <img src={pt} alt="pt" className='pt' />
        <img src={bolas} alt="bolas" className='bolas' />
        <ul className="hero__bullets absolute left-[5.8cqi] top-[27.5cqi] z-50 grid gap-[2.6cqi]" aria-hidden="true">
          <li className="hero__bullet w-2 h-2 rounded-full block bg-[#c74b3c]"></li>
          <li className="hero__bullet w-2 h-2 rounded-full block bg-[#c74b3c]"></li>
          <li className="hero__bullet w-2 h-2 rounded-full block bg-[#c74b3c]"></li>
          <li className="hero__bullet w-2 h-2 rounded-full block bg-[#c74b3c]"></li>
        </ul>

        <h1 className="hero__title">
            Assuma o seu
        <br />
            lugar no reino:
        </h1>

        <p className="hero__cta">
            sim, você tem
        <br />
            um chamado
        <br />
            para missões.
        </p>
    </div>)
}