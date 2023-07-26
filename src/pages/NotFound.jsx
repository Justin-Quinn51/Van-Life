import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='grid justify-center gap-6 text-3xl my-40 px-7'>
      <h1 className='place-self-end'>
        Sorry, the page you were looking for was not found.
      </h1>
      <button className='text-center py-3 bg-luxury text-white text-lg rounded-md cursor-pointer font-semibold transition ease-in-out'>
        <Link to='/'>Return to home</Link>
      </button>
    </div>
  );
}
