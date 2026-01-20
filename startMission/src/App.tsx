import banner from './assets/bannerHeader.jpeg'
import './App.css'
import { SubHeader } from './SubHeader'

function App() {
  return (
    <div className="page" style={{ backgroundImage: `url(${banner})` }}>      
      <SubHeader />
    </div>
  )
}

export default App
