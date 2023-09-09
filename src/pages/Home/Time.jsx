import tim from './../../../assets/icons/check.svg'
const Time = () => {
   return (
      <div className="flex justify-around mx-auto w-full h-44 rounded-xl bg-orange-300 p-4">
         <div className=" h-full flex items-center">
            <div className='mr-2'>
               <img src={tim} alt="" />
            </div>
            <div>
               <p>We are open monday-friday</p>
               <h1 className='text-3xl font-bold'>7:00 am - 9:00 pm</h1>
            </div>
         </div>
         <div className=" h-full flex items-center">
            <div className='mr-2'>
               <img src={tim} alt="" />
            </div>
            <div>
               <p>We are open monday-friday</p>
               <h1 className='text-3xl font-bold'>7:00 am - 9:00 pm</h1>
            </div>
         </div>
         <div className=" h-full flex items-center">
            <div className='mr-2'>
               <img src={tim} alt="" />
            </div>
            <div>
               <p>We are open monday-friday</p>
               <h1 className='text-3xl font-bold'>7:00 am - 9:00 pm</h1>
            </div>
         </div>
   
      </div>
   );
};

export default Time;