import React from 'react'
import './educations.css'

import dogus from "../../assets/dogus.jpeg";
import GCD from "../../assets/GCD.jpeg";
import ikl from "../../assets/ikl.jpeg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: GCD,
    name: "Griffith College Dublin - MSc in Computer Science",
    date: "2021-2023",
    review:
      "The course builds on the knowledge acquired from the BSc in Computer Science or Engineering, which is applied to topics such as cloud computing, information retrieval and communication security. Particular emphasis is put on research methods which is an excellent preparation for the master’s thesis and academic challenges to come.",
  },
  {
    avatar: dogus,
    name: "Dogus University - BSc in Computer Engineering",
    date: "2015-2020",
    review:
      "During the initial year of my academic journey, it was mandatory to study English preparation. Given the Computer Engineering department's complete immersion in the English language, all courses leading up to graduation were conducted %100 in English. As an enthusiastic learner, I actively engaged in various student clubs at Doğuş University, demonstrating my commitment to being a proactive participant in my university experience.",
  },
  {
    avatar: ikl,
    name: "Istanbul Kadikoy High School",
    date: "2011-2015",
    review: "",
  },
];

const Educations = () => {
  return (
    <section id="educations">
      <h5>Degrees that I have</h5>
      <h2>Education</h2>

        <Swiper
          className="container educations__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map(({ avatar, name, date, review }, index) => {
            return (
              <SwiperSlide key={index} className="education">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5>{name}</h5>
                <small className="client__review">{date}</small>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
    </section>
  );
}

export default Educations