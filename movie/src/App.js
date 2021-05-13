
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Movies from './components/Movies'
import Actors from './components/Actors'
import Tv from './components/Tv'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        
        <Route path="/movies" component={Movies} />
        <Route path="/actors" component={Actors} />
        <Route path="/tv" component={Tv} />
        <Route path="/" component={Home} />
      </Switch>
     
    </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)


export default App;
// const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${result}`;