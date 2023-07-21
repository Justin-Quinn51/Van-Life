import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-offWhite flex justify-between items-center py-9 px-6'>
      <Link to='/'>
        <img className='w-36' src='/vanLogo.png' alt='Van life Logo' />
      </Link>
      <nav className=''>
        <ul className='flex gap-4 text-lightestGray'>
          <li>
            <Link to='/host' className='text-md cursor-pointer'>
              Host
            </Link>
          </li>
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
  );
}
