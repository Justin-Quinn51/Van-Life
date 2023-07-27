export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: '1' },
    { amount: 560, date: "Dec 12, '22", id: '2' },
    { amount: 980, date: "Dec 3, '22", id: '3' },
  ];
  return (
    <section className='px-8 flex flex-col gap-y-2'>
      <h1 className='text-left text-3xl text-luxury font-semibold'>Income</h1>
      <div className='mb-2'>
        <p className='text-FilterButtonText text-left'>
          Last
          <span className='underline underline-offset-2 font-semibold pl-1'>
            30 days
          </span>
        </p>
        <h3 className='font-semibold text-left mt-3 text-2xl'>$2,260</h3>
      </div>
      <img src='../../../barChart.png' alt='' />
      <div className='flex justify-between items-center my-2'>
        <h2 className='font-semibold text-md'>Your transactions (3)</h2>
        <p className='text-FilterButtonText text-left text-xs'>
          Last
          <span className='underline underline-offset-2 font-semibold pl-1'>
            30 days
          </span>
        </p>
      </div>
      <div>
        {transactionsData.map((transaction) => (
          <div
            className='flex justify-between items-center bg-white px-3 py-4 mb-5'
            key={transaction.id}
          >
            <h3 className='text-2xl'>${transaction.amount}</h3>
            <h3 className='text-md text-FilterButtonText'>
              {transaction.date}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
