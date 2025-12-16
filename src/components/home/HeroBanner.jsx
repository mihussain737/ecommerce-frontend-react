import { Swiper, SwiperSlide } from "swiper/react";
import { bannerLists } from "../utils";
import { Pagination, EffectFade, Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'
import { Link } from "react-router-dom";

const colors = [
  "bg-red-300",
  "bg-blue-300",
  "bg-green-300",
  "bg-yellow-300",
  "bg-purple-300",
];

const HeroBanner = () => {
  return (
    <div className="py-2 rounded-md">
      <Swiper
        grabCursor={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination, EffectFade, Navigation, Autoplay]}
        slidesPerView={1}
      >
        {bannerLists.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              className={`carousel-item rounded-md sm:h-[500px] h-96 ${
                colors[index % colors.length]
              }`}
            >
              <div className="flex flex-col lg:flex-row items-center justify-center h-full">
                {/* TEXT SECTION */}
                <div className="hidden lg:flex justify-center w-1/2 p-8">
                  <div className="text-center">
                    <h3 className="text-3xl text-white font-bold">
                      {item.title}
                    </h3>
                    <h1 className="text-5xl text-white font-bold mt-2">
                      {item.subtitle}
                    </h1>
                    <p className="text-white font-bold mt-4">
                      {item.description}
                    </p>
                    <Link
                      to="/products"
                      className="mt-6 inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                    >
                      Shop
                    </Link>
                  </div>
                </div>

                {/* IMAGE SECTION */}
                <div className="w-full lg:w-1/2 flex justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-[400px] object-contain"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
