import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <header className='bg-offWhite'>
        <nav className='flex justify-between items-center py-9 px-6'>
          <Link to='/'>
            <img className='w-36' src='/vanLogo.png' alt='Van life Logo' />
          </Link>
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
      <section className='text-veryDarkGray'>
        <img
          src='/image 55.svg'
          alt='Man sitting atop camper van looking up at the sky'
        />
        <div className='grid gap-y-6 mt-10 px-6'>
          <h2 className='text-2xl font-semibold'>
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
          <p className='text-base'>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className='text-base'>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className='bg-peach py-10 px-8 mb-10'>
            <h3 className='text-2xl mb-5'>
              Your destination is waiting. Your van is ready.
            </h3>
            <Link className='text-base bg-veryDarkGray text-white font-semibold py-3 px-5 rounded-lg'>
              Explore our vans
            </Link>
          </div>
        </div>
      </section>
      <footer className='text-center bg-darkGray py-7 px-24'>
        <small className='text-lightGray'>Ⓒ 2022 #VANLIFE</small>
      </footer>
    </>
  );
}
