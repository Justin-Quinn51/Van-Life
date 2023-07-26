import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getHostVans } from '../../api';

export default function Vans() {
  const [hostVans, setHostVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans();
        setHostVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  const hostVanElements = hostVans.map((hostVan) => (
    <Link key={hostVan.id} to={hostVan.id}>
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

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

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
