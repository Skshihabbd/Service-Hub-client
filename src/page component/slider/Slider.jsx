import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Fade, Slide } from "react-awesome-reveal";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  const sliderData = [
    {
      img: "https://i.ibb.co/c2vhFDh/total-shape-w-XBK9-Jr-M0i-U-unsplash.jpg",
      title: "Elevate Your Lifestyle",
      subtitle: "Discover professional services tailored just for your needs.",
    },
    {
      img: "https://i.ibb.co/N14kPrM/gina-lin-m27-OTMeg-Uy-A-unsplash.jpg",
      title: "Excellence in Every Task",
      subtitle: "Connecting you with the best experts in the industry.",
    },
    {
      img: "https://i.ibb.co/85GHVd0/logan-weaver-lgnwvr-mi4-Gfdl36yg-unsplash.jpg",
      title: "Reliable & Efficient",
      subtitle: "Your satisfaction is our top priority, every single time.",
    },
    {
      img: "https://i.ibb.co/vhq5zKM/sam-moghadam-khamseh-Z4-Q9-KHw9of-E-unsplash.jpg",
      title: "Smart Solutions",
      subtitle: "Bringing innovation and convenience right to your doorstep.",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={0}
        effect={"fade"}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[85vh] bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url('${slide.img}')` }}
            >
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/70 to-transparent"></div>

              <div className="container mx-auto px-6 lg:px-20 relative z-10">
                <div className="max-w-3xl text-white">
                  <Fade direction="down" duration={1000} triggerOnce={false}>
                    <h1 className="text-4xl md:text-7xl font-serif font-bold leading-tight mb-4">
                      {slide.title}
                    </h1>
                  </Fade>

                  <Slide direction="up" duration={1200} triggerOnce={false}>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 font-light tracking-wide max-w-xl">
                      {slide.subtitle}
                    </p>
                  </Slide>

                  <Fade delay={500} triggerOnce={false}>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-[#AE9467] hover:bg-white hover:text-[#AE9467] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-xl uppercase tracking-widest text-sm">
                        Explore Services
                      </button>
                      <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-bold transition-all duration-300 uppercase tracking-widest text-sm">
                        Contact Us
                      </button>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;