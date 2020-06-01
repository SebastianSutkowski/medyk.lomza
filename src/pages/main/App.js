import React, { Component, useEffect } from 'react';
import './App.css';
import { HashRouter, Route, Switch, useLocation } from 'react-router-dom';
import Navigation from './navigation/Navigation'
import Kontakt from './contact/Kontakt'
import Footer from './Footer/Footer'
import Home from './mainPage/Home'
import OfferSection from './OfferSection/OfferSection'
import About from './About/About'
import Timetable from './Timetable/Timetable'
import { createBrowserHistory } from "history";

const App = () => {
  window.onhashchange = function () {
    const history = createBrowserHistory()
    if (history.location.hash != "*/contact") {
      if (!document.getElementById("fb-root")) {
        return;
      } else
        document.getElementById('fb-root').remove()
    }
  }

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main>
          <article className="page">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/oferta" component={OfferSection} />
              <Route path="/contact" component={Kontakt} />
              <Route path="/about" component={About} />
              <Route path="/actual" component={Timetable} />
            </Switch>
          </article>
        </main>
        <footer>
          <Footer />
        </footer>

      </div>
    </HashRouter>
  );
}

export default App;

