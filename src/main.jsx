import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './footer.jsx'

function Header(){
  return(
    <div>
      <h1>
      My React App
    </h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    </div>
   
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
