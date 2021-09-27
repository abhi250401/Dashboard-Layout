
import './App.css';
import Nav from './components/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Navbar from './components/Navbar';
import Table from './components/Table';
import Info from './components/info'



function App() {
  return (
    <div>
      <Router>


        <Navbar />

        <Nav />
        <Switch>
          <Route exact path="/managementTeam">
            <Info /></Route></Switch>
        <Switch>
          <Route exact path="/"> <Table /></Route></Switch>
      </Router>
    </div>
  );
}

export default App;
