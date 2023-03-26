import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import CreateProduct from './pages/addProduct/AddProduct';
import UpdateProduct from './pages/updateProduct/UpdateProduct';
import DeleteProduct from './pages/deleteProduct/deleteProduct';
import SeeProduct from './pages/seeProduct/seeProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="product">
          <Route path='create' element={<CreateProduct />} />
          <Route path='update/:productId' element={<UpdateProduct />} />
          <Route path='delete/:productId' element={<DeleteProduct/>} />
          <Route path='see/:productId' element={<SeeProduct/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
