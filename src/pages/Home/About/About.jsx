import pas from './../../../../assets/images/about_us/person.jpg'
import part from './../../../../assets/images/about_us/parts.jpg'
const About = () => {
   return (
      <div className="hero  bg-gray-200 rounded-xl">
         <div className="hero-content flex-col lg:flex-row">
            <div className='lg:w-1/2 relative'>
            <img src={pas} className="w-3/4 rounded-lg shadow-2xl " />
            <img src={part} className="w-1/2 right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl absolute" />
            </div>
            <div className='lg:w-1/2 space-y-3'>
               <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
               <h1 className="text-5xl font-bold w-3/4 ">We are qualified & of experience in this field</h1>
               <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
               <p>
               the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
               </p>
               <button className="btn btn-error">Get More Info</button>
            </div>
         </div>
      </div>
   );
};

export default About;