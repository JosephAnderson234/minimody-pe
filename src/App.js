//images
import img from './img/imagenLogo.jpg';

//Modules
import React, {useState} from 'react';
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import 'animate.css';

//Components
import Foter from './components/foter';
//Pages
import Home from './pages/home';
import Contacto from './pages/contacto';

const url = "http://192.168.254.110:2000/post";
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Authorization failed : ' + error.message));



function Nav() {
  const [isCircle, setIsCircle] = useState(true);

  return (
    <nav className="navegation">
      <ul className="container">
        <div onClick={()=> setIsCircle(!isCircle)}>
          <ion-icon id="main-show" name="reorder-three-outline"></ion-icon>
        </div>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? 'tlt' : 'tlt')}>Minimody</NavLink>
        </li>
        <li>
          <img src={img} alt="i1" />
        </li>
      </ul>
      <ul className={ isCircle ? "ctn": "ctn2" }>
        <li>
          <NavLink to="/" className={({isActive}) => (isActive ? 'linkAC' : 'link')}> <ion-icon name="home-outline"></ion-icon> Home</NavLink>
        </li>
        <li>
          
          <NavLink to="/contacto" className={({isActive}) => (isActive ? 'linkAC' : 'link')}>
            <ion-icon name="people-circle-outline"></ion-icon>Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      <Foter/>
    </BrowserRouter>
  );
}

export default App;
