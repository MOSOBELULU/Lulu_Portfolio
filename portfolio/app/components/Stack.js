"use client";
import { skillsData } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";

export default function Stack() {
  return (
    <section id="stack" className="mt-8">
      <h2 className="text-5xl font-semibold text-black text-center">Skills</h2>

      {Object.entries(skillsData).map(([category, skills], index) => (
        <div key={index} className="mt-6">
          <h3 className="text-xl font-semibold text-center mb-4 text-black">
            {category}
          </h3>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{ delay: 2000 }}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[Autoplay, EffectCoverflow]}
            className="mt-6"
          >
            {skills.map((image, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex justify-center">
                  <div
                    className="relative w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28
                      transition-transform transform hover:scale-110
                      animate-pulse hover:animate-none shadow-lg hover:shadow-red-400/50"
                  >
                    <Image
                      src={image}
                      alt={`${category} logo`}
                      width={112}
                      height={112}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </section>
  );
}
