// import './App.css';
import {Switch, Route} from 'react-router-dom'
import global from './global'
import indonesia from './Indonesia'
import provinsi from './Provinsi'
import {Navbar, Nav} from 'react-bootstrap'

const App=()=> {
  return (
    <div>
      <Navbar bg="danger" expand="lg">
  <Navbar.Brand href=".">Covid Tracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href=".">Global</Nav.Link>
      <Nav.Link href="/indonesia">Indonesia</Nav.Link>
      <Nav.Link href="/provinsi">Provinsi</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      <Switch>
        <Route exact path='/' component={global}/>
        <Route path='/indonesia' component={indonesia}/>
        <Route path='/provinsi' component={provinsi}/>
      </Switch>
    </div>
  );
}

export default App;
