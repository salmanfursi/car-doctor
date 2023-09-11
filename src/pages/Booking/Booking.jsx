import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRaw from "./BookingRaw";

const Booking = () => {
   const { user } = useContext(AuthContext);
   const [bookings, setbookings] = useState([]);

   // const { name,date,email,service_id,price } = booking;

   const url = `http://localhost:5000/checkout?email=${user.email}`;
   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => {
            setbookings(data)
            console.log(data)
         })
   }, [])

   return (
      <div>
         <h2 className="text-5xl font-bold text-center">your bookings: {bookings?.length}</h2>

         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr className="text-2xl bg-lime-500 font-bold">
                     <th></th>
                     <th>image</th>
                     <th>service</th>
                     <th>date</th>
                     <th>price</th>
                     <th>status</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     bookings.map(booking => <BookingRaw
                        key={booking._id}
                        booking={booking}
                        setbookings={setbookings}
                        bookings={bookings}
                     ></BookingRaw>)
                  }

               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Booking;