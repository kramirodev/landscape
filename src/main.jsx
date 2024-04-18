import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Header} from "./components/Header/Header.jsx"
import { Sobre } from "./components/sobre/Sobre.jsx"
import { Contato } from './components/Contato/contato.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Sobre categoria="sobreMim"/>
    <Contato categoria="contato"/>
  </React.StrictMode>,
)
