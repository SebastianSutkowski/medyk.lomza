import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './navigation/Navigation'
import Kontakt from './contact/Kontakt'
import Footer from './Footer/Footer'
import Home from './mainPage/Home'
import OfferSection from './OfferSection/OfferSection'
import About from './About/About'
import Timetable from './Timetable/Timetable'

class App extends Component {
  state = {}
  componentDidMount() {
    document.title = 'Akademia Sportu Medyk';
  }
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
      </BrowserRouter>
    );
  }
}

export default App;
