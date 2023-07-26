// import * as Progress from '@radix-ui/react-progress';

export default function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: 'Elliot',
      date: 'January 3, 2023',
      text: 'The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!',
      id: '1',
    },
    {
      rating: 5,
      name: 'Sandy',
      date: 'December 12, 2022',
      text: 'This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!',
      id: '2',
    },
  ];
  return (
    <section className='px-8 flex flex-col gap-y-2'>
      <div className='flex items-center my-3 gap-x-3'>
        <h2 className='text-2xl font-semibold'>Your Reviews</h2>
        <p className='text-lightestGray'>
          last
          <span className='underline underline-offset-2 font-semibold pl-1'>
            30 days
          </span>
        </p>
      </div>
      <img
        className='w-full max-w-[500px] my-2'
        src='../../../progressBar.png'
        alt=''
      />
      {/* <h3 className='font-semibold flex justify-start mb-2.5'>Reviews (2)</h3> */}
      {reviewsData.map((review) => (
        <div key={review.id}>
          <div className='flex space-x-1'>
            {[...Array(review.rating)].map((_, i) => (
              <img key={i} src='../../../Star.svg' alt='Star' />
            ))}
          </div>
          <div className='flex flex-col'>
            <p className='font-semibold text-left mt-3'>
              {review.name}
              <span className='text-date'> {review.date}</span>
            </p>
            <p className='text-left mt-3 my-4'>{review.text}</p>
          </div>
          <hr />
        </div>
      ))}
      <hr />
    </section>
  );
}
