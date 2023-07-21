import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function VanDetails() {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div>
      {van ? (
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
          <button className='bg-rentVan text-white mb-24 rounded-md py-3 text-lg'>
            Rent this van
          </button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
