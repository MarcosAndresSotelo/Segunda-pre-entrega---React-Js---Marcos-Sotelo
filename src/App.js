
import Navbar from './components/navbar/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainerLivCom from './components/itemListContainer/ItemListContainerLivCom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/inicio/Inicio';


function App() {
  return (

    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/livingcomedor/:productosLivCom' element={<ItemListContainerLivCom />} />
      </Routes>


    </BrowserRouter>

  );
}

export default App;
