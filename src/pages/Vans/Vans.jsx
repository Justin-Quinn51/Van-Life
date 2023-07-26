import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const typeFilter = searchParams.get('type');

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div key={van.id} className='mb-6'>
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
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

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <section className='px-4 text-center mt-4'>
      <div>
        <h1 className='text-3xl text-luxury font-semibold mb-10'>
          Explore our van options
        </h1>
        <div className='flex justify-evenly gap-x-4 mb-10'>
          <button
            onClick={() => handleFilterChange('type', 'simple')}
            className={
              typeFilter === 'simple'
                ? 'text-vanTypeText bg-simple px-3 py-1 rounded-md cursor-pointer transition-all ease-in-out   hover:text-vanTypeText hover:bg-simple'
                : 'bg-vanTypeText text-FilterButtonText px-3 py-1 rounded-md cursor-pointer hover:text-vanTypeText hover:bg-simple'
            }
          >
            Simple
          </button>
          <button
            onClick={() => handleFilterChange('type', 'luxury')}
            className={
              typeFilter === 'luxury'
                ? 'text-vanTypeText bg-luxury px-3 py-1 rounded-md cursor-pointer transition ease-in-out hover:text-vanTypeText hover:bg-luxury'
                : 'bg-vanTypeText text-FilterButtonText px-3 py-1 rounded-md cursor-pointer hover:text-vanTypeText hover:bg-luxury'
            }
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilterChange('type', 'rugged')}
            className={
              typeFilter === 'rugged'
                ? 'text-vanTypeText bg-rugged px-3 py-1 rounded-md cursor-pointer transition ease-in-out hover:text-vanTypeText hover:bg-rugged'
                : 'bg-vanTypeText text-FilterButtonText px-3 py-1 rounded-md cursor-pointer hover:text-vanTypeText hover:bg-rugged'
            }
          >
            Rugged
          </button>
          {typeFilter ? (
            <button
              onClick={() => handleFilterChange('type', null)}
              className='text-FilterButtonText underline underline-offset-2 px-3 py-1 cursor-pointer active:bg-transparent'
            >
              Clear
            </button>
          ) : null}
        </div>
      </div>
      <div>{vanElements}</div>
    </section>
  );
}
