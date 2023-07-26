import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='my-24'>
      <section className='grid bg-offWhite place-content-center px-7 gap-y-6 h-96 bg-hero-img bg-gradient bg-no-repeat bg-cover bg-center object-center'>
        <h1 className='text-white text-4xl font-bold drop-shadow-2xl'>
          You got the travel plans, we got the travel vans.
        </h1>
        <p className='text-white text-base'>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          to='vans'
          className='bg-peach text-center text-white text-base rounded-md px-3.5 py-2.5 mt-5'
        >
          Find your van
        </Link>
      </section>
    </div>
  );
}
