import img1 from "./../../../../assets/images/banner/1.jpg"
import img2 from "./../../../../assets/images/banner/2.jpg"
import img3 from "./../../../../assets/images/banner/3.jpg"
import img4 from "./../../../../assets/images/banner/4.jpg"
import img5 from "./../../../../assets/images/banner/5.jpg"
import img6 from "./../../../../assets/images/banner/6.jpg"
const Banner = () => {
	const carousel = 
		<div className="flex items-center w-full h-full absolute bg-gradient-to-r rounded-xl from-[#151515] to-[rgba(21,21,21,0)]">
			<div className="md:space-y-7 md:w-1/2 pl-12 ">
				<h2 className="text-6xl text-white font-bold " >Affordable Price For Car Servicing</h2>
				<p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
				<button className="btn btn-primary mr-5">Discover More</button>
				<button className="btn btn-outline btn-secondary">Latest Project</button>
			</div>
		</div>
	
	return (
		<div className="carousel">
			<div id="slide1" className="carousel-item relative w-full h-[600px]">
				<img src={img1} className="w-full h-full rounded-xl" />
				{carousel}
				<div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
					<a href="#slide6" className="btn btn-circle mr-8">❮</a>
					<a href="#slide2" className="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full h-[600px]">
				<img src={img2} className="w-full h-full rounded-xl" />
				{carousel}
				<div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
					<a href="#slide1" className="btn btn-circle mr-8">❮</a>
					<a href="#slide3" className="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide3" className="carousel-item relative w-full h-[600px]">
				<img src={img3} className="w-full h-full rounded-xl" />
				{carousel}
				<div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
					<a href="#slide2" className="btn btn-circle mr-8">❮</a>
					<a href="#slide4" className="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide4" className="carousel-item relative w-full h-[600px]">
				<img src={img4} className="w-full h-full rounded-xl" />
				{carousel}
				<div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
					<a href="#slide3" className="btn btn-circle mr-8">❮</a>
					<a href="#slide5" className="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide5" className="carousel-item relative w-full h-[600px]">
				<img src={img5} className="w-full h-full rounded-xl" />
				{carousel}
				<div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
					<a href="#slide4" className="btn btn-circle mr-8">❮</a>
					<a href="#slide6" className="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide6" className="carousel-item relative w-full h-[600px]">
				<img src={img6} className="w-full h-full rounded-xl" />
				{carousel}
				<div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
					<a href="#slide5" className="btn btn-circle mr-8">❮</a>
					<a href="#slide1" className="btn btn-circle">❯</a>
				</div>
			</div>
		</div>
	);
};

export default Banner;