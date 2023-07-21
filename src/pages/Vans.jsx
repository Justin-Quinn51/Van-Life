import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className='mb-6'>
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt='Picture of Van' />
        <section className='mt-4'>
          <div className='flex justify-between text-luxury mb-2'>
            <h3 className='text-inherit font-bold text-lg'>{van.name}</h3>
            <p className='text-inherit'>
              $<span className='text-lg font-bold'>{van.price}</span>/day
            </p>
          </div>
          <div
            className={
              van.type === 'simple'
                ? 'bg-simple text-vanTypeText text-base  px-7 py-3 max-w-fit capitalize rounded-lg'
                : van.type === 'rugged'
                ? 'bg-rugged text-vanTypeText text-base  px-6 py-1.5 max-w-fit capitalize rounded-lg'
                : 'bg-luxury text-vanTypeText text-base  px-6 py-3 max-w-fit capitalize rounded-lg'
            }
          >
            {van.type}
          </div>
        </section>
      </Link>
    </div>
  ));
  return (
    <div className='px-4 text-center mt-14'>
      <h1 className='text-3xl text-luxury font-semibold mb-4'>
        Explore our van options
      </h1>
      {vanElements}
    </div>
  );
}
