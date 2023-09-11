import Swal from "sweetalert2";

const BookingRaw = ({ booking,setbookings,bookings }) => {
  const { name, date, price, img, _id,status } = booking;

  const handledelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.isConfirmed){
      fetch(`http://localhost:5000/checkout${_id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
            )
            const remaining=bookings.filter(booking => booking._id !== _id )
            setbookings(remaining)
        }
      })}
  })
}
  const handleupdate = () => {


      fetch(`http://localhost:5000/checkout${_id}`, {
        method: "PATCH",
        headers: {
           "Content-Type": "application/json"
        },
        body:JSON.stringify({status:'confirmed'} )
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
          Swal.fire(
            'update !',
            'Your file update successfully.',
            'success'
            )

            const remaining =bookings.filter(booking => booking._id !== _id)
            const updated = bookings.find(booking => booking._id === _id)
            updated.status='confirmed'
            const newBooking =[updated, ...remaining]
            setbookings(newBooking)
            
        }
      })
  }

  return (
    <tr className="bg-lime-400 text-2xl font-bold ">
      <th>
        <button onClick={handledelete} className="btn btn-square btn-outline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </th>

      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {img && <img src={img} />}
          </div>
        </div>
      </td>

      <td>
        {name}
      </td>
      <td>{date}</td>
      <td>{price}</td>
      <th>
        {status==='confirmed'?<span className="text-3xl font-bold text-lime-700">confirmed</span> 
        :<button onClick={handleupdate} className="btn btn-primary btn-normal">pls confirm</button>}
        
      </th>
    </tr>
  );
};

export default BookingRaw;