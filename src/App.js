
import Navbar from './components/navbar/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainerLivCom from './components/itemListContainer/ItemListContainerLivCom';
import ItemListContainerDorBanio from './components/itemListContainer/ItemListContainerDorBanio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/inicio/Inicio';
import ItemDetailContainerLivCom from './components/itemDetailContainer/ItemDetailContainerLivDor';
import AcercaDe from './components/acercaDe/AcercaDe';
import Contacto from './components/contacto/Contacto';


function App() {
  return (

    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/acercaDe' element={<AcercaDe />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/livingcomedor' element={<ItemListContainerLivCom />} />
        <Route path='/livingcomedor/:categoria' element={<ItemListContainerLivCom />} />
        <Route path="/detalle/:itemIdLivCom" element={ <ItemDetailContainerLivCom />} />
        <Route path='/dormitorioBanio' element={<ItemListContainerDorBanio />} />
        <Route path='/dormitorioBanio/:categoria' element={<ItemListContainerDorBanio />} />
      </Routes>


    </BrowserRouter>

  );
}

export default App;
