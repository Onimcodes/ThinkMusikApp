import React from 'react'

//import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';
//import 'swiper/css/scrollbar';

const Advert = () => {
  return (
    
    <Swiper 
    //modules={[Navigation, Pagination, Scrollbar, A11y]}
    //spaceBetween={50}
    //slidesPerView={3}
    //navigation
    //pagination={{ clickable: true }}
    //scrollbar={{ draggable: true }}
    //onSwiper={(swiper) => console.log(swiper)}
    //onSlideChange={() => console.log('slide change')}
       
        >
            <SwiperSlide>
                <div className="overview__carousel">
                    <div className="overview__carousel-content">
                        <h3>Buy Quality Cheap Musical Instrument and get it delivered in 1-2days</h3>
                        <button type='button'>Coming Soon</button>
                    </div>
                </div>
            </SwiperSlide>
            {/*<SwiperSlide>
                <div className="overview__carousel">
                    <div className="overview__carousel-content">
                        <h3>Buy Quality Cheap Musical Instrument and get it delivered in 1-2days</h3>
                        <button type='button'>Coming Soon</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="overview__carousel">
                    <div className="overview__carousel-content">
                        <h3>Buy Quality Cheap Musical Instrument and get it delivered in 1-2days</h3>
                        <button type='button'>Coming Soon</button>
                    </div>
                </div>
            </SwiperSlide>*/}
          
    
        </Swiper>
 
  )
}

export default Advert