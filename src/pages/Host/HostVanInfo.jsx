import { useOutletContext } from 'react-router-dom';

export default function HostVanInfo() {
  const { currentVan } = useOutletContext();
  console.log(currentVan);
  return (
    <section className='flex flex-col gap-y-4 mt-4'>
      <h4 className=''>
        <span className='font-semibold'>Name</span>: {currentVan.name}
      </h4>
      <h4 className=''>
        <span className='font-semibold'>Type</span>: {currentVan.type}
      </h4>
      <h4 className=''>
        <span className='font-semibold'>Description</span>:{' '}
        {currentVan.description}
      </h4>
      <h4 className=''>
        <span className='font-semibold'>Visibility</span>: Public
      </h4>
    </section>
  );
}
