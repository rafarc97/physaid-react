import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./components/Login.jsx";
import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home.jsx";
import { Footer } from "./components/Footer.jsx";
/* import { Nosotros } from "./components/Nosotros.jsx";
import { Testimonios } from "./components/Testimonios.jsx";
import { Contacto } from "./components/Contacto.jsx";
import { Recursos } from "./components/Recursos.jsx"; */
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const { isAuthenticated } = useAuth0();
  /* let currentURL = window.location.pathname; */

  /* if(currentURL === "/" || currentURL === ""){
    currentURL = "/home" ;
  } */


  return (
    <div className="App">
      { isAuthenticated ? (
        <>
          <Header />
            <Router> 
                <Route path="/" component={Home}/>
                {/* <Route path="/nosotros" component={Nosotros}/>
                <Route path="/testimonios" component={Testimonios}/>
                <Route path="/contacto" component={Contacto}/>
                <Route path="/recursos" component={Recursos}/> */}
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
