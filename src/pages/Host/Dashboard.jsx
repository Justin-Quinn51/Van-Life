import { useEffect, useState } from 'react';
import { getHostVans } from '../../api';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getHostVans()
      .then((data) => setVans(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  function renderVanElements(vans) {
    const hostVanElements = vans.map((van) => (
      <section
        className='grid grid-cols-2 place-items-center bg-white mb-6 mx-8 p-3 mt-6'
        key={van.id}
      >
        <div className=''>
          <img src={van.imageUrl} alt='' />
        </div>

        <div className='flex flex-col items-center justify-between'>
          <div className='mb-5'>
            <h2 className='font-semibold text-lg flex-wrap'>{van.name}</h2>
            <p className=''>
              <span className='font-bold text-md'>${van.price}</span>
              /day
            </p>
          </div>

          <Link to={`vans/${van.id}`}>View</Link>
        </div>
      </section>
    ));
    return <section>{hostVanElements}</section>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <section className='flex justify-between items-center bg-vanTypeText px-8'>
        <div className='text-left flex flex-col gap-y-3 py-5'>
          <h3 className='text-3xl font-semibold'>Welcome!</h3>
          <p className='text-sm text-lightestGray'>
            Income last
            <span className='underline underline-offset-2 pl-1'>30 days</span>
          </p>
          <h2 className='text-3xl font-semibold'>$2,260</h2>
        </div>
        <Link className='text-sm' to='income'>
          Details
        </Link>
      </section>
      <section className='bg-reviewBg flex justify-between p-8'>
        <div className='flex'>
          <div className='flex gap-x-3'>
            <h2 className='font-semibold'>Review Score</h2>
            <img src='../../../Star.svg' alt='' />
          </div>
          <p>
            <span className='font-semibold pl-2'>5.0</span>/5
          </p>
        </div>
        <Link className='text-sm' to='reviews'>
          Details
        </Link>
      </section>
      <section className='bg-offWhite'>
        <div className='flex justify-between items-center px-8 my-6'>
          <h2 className='text-xl font-semibold'>Your listed vans</h2>
          <Link className='text-sm' to='vans'>
            View all
          </Link>
        </div>
        {loading && !vans ? (
          <h2>Loading...</h2>
        ) : (
          <>{renderVanElements(vans)}</>
        )}
      </section>
    </>
  );
}
