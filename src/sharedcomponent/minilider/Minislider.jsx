
import { Swiper, SwiperSlide ,  } from "swiper/react";
import "swiper/css";
// Import Swiper styles
import "swiper/css/bundle";



// import required modules
 import {  Navigation, Pagination ,Autoplay } from "swiper/modules";
const Minislider = () => {
    return (
        <div>
      <>
        <Swiper
autoplay={{delay:1000}}
          slidesPerView={6}
        //    spaceBetween={10}
          
        //    navigation={true}
          // pagination={{
          //   clickable: true,
          // }}
          loop={true}
          modules={[ Navigation, Pagination  ,Autoplay]}
         bg-cover
        >
          <SwiperSlide className="">
            <div className="bg-cover bg-no-repeat w-3/6 h-[40vh]  bg-[url('https://i.ibb.co/swjhcqm/anastase-maragos-7k-Ep-UPB8v-Nk-unsplash.jpg')]">
            
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-cover bg-no-repeat w-3/6 h-[40vh]  bg-[url('https://i.ibb.co/1vHPqGc/samuel-girven-VJ2s0c20q-Co-unsplash.jpg')]">
           
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-cover bg-no-repeat w-3/6 h-[40vh]  bg-[url('https://i.ibb.co/CnjxQsR/humphrey-muleba-LOA2m-Tj1vhc-unsplash.jpg')]">
           
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-cover bg-no-repeat w-3/6 h-[40vh] bg-[url('https://i.ibb.co/j6FLhBr/humphrey-muleba-d-Dp-6p-Xr-Yik-unsplash.jpg')]">
            
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-cover bg-no-repeat w-3/6 h-[40vh] bg-[url('https://i.ibb.co/ZVCBwzJ/jonathan-borba-zf-POelm-Dc-M-unsplash.jpg')]">
            
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-no-repeat  bg-cover h-[40vh] w-3/6 bg-[url('https://i.ibb.co/Qn56944/rodrigo-s-2mz9-IKab7-DE-unsplash.jpg')]">
            
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-no-repeat  bg-cover h-[40vh] w-3/6 bg-[url('https://i.ibb.co/Lz4L0Fb/meghan-holmes-bu-Wc-S7-G1-28-unsplash.jpg')]">
            
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
    );
};

export default Minislider;