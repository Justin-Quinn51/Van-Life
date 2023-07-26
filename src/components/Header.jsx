import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  function fakeLogOut() {
    localStorage.removeItem('loggedin');
  }

  return (
    <header className='bg-offWhite flex justify-between items-center py-9 px-4'>
      <Link to='/'>
        <img className='w-36' src='/vanLogo.png' alt='Van life Logo' />
      </Link>
      <nav className=''>
        <ul className='flex gap-3 text-lightestGray'>
          <li>
            <NavLink
              to='/host'
              className={({ isActive }) =>
                isActive ? 'font-bold underline text-luxury' : null
              }
            >
              Host
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? 'font-bold underline text-luxury' : null
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/vans'
              className={({ isActive }) =>
                isActive ? 'font-bold underline text-luxury' : null
              }
            >
              Vans
            </NavLink>
          </li>
          <li>
            <Link to='/login' className=''>
              <img src='../../userCircle.svg' alt='' />
            </Link>
          </li>
          <button onClick={fakeLogOut}>X</button>
        </ul>
      </nav>
    </header>
  );
}
