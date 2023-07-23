import { NavLink, Outlet } from 'react-router-dom';

export default function HostLayout() {
  return (
    <div className='bg-offWhite'>
      <nav className='flex justify-evenly'>
        <NavLink
          to='.'
          end
          className={({ isActive }) =>
            isActive ? 'font-bold underline text-luxury' : null
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to='income'
          className={({ isActive }) =>
            isActive ? 'font-bold underline text-luxury' : null
          }
        >
          Income
        </NavLink>
        <NavLink
          to='vans'
          className={({ isActive }) =>
            isActive ? 'font-bold underline text-luxury' : null
          }
        >
          Vans
        </NavLink>
        <NavLink
          to='reviews'
          className={({ isActive }) =>
            isActive ? 'font-bold underline text-luxury' : null
          }
        >
          Reviews
        </NavLink>
      </nav>
      <div className='text-center mt-5'>
        <Outlet />
      </div>
    </div>
  );
}
