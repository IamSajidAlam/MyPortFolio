import React from 'react'
import './Portfolio.css'
import 'swiper/css'
import Ecommercs from '../../img/ecommerce.png'
import Hoc from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import SideBar from '../../img/sidebar.png'
/*
import ACB from '../../img/ACB.png'
import USB from '../../img/USB.png'
import Amor from '../../img/Amor.png'
import Gom from '../../img/GoM.png'
import GoVocal from '../../img/GoVocal.png'
import BNW from '../../img/BNW.png'
import Eid from '../../img/Eid.png'
*/
import {Swiper,  SwiperSlide} from 'swiper/react';

const Portfolio = () => {
  return (
    <div className="portfolio" id='Portfolio'>
        {/*Heading*/}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/*Slider*/}
        <Swiper
        spaceBetween={70}
        slidesPerView={3}
        grabCursor={true}
        className = 'portfolio-slider'
        >
            <SwiperSlide>
              <img src={SideBar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Ecommercs} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Hoc} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={MusicApp} alt="" />
            </SwiperSlide>
            {/*
            <SwiperSlide>
              <img src={BNW} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ACB} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={USB} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Amor} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gom} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={GoVocal} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Eid} alt="" />
            </SwiperSlide>
          */}
        </Swiper>
    </div>
  )
}

export default Portfolio