import React from 'react'
import {Route, Switch} from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/page-home/home.component';
import AboutPage from './pages/page-about/about.component';
import OfferPage from './pages/page-offer/offer.components';
import PartnershipPage from './pages/page-partnership/partnership.component';
import ContactPage from './pages/page-contact/contact.component';
import EmptyPage from './pages/page-empty/empty.component';

import "./App.css";

function App() {
  return (
    <>
      <Navigation/>
      <div className='main-container'>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/o-nas' component={AboutPage}/>
          <Route exact path='/oferta' component={OfferPage}/>
          <Route exact path='/wspolpraca' component={PartnershipPage}/>
          <Route exact path='/kontakt' component={ContactPage}/>
          <Route component={EmptyPage}/>
        </Switch>
      </div>
      <Footer/>
    </>
  );
}

export default App;
