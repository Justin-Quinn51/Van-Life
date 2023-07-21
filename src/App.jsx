import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetails from './pages/VanDetails';
import '../server';

function App() {
  return (
    <BrowserRouter>
      <header className='bg-offWhite flex justify-between items-center py-9 px-6'>
        <Link to='/'>
          <img className='w-36' src='/vanLogo.png' alt='Van life Logo' />
        </Link>
        <nav className=''>
          <ul className='flex gap-4 text-lightestGray'>
            <li>
              <Link
                className='text-md cursor-pointer hover:bg-gray-700'
                to='/about'
              >
                About
              </Link>
            </li>
            <li>
              <Link className='text-md cursor-pointer' to='/vans'>
                Vans
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetails />} />
      </Routes>
      <footer className='text-center bg-darkGray py-7 px-24'>
        <small className='text-lightGray'>Ⓒ 2023 #VANLIFE</small>
      </footer>
    </BrowserRouter>
  );
}

export default App;
