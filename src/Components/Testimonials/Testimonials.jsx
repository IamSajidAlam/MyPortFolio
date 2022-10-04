import React from 'react'
import './Testimonials.css'
import 'swiper/css/pagination';
import 'swiper/css'
import {Swiper,  SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
const Testimonials = () => {
    const cliens  = [
        {
            img: profilePic1,
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus culpa consequatur fugiat doloribus aut consectetur fugit sunt veniam debitis. Sapiente, molestiae. Quasi cupiditate sapiente adipisci esse blanditiis eveniet, debitis ad."
        },
        {
            img: profilePic2,
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus culpa consequatur fugiat doloribus aut consectetur fugit sunt veniam debitis. Sapiente, molestiae. Quasi cupiditate sapiente adipisci esse blanditiis eveniet, debitis ad."
        },
        {
            img: profilePic3,
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus culpa consequatur fugiat doloribus aut consectetur fugit sunt veniam debitis. Sapiente, molestiae. Quasi cupiditate sapiente adipisci esse blanditiis eveniet, debitis ad."
        },
        {
            img: profilePic4,
            review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus culpa consequatur fugiat doloribus aut consectetur fugit sunt veniam debitis. Sapiente, molestiae. Quasi cupiditate sapiente adipisci esse blanditiis eveniet, debitis ad."
        },
    ];
  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients Always Get</span>
            <span>Exceptional Work</span>
            <span>Form Me</span>
            <div className="blur blur1" style={{background: "Var(--purple"}}></div>
            <div className="blur blur2" style={{background: "Var(--skyblue"}}></div>
        </div>
        
        {/*Slider*/}
        <Swiper
        modules={[Pagination]}
        slidesPerView = {1}
        pagination = {{clickable: true}}        
        >
            {cliens.map((client, index)=>{
                return (
                    <SwiperSlide key={index}>
                      <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                      </div>
                    </SwiperSlide>
                  );
        })}
        </Swiper>
    </div>
  )
}

export default Testimonials