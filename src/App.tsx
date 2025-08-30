import { Header } from './components/Header/Header';
import { ContentHome } from './components/Content/ContentHome';
import { ContentSectionEmpresa } from './components/Content/ContentSectionEmpresa';
import { ContentSectionTrabajos } from './components/Content/ContentSectionTrabajos';
import { ContentSectionContacto } from "./components/Content/ContentSectionContacto";

function App() {
  return (
    <>
      <Header />
      <section id="inicio">
        <ContentHome />
      </section>
      <section id="empresa">
        <ContentSectionEmpresa />
      </section>
      <section id="trabajos">
        <ContentSectionTrabajos />
      </section>
      <section id="contacto">
        <ContentSectionContacto />
      </section>
    </>
  );
}

export default App;
