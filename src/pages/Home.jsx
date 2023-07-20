import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <header className='bg-offWhite'>
        <nav className='flex justify-between items-center py-9 px-6'>
          <img className='w-36' src='/vanLogo.png' alt='Van life Logo' />
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
      <section className='grid bg-offWhite place-content-center px-7 gap-y-6 h-96 bg-hero-img bg-gradient bg-no-repeat bg-center object-center'>
        <h1 className='text-white text-4xl font-bold drop-shadow-2xl'>
          You got the travel plans, we got the travel vans.
        </h1>
        <p className='text-white text-base'>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link className='bg-peach text-center text-white text-base rounded-md px-3.5 py-2.5 mt-5'>
          Find your van
        </Link>
      </section>
      <footer className='text-center bg-darkGray py-7 px-24'>
        <small className='text-lightGray'>Ⓒ 2022 #VANLIFE</small>
      </footer>
    </>
  );
}
