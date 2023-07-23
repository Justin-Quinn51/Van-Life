import { useOutletContext } from 'react-router-dom';

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();
  return (
    <section className=''>
      <p className='my-5 text-2xl'>
        ${currentVan.price}
        <span className='text-base'>/day</span>
      </p>
    </section>
  );
}
