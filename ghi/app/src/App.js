import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ShoesList from "./shoesList";
import Shoes from "./shoes";
import ShoeForm from "./shoeForm";


function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="shoeslist">
            <Route index element={<ShoesList />} />
          </Route>
          <Route path="shoesform">
            <Route index element={<ShoeForm />} />
          </Route>
          <Route path="shoescard">
            <Route index element={<Shoes />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
