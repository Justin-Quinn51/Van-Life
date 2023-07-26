import { useParams, Link, NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getHostVans } from '../../api';

export default function HostVanDetails() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans(id);
        setCurrentVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  if (!currentVan) {
    return <h2>Loading...</h2>;
  }

  return (
    <section>
      <Link
        to='..'
        relative='path'
        className='flex justify-start gap-x-2 ml-7 my-8'
      >
        &larr;<span className='hover:underline'>Back to all vans</span>
      </Link>
      <div className='bg-white mx-4 p-4'>
        <div className='grid grid-cols-2 items-center'>
          <img src={currentVan.imageUrl} alt='' />
          <div className='text-left pl-12 flex flex-col gap-y-1.5'>
            <div className='bg-simple w-fit px-4 py-1 rounded-md text-vanTypeText text-base capitalize'>
              {currentVan.type}
            </div>
            <h2 className='text-xl font-semibold'>{currentVan.name}</h2>
            <p>
              <span className='font-semibold'>${currentVan.price}</span>/day
            </p>
          </div>
        </div>
        <nav className='flex gap-x-6 mt-3'>
          <NavLink
            to='.'
            end
            className={({ isActive }) =>
              isActive ? 'font-bold underline text-luxury' : null
            }
          >
            Details
          </NavLink>
          <NavLink
            to='pricing'
            className={({ isActive }) =>
              isActive ? 'font-bold underline text-luxury' : null
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to='photos'
            className={({ isActive }) =>
              isActive ? 'font-bold underline text-luxury' : null
            }
          >
            Photos
          </NavLink>
        </nav>
        <div className='text-left mt-3'>
          <Outlet context={{ currentVan }} />
        </div>
      </div>
    </section>
  );
}
