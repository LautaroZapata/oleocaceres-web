
export const Header = () => {
  return (
    <>
      <header className="bg-amber-950 text-white p-4">
        <div className="flex justify-between w-3/4 mx-auto">
          <img src="/LOGO_OLEOCACERES.png" alt="logoOleocaceres" className="h-16" />
          <ul className="flex space-x-12 my-auto text-xl font-medium">
            <li><a href="/">Inicio</a></li>
            <li><a href="/empresa">Empresa</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
        
      </header>
    </>
  )
}
