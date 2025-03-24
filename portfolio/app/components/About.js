"use client";
import Image from "next/image";
import { educationData, skillsData } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12" id="about">
      <h1 className="text-3xl font-semibold text-center mb-6">About Me</h1>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="space-y-4">
          {educationData.map((item, index) => (
            <li key={index} className="border-b py-4">
              <h3 className="text-xl font-semibold">{item.Qualification}</h3>
              <p className="text-gray-600">{item.Institution}</p>
              <p className="text-gray-500">{item.Duration}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
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
          {Object.entries(skillsData).map(([category, images], index) => (
            <SwiperSlide key={index} className="p-4">
              <h3 className="text-xl font-semibold text-center">{category}</h3>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {images.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative w-24 h-24 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${category} logo`}
                      width={96}
                      height={96}
                      className="rounded-lg shadow-lg hover:shadow-blue-400/50 transition-shadow duration-500"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
