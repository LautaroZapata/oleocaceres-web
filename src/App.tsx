import { ScrollProgress } from './components/ScrollProgress'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Empresa } from './components/Empresa'
import { Servicios } from './components/Servicios'
import { Clientes } from './components/Clientes'
import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Empresa />
        <Servicios />
        <Clientes />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
