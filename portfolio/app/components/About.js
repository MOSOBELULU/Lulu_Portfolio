'use client';
import { educationData, skillsData } from '../data/data';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

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

      {/* Skills Section with Animated Carousel */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        {Object.entries(skillsData).map(([category, skills], index) => (
          <div key={index} className="mt-6">
            <h3 className="text-xl font-semibold text-center mb-4">{category}</h3>
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
                    <div className="relative w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 
                      transition-transform transform hover:scale-110 
                      animate-pulse hover:animate-none shadow-lg hover:shadow-red-400/50">
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
    </div>
  );
}
