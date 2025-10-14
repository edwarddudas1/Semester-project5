import { useState, useEffect, useRef } from "react";
import "./Nature.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Nature() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://pixabay.com/api/?key=48165883-65f9cee792e12f4d73d6b41d8"
        );
        const data = await response.json();
        const filtered = data.hits.map(({ previewURL }) => ({ previewURL }));
        const selectedImages = filtered.sort(() => Math.random() - 0.5).slice(0, 5);
        setImage(selectedImages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, []);

  return (
    <>
      <p>Beautiful nature</p>
      {image.length > 0 && (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {image.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img.previewURL} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
