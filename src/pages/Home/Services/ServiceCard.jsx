import { HiArrowRight } from 'react-icons/Hi';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
      const { _id,title, img, price } = service;
      return (
        <div className="card bg-base-100 shadow-xl p-4 space-y-4">
          <figure>
            <img src={img} alt="Shoes" className="rounded-xl md:h-52 w-full" />
          </figure>
          <div className="text-center top-0">
            <h2 className="card-title">{title}</h2>
            <div className="flex justify-between items-center">
              <p className="font-bold text-orange-400">Price: ${price}</p>
              <span className="text-orange-500">
                <Link to={`/checkout/${_id}`}><button className='btn bg-orange-400'><HiArrowRight/></button></Link>
              </span>
            </div>
          </div>
        </div>
      );
    };
    
    export default ServiceCard;
    