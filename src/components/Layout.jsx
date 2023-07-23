import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='grow bg-offWhite'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
