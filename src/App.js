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
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if(isLoading) return ( <div className="loading"><Loading></Loading></div> );
  

  return (
    <div className="App">
      { isAuthenticated ? (
        <>
          <Header />
            <Router>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/nosotros" component={Nosotros}/>
              <Route exact path="/empresa" component={Empresa}/>
              <Route path="/testimonios" component={Testimonios}/>
              <Route path="/contacto" component={Contacto}/>
              <Route path="/recursos" component={Recursos}/>
              <Route path="/tests" component={Tests}/>
              <Route path="/perfil" component={Profile}/>
              <Route path="/patrocinadores" component={Patrocinadores}/>
            </Router>
          <Footer />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;
