import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Banner from './Pages/Banner/Banner';
import Contact from './Pages/Contact/Contact';
import AuthProvider from './Pages/context/AuthProvider';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import MainService from './Pages/Service/MainService';
import SingleDetails from './Pages/Service/SingleDetails';
import Testimonial from './Pages/Testimonial/Testimonial';
import Pricing from './Pages/Pricing/Pricing';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Banner></Banner>
              <MainService></MainService>
              <Contact></Contact>
              <Testimonial></Testimonial>
            </Route>
            <Route path="/home">
              <Banner></Banner>
              <MainService></MainService>
              <Contact></Contact>
              <Testimonial></Testimonial>
            </Route>
            <Route path="/services">
              <MainService></MainService>
            </Route>
            <PrivateRoute path="/singledetails/:id">
              <SingleDetails></SingleDetails>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute path="/pricing">
              <Pricing></Pricing>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
