import { HiArrowRight } from 'react-icons/Hi';
const ServiceCard = ({ service }) => {
      const { title, img, price } = service;
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
                <button><HiArrowRight/></button>
              </span>
            </div>
          </div>
        </div>
      );
    };
    
    export default ServiceCard;
    