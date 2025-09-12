import './testimonial.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import AVTR1 from '../../assets/avtar1.jpg'
import AVTR2 from '../../assets/avtar2.jpg'
import AVTR3 from '../../assets/avtar3.jpg'
import AVTR4 from '../../assets/avtar4.jpg'

const data = [
  {
    avtar: AVTR1,
    name: 'Satyam Vats',
    review:
      'You are a highly dedicated and hardworking individual. Your strong problem-solving skills and logical thinking make you stand out in programming and software development.',
  },
  {
    avtar: AVTR2,
    name: 'Pradeep Sen',
    review:
      'Along with academics, You focuses on practical projects like Eazy Rent, showing your ability to turn ideas into real-world applications.',
  },
  {
    avtar: AVTR3,
    name: 'Dheeraj Kannaujiya',
    review:
      'You are a reliable teammate who collaborates effectively and shares knowledge generously. Your positive attitude inspires others around you to do better.',
  },
  {
    avtar: AVTR4,
    name: 'Ayush Singh',
    review:
      'You always eager to learn new technologies and adapts quickly to challenges. Your curiosity in AI and web development shows your passion for innovation.',
  },
]

function Testimonial() {
  return (
    <section id="testimonial">
      <h5>Review From clients</h5>
      <h2>Testimonials</h2>

    <Swiper
        className="container testimonials_container"
        modules={[Pagination]} 
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
    >
        {data.map(({ avtar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avtar">
                <img src={avtar} alt={name} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonial
