import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className='m-0 p-0 font-sans box-border decoration-0 scroll-smooth'>
     <Header/>
    
     <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
