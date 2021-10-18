import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './Pages/Banner/Banner';
import Header from './Pages/Header/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Banner></Banner>
          </Route>
          <Route exact path="/home">
            <Header></Header>
            <Banner></Banner>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
