import React from 'react';
import './App.css';
//import { Container, Row, Col } from 'react-grid-system';
//import { useScreenClass } from 'react-grid-system';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap-daterangepicker/daterangepicker.css';
import Header from './Components/Header/Header';
import Content from './Content';

//import Footer from './Footer';
//import Search from './Search';


//const App = () => {
//return (
//<div>
//<Header />
//<Content />
//<Footer />
//</div>
//)
//}

function App() {
  return (
    <div>
  <Header/>
  <Content/>

    </div>
  );
}

export default App;
