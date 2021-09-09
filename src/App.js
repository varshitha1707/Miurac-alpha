
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import HomeM from './Pages/Home-msme/HomeM';
import About from './Pages/About/About'
import './App.css';
import Contact from './Pages/Contact-us/Contact';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <HomeM />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
