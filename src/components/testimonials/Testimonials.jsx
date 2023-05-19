import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Rumeysa Gursoy",
    review:
      "Harika bir insan. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ratione error expedita incidunt veritatis beatae atque iste eos cum voluptatibus!",
  },
  {
    avatar: AVTR2,
    name: "Atacan Demir",
    review:
      "Harika bir insan. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ratione error expedita incidunt veritatis beatae atque iste eos cum voluptatibus!",
  },
  {
    avatar: AVTR3,
    name: "Melih Emre",
    review:
      "Harika bir insan. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ratione error expedita incidunt veritatis beatae atque iste eos cum voluptatibus!",
  },
  {
    avatar: AVTR4,
    name: "Onur Ahi",
    review:
      "Harika bir insan. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ratione error expedita incidunt veritatis beatae atque iste eos cum voluptatibus!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

        <Swiper
          className="container testimonials__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} />
                  </div>
                  <h5>{name}</h5>
                  <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
    </section>
  );
}

export default Testimonials