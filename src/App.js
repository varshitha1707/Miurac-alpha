
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import HomeM from './Pages/Home-msme/HomeM';
import './App.css';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
