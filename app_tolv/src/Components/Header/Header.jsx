import React, { Component } from 'react';
import Logo from './src/Components/Foto/tolv.png';
import { Nav, Navbar, FormControl, Container, Form, Button } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import Activities from './Pages/Activities';
import  FoodBeverage from './Pages/Food &amp; beverage';
import Hotel from './Pages/Hotel';
import CorporateEvents from './Pages/Corporate events';
import BookingAndContact from './Pages/Booking and Contact';


//const Header = () => {
//return (
// <div>
//<a class="site-branding" href="https://tolvstockholm.se/en/" rel="home"><h1 class="site-title sprite">Tolv Stockholm</h1><h2 class="site-description">12.000 m2 mat och nöjen på nya sätt.</h2> </a>
//<a href="https://tolvstockholm.se/en/activities/">Activities</a>
//<a href="https://tolvstockholm.se/en/food-drink/">Food &amp; beverage</a>
//<a href="https://tolvstockholm.se/en/at-tolv/bohotel/">Hotel</a>
//<a href="https://tolvstockholm.se/en/for-foretag-2/">Corporate events</a>
//<a href="https://tolvstockholm.se/en/booking-and-contact/">Booking and Contact</a>
//<a target="_blank" href="https://www.facebook.com/tolvsthlm"><i class="_mi fa fa-facebook-square" aria-hidden="true"></i><span class="visuallyhidden">Facebook</span></a>
//<a target="_blank" href="https://www.instagram.com/tolvstockholm/"><i class="_mi fa fa-instagram" aria-hidden="true"></i><span class="visuallyhidden">Instagram</span></a>
//<Search/>
//<Language/>
//</div>
//);
//}

export default class header extends Component {
  render() {
    return (
      <>
        <Navbar fixed='top'collapseOnSelect extend='md' bg='dark' variant='dark' >
          <Container>
            <Navbar.Brand href='https://tolvstockholm.se/en/'>
              <img
                
                src={Logo}
                className='d-inline-block align-top'
                height='30'
                width='50'
                alt='Logo'
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav' />
            <Nav className='mr-auto'>
              <Nav.Link href='https://tolvstockholm.se/en/activities/' >Activities</Nav.Link>
              <Nav.Link href='https://tolvstockholm.se/en/food-drink/' >Food &amp; beverage</Nav.Link>
              <Nav.Link href='https://tolvstockholm.se/en/at-tolv/bohotel/' >Hotel</Nav.Link>
              <Nav.Link href='https://tolvstockholm.se/en/for-foretag-2/' >Corporate events</Nav.Link>
              <Nav.Link href='https://tolvstockholm.se/en/booking-and-contact/' >Booking and Contact</Nav.Link>
              <Nav.Link target="_blank" href="https://www.facebook.com/tolvsthlm">
                <i class="_mi fa fa-facebook-square" aria-hidden="true"></i>
                <span class="visuallyhidden">Facebook</span >
              </Nav.Link>
              <Nav.Link target="_blank" href="https://www.instagram.com/tolvstockholm/">
                <i class="_mi fa fa-instagram" aria-hidden="true"></i>
                <span class="visuallyhidden">Instagram</span>
              </Nav.Link>
            </Nav>
            <Form inline >
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant='outline-info'> Search </Button>
            </Form>
            <Button variant='outline-info'> Language </Button>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/activities' component={Activities} />
            <Route exact path='/food &amp; beverage' component={FoodBeverage} />
            <Route exact path='/hotel' component={Hotel} />
            <Route exact path='/corporate events' component={CorporateEvents} />
            <Route exact path='/booking and contact' component={BookingAndContact} />

          </Switch>
        </Router>
      </>
    )
  }
}
