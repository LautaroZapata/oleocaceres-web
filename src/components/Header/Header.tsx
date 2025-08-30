export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-around w-full mx-auto bg-white/10 backdrop-blur-md rounded-lg p-4">
        <img src="/LOGO_OLEOCACERES.png" alt="logoOleocaceres" className="h-16" />
        <ul className="flex space-x-12 my-auto text-xl font-medium text-white ">
          <li><a href="#inicio" className="hover:underline">Inicio</a></li>
          <li><a href="#empresa" className="hover:underline">Empresa</a></li>
          <li><a href="#trabajos" className="hover:underline">Trabajos</a></li>
          <li><a href="#contacto" className="hover:underline">Contacto</a></li>
        </ul>
      </div>
    </header>
  )
}
