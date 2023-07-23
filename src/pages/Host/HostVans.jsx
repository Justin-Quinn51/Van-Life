import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Vans() {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetch('/api/host/vans')
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);

  const hostVanElements = hostVans.map((hostVan) => (
    <Link key={hostVan.id} to={`/host/vans/${hostVan.id}`}>
      <section className='mb-6'>
        <div className='grid grid-cols-2 bg-white mx-6'>
          <img className='p-3' src={hostVan.imageUrl} alt='' />
          <div className='grid place-content-center'>
            <h2 className='text-lg font-bold'>{hostVan.name}</h2>
            <p className='text-md'>
              <span className='font-bold'>${hostVan.price}</span>/day
            </p>
          </div>
        </div>
      </section>
    </Link>
  ));

  return (
    <section>
      <h1 className='text-3xl font-bold my-4'>Your Listed Vans</h1>
      <div className='bg-offWhite'>
        {hostVans.length > 0 ? (
          <section>{hostVanElements}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
