// import logo from './logo.svg';
import './App.css';
import Cards from './componentes/cards/cards.jsx';
import { useState } from 'react';
import Nav from './componentes/Nav/Nav.jsx';
import { Routes,Route, useLocation } from 'react-router-dom';
import About from './componentes/About/About';
import Detail from './componentes/Detail/Detail';
import Form from './componentes/Form/Form';
import Favorites from './componentes/favorites/Favorites';

function App() {

  const [characters, setCharacters] = useState([])
  const location = useLocation()
  const onSearch = (id) =>{
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (
    <div className="App">
    {location.pathname === '/' ? <Form/> : <Nav onSearch={onSearch}/>}
    
  
    

        <Routes>
          <Route path='/favorites' element={<Favorites/>} />
          <Route path='/home' element={<Cards onClose={onClose} characters={characters} />} /> 
          <Route path='/about' element={<About/>} />
          <Route path='/detail/:detailID' element={<Detail/>} />
      </Routes>
      
      
      

    </div>
  );
}

export default App;
