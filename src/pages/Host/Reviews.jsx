import * as Progress from '@radix-ui/react-progress';

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
      <div className='flex items-center space-x-2'>
        <div className='flex items-center space-x-2'>
          <span className='text-2xl font-semibold'>5.0</span>
          <img className='inline-block order-1' src='/Star.svg' alt='' />
        </div>
        <p>overall rating</p>
      </div>

      <div className='my-2'>
        <div className='flex items-center space-x-3'>
          <p>5 stars</p>
          <Progress.Root className='relative overflow-hidden bg-black rounded-full w-[400px] h-[10px]'>
            <Progress.Indicator className='bg-rentVan w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]' />
          </Progress.Root>
          <p>100%</p>
        </div>
        <div className='flex justify-stretch items-center space-x-4'>
          <p>4 stars</p>
          <Progress.Root className='relative overflow-hidden bg-black rounded-full w-full h-[10px]'>
            <Progress.Indicator className='bg-emptyBar w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]' />
          </Progress.Root>
          <p>0%</p>
        </div>
        <div className='flex justify-stretch items-center space-x-4'>
          <p>3 stars</p>
          <Progress.Root className='relative overflow-hidden bg-black rounded-full w-full h-[10px]'>
            <Progress.Indicator className='bg-emptyBar w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]' />
          </Progress.Root>
          <p>0%</p>
        </div>
        <div className='flex justify-stretch items-center space-x-4'>
          <p>2 stars</p>
          <Progress.Root className='relative overflow-hidden bg-black rounded-full w-full h-[10px]'>
            <Progress.Indicator className='bg-emptyBar w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]' />
          </Progress.Root>
          <p>0%</p>
        </div>
        <div className='flex justify-stretch items-center space-x-4 pl-1.5'>
          <p className=''>1 star</p>
          <Progress.Root className='relative overflow-hidden bg-black rounded-full w-full h-[10px]'>
            <Progress.Indicator className='bg-emptyBar w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1' />
          </Progress.Root>
          <p>0%</p>
        </div>
      </div>

      {reviewsData.map((review) => (
        <div key={review.id}>
          <div className='my-4'>
            <h3 className='font-semibold flex justify-start mb-2.5'>
              Reviews (2)
            </h3>

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
              <p className='text-left mt-3'>{review.text}</p>
            </div>
          </div>

          <hr />
        </div>
      ))}
      <div className='mb-4'>
        <hr />
      </div>
    </section>
  );
}
