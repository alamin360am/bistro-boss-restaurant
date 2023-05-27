import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from "./../../../../public/assets/home/slide1.jpg";
import slide2 from "./../../../../public/assets/home/slide2.jpg";
import slide3 from "./../../../../public/assets/home/slide3.jpg";
import slide4 from "./../../../../public/assets/home/slide4.jpg";
import slide5 from "./../../../../public/assets/home/slide5.jpg";
import SectitonHeading from "../../../Components/SectitonHeading";

const Category = () => {
  return (
    <section className="py-16">
        <SectitonHeading
            subHeading={"From 11:00am to 10:00pm"}
            heading={"ORDER ONLINE"}
        ></SectitonHeading>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" className="relative" />
          <p className="absolute z-10 top-3/4 left-1/2 -translate-x-1/2 text-2xl text-white drop-shadow-lg uppercase">
            Salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" className="relative" />
          <p className="absolute z-10 top-3/4 left-1/2 -translate-x-1/2 text-2xl text-white drop-shadow-lg uppercase">
            Soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" className="relative" />
          <p className="absolute z-10 top-3/4 left-1/2 -translate-x-1/2 text-2xl text-white drop-shadow-lg uppercase">
            pizzas
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" className="relative" />
          <p className="absolute z-10 top-3/4 left-1/2 -translate-x-1/2 text-2xl text-white drop-shadow-lg uppercase">
            desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" className="relative" />
          <p className="absolute z-10 top-3/4 left-1/2 -translate-x-1/2 text-2xl text-white drop-shadow-lg uppercase">
            Vegetable
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
