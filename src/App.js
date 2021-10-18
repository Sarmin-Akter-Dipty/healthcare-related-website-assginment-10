import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './Pages/Banner/Banner';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import MainService from './Pages/Service/MainService';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Banner></Banner>
            <MainService></MainService>
            <Footer></Footer>
          </Route>
          <Route exact path="/home">
            <Header></Header>
            <Banner></Banner>
            <MainService></MainService>
            <Footer></Footer>
          </Route>
          <Route exact path="/services">
            <MainService></MainService>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
