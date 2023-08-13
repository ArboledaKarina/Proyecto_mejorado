
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Abaut from './views/About';
import Ofertas from './views/Contacts';
import { Route, Routes } from 'react-router-dom';
import Productos from './views/FiltroProducto';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path= '/' element={<Home/>}/>
            <Route path= 'about' element={<Abaut/>}/>
            <Route path= 'ofertas' element={<Ofertas/>}/>
            <Route path= 'productos' element={<Productos/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
