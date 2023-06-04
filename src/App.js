import './App.css';
import Head from './head/Head';
import Header from './header/Header';
import IgmText from './imgtext/ImgText';
import Footer from './footer/Footer';

import { BrowserRouter as Router,  Route } from "react-router-dom";
import Sinistre from './forms/Sinistre';
import Contact from './forms/Contact';

function App() {
  return (
    <>
          <Router>
      <Head />
      <Header />
      <IgmText />
<Route exact path="/" component={Sinistre} />
    <Route  path="/contact" component={Contact} />
    <Footer />
</Router>
      
    </>
  );
}

export default App;
