import { useOutletContext } from 'react-router-dom';

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();
  return (
    <section className='w-2/6 mt-8 my-4'>
      <img src={currentVan.imageUrl} alt='' />
    </section>
  );
}
