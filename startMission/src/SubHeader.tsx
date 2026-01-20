import overlay from './assets/quadrado_branco@2x.png'
import quadradinhos from './assets/quadradinhos@2x.png'
import aro1 from './assets/aro_1@2x.png'
import aro2 from './assets/aro_2@2x.png'
import bolas from './assets/bolas@2x.png'
import pt from './assets/pt@2x.png'
import { motion } from 'motion/react'
import { TypeAnimation } from 'react-type-animation'
import "./SubHeader.css"
import { Header } from './Header'

export function SubHeader(){
    return(

        
    <div className='size__container'>


        <Header />
        <img src={overlay} alt="overlay" className="overlay__image" />
        <img src={quadradinhos} alt="quadradinhos" className='quadradinhos' />
        <motion.img 
          src={aro1} 
          alt="aro 1" 
          className='aro aro-1' 
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 720] }}
          transition={{ 
            duration: 4,
            ease: [0.16, 1, 0.3, 1]
          }}
        />
        <motion.img 
          src={aro2} 
          alt="aro 2" 
          className='aro aro-2' 
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -720] }}
          transition={{ 
            duration: 4,
            ease: [0.16, 1, 0.3, 1]
          }}
        />
        <motion.img 
          src={pt} 
          alt="pt" 
          className='pt'
          animate={{ rotate: [0, 60, 140, 230, 330, 440, 550, 660, 770, 860, 940, 1010, 1050, 1080] }}
          transition={{ 
            duration: 16,
            times: [0, 0.04, 0.10, 0.18, 0.27, 0.37, 0.48, 0.58, 0.68, 0.78, 0.86, 0.93, 0.98, 1],
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.img 
          src={bolas} 
          alt="bolas" 
          className='bolas'
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ 
            rotate: [0, 720],
            opacity: 1
          }}
          transition={{ 
            rotate: {
              duration: 4,
              ease: [0.16, 1, 0.3, 1]
            },
            opacity: {
              duration: 0.3,
              ease: "easeOut"
            }
          }}
        />
        <ul className="hero__bullets absolute left-[5.8cqi] top-[27.5cqi] z-50 grid gap-[2.6cqi]" aria-hidden="true">
          <li className="hero__bullet w-2 h-2 rounded-full block bg-[#c74b3c]"></li>
          <li className="hero__bullet w-2 h-2 rounded-full block bg-[#c74b3c]"></li>
          <li className="hero__bullet w-2 h-2 rounded-full block bg-[#c74b3c]"></li>
          <li className="hero__bullet w-2 h-2 rounded-full block bg-[#c74b3c]"></li>
        </ul>

        <h1 className="hero__title">
            <TypeAnimation
              sequence={[
                'Assuma o seu',
                300,
                'Assuma o seu\nlugar no reino:',
              ]}
              speed={70}
              wrapper="span"
              cursor={false}
              style={{ whiteSpace: 'pre-line' }}
            />
        </h1>

        <p className="hero__cta">
            <TypeAnimation
              sequence={[
                700,
                'sim, você tem',
                250,
                'sim, você tem\num chamado',
                250,
                'sim, você tem\num chamado\npara missões.',
              ]}
              speed={70}
              wrapper="span"
              cursor={false}
              style={{ whiteSpace: 'pre-line' }}
            />
        </p>

    </div>)
}