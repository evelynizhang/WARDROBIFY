import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ShoesList from "./shoesList";

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="shoeslist">
            <Route index element={<ShoesList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
