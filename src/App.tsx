import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Trayectoria } from './components/Trayectoria'
import { Servicios } from './components/Servicios'
import { Capacidad } from './components/Capacidad'
import { Clientes } from './components/Clientes'
import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trayectoria />
        <Servicios />
        <Capacidad />
        <Clientes />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
