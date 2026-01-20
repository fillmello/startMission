import banner from './assets/bannerHeader.jpeg'
import './App.css'
import { SubHeader } from './SubHeader'
import { Marquee } from './Marquee'

function App() {
  return (
    <div className="page" style={{ backgroundImage: `url(${banner})` }}>      
      <SubHeader />
        <Marquee 
          className="bg-[#111111] text-[#FFFFFF] mt-4"
        words={[
          "GOD, I'M AVAILABLE", "GOD, I'M AVAILABLE", "GOD, I'M AVAILABLE", "GOD, I'M AVAILABLE"
        ]}
        speed={16}
        direction="left"
      />
    </div>
  )
}

export default App
