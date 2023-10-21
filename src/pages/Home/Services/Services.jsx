import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
   const [services, setServices] = useState([]);
   const [asc, setAsc] = useState(true)
   const searchRef = useRef(null)
   const [search,setSearch]=useState()

   useEffect(() => {
      fetch(`https://car-doctor-server-6d164nno5-salmanfursi.vercel.app/services?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
         .then((response) => response.json())
         .then((data) => {
            setServices(data);
         })

   }, [asc,search]);
   const handleSearch=()=>{
      console.log('salman');
      console.log(searchRef.current.value)
      setSearch(searchRef.current.value)
   }

   return (
      <div className="mt-4">
         <div className="text-center">
            <h1 className="text-3xl font-bold text-orange-500">Service</h1>
            <h2 className="text-5xl">Our Service Area </h2>
            <p>
               the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable.
            </p>
            <div className="form-control">
               <div className="input-group">
                  <input ref={searchRef} type="text" placeholder="Search…" className="input input-bordered" />
                  <button
                  onClick={handleSearch}
                  className="btn btn-square">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
               </div>
            </div>
            <button
               onClick={() => setAsc(!asc)}
               className="btn btn-primary">{asc ? 'price: high to low' : 'price: low to high'}</button>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
               services.map(service => <ServiceCard
                  key={service._id}
                  service={service}
               ></ServiceCard>)
            }
         </div>
      </div>
   );
};

export default Services;