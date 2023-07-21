import { Link, Outlet } from 'react-router-dom';

export default function HostLayout() {
  return (
    <>
      <nav className='flex justify-around'>
        <Link to='/host'>Dashboard</Link>
        <Link to='/host/income'>Income</Link>
        <Link to='/host/reviews'>Reviews</Link>
      </nav>
      <div className='text-center mt-5'>
        <Outlet />
      </div>
    </>
  );
}
