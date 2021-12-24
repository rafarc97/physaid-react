import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./components/Login.jsx";
import { Loading } from "./components/Loading.jsx";
import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home.jsx";
import { Footer } from "./components/Footer.jsx";
import { Nosotros } from "./components/Nosotros.jsx";
import { Empresa } from "./components/Empresa.jsx";
import { Testimonios } from "./components/Testimonios.jsx";
import { Contacto } from "./components/Contacto.jsx";
import { Recursos } from "./components/Recursos.jsx";
import { Tests } from "./components/Tests.jsx";
import { Profile } from "./components/Profile.jsx";
import { Patrocinadores } from "./components/Patrocinadores.jsx";
import "./App.css";
import { Route, Routes } from 'react-router-dom';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if(isLoading) return ( <div className="loading"><Loading></Loading></div> );
  

  return (
    <div className="App">
      { isAuthenticated ? (
        <>
          <Header />
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/home" element={<Home/>} />
              <Route exact path="/nosotros" element={<Nosotros/>}/>
              <Route exact path="/empresa" element={<Empresa/>}/>
              <Route path="/testimonios" element={<Testimonios/>}/>
              <Route path="/contacto" element={<Contacto/>}/>
              <Route path="/recursos" element={<Recursos/>}/>
              <Route path="/tests" element={<Tests/>}/>
              <Route path="/perfil" element={<Profile/>}/>
              <Route path="/patrocinadores" element={<Patrocinadores/>}/>
            </Routes>
          <Footer />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;
