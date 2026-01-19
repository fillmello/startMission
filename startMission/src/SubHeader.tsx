import overlay from './assets/bannerHeaderOverlay.png'
import "./SubHeader.css"
import { Header } from './Header'

export function SubHeader(){
    return(
    <div className='size__container'>
        <Header />
        <img src={overlay} alt="overlay" className="overlay__image" />

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