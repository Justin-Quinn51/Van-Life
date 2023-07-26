import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getVans } from '../../api';

export default function VanDetails() {
  const { id } = useParams();
  const location = useLocation();
  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans(id);
        setVan(data);
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

  const search = location.state?.search || '';
  const vanType = location.state?.type || 'all';

  return (
    <div>
      <Link
        to={`..${search}`}
        relative='path'
        className='flex justify-start gap-x-2 ml-7 mt-8 text-xl'
      >
        &larr;
        <span className='underline underline-offset-2 text-xl'>
          {' '}
          Back to {vanType} vans
        </span>
      </Link>

      {van && (
        <div className='text-luxury flex flex-col gap-y-5 px-5'>
          <img className='mt-24' src={van.imageUrl} alt='' />
          <div
            className={
              van.type === 'simple'
                ? 'bg-simple text-vanTypeText text-base px-7 py-3 capitalize rounded-lg max-w-fit mt-5'
                : van.type === 'rugged'
                ? 'bg-rugged text-vanTypeText text-base px-7 py-3 capitalize rounded-lg max-w-fit mt-5'
                : 'bg-luxury text-vanTypeText text-base px-7 py-3 capitalize rounded-lg max-w-fit mt-5'
            }
          >
            {van.type}
          </div>
          <h2 className='text-inherit font-semibold text-3xl'>{van.name}</h2>
          <p>
            <span className='text-inherit font-semibold text-2xl'>
              ${van.price}
            </span>
            /day
          </p>
          <p className='text-base'>{van.description}</p>
          <button className='bg-rentVan text-white mb-24 rounded-md py-3 text-lg mt-2'>
            Rent this van
          </button>
        </div>
      )}
    </div>
  );
}
