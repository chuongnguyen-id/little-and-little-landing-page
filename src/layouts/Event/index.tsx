import React, { useRef } from "react";

// react-router-dom
import { useNavigate } from "react-router-dom";

// component
import Header from "../Header";
import DashboardLayout from "../../components/DashboardLayout";
import EventCard from "./EventCard";
import Title from "../../components/Title";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper as SwiperType, Navigation } from "swiper";

// icon
import PreviousArrowIcon from "../../components/Icon/PreviousArrowIcon";
import NextArrowIcon from "../../components/Icon/NextArrowIcon";
import BgConfetti from "../BgConfetti";

// image
import Event1 from "../../assets/image/Event/Event1.png";
import Event3 from "../../assets/image/Event/Event3.png";
import Event4 from "../../assets/image/Event/Event4.png";

const event = [
  {
    image: Event1,
    title: "Sự kiện 1",
    description: "đầm sen Park",
    date: "30/05/2021 - 01/06/2021",
    price: "25.000 VNĐ",
  },
  {
    image: Event1,
    title: "Sự kiện 2",
    description: "đầm sen Park",
    date: "30/05/2021 - 01/06/2021",
    price: "25.000 VNĐ",
  },
  {
    image: Event3,
    title: "Sự kiện 3",
    description: "đầm sen Park",
    date: "01/06/2021 - 01/07/2021",
    price: "50.000 VNĐ",
  },
  {
    image: Event4,
    title: "Sự kiện 4",
    description: "đầm sen Park",
    date: "01/06/2021 - 01/07/2021",
    price: "80.000 VNĐ",
  },
  {
    image: Event1,
    title: "Sự kiện 5",
    description: "đầm sen Park",
    date: "30/05/2021 - 01/06/2021",
    price: "125.000 VNĐ",
  },
  {
    image: Event1,
    title: "Sự kiện 6",
    description: "đầm sen Park",
    date: "30/05/2021 - 01/06/2021",
    price: "225.000 VNĐ",
  },
  {
    image: Event3,
    title: "Sự kiện 7",
    description: "đầm sen Park",
    date: "30/05/2021 - 01/06/2021",
    price: "250.000 VNĐ",
  },
  {
    image: Event4,
    title: "Sự kiện 8",
    description: "đầm sen Park",
    date: "30/05/2021 - 01/06/2021",
    price: "350.000 VNĐ",
  },
];

const Event = () => {
  const swiperRef = useRef<SwiperType>();
  const navigate = useNavigate();

  const handleEventCardClick = (eventData: any) => {
    navigate("/su-kien/chi-tiet", { state: eventData });
  };

  return (
    <>
      <Header />
      <DashboardLayout>
        <Title>Sự kiện nổi bật</Title>
        <div className="flex items-center">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="m-6 z-10 w-[106px]"
          >
            <PreviousArrowIcon />
          </button>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {event.map((item, index) => (
              <SwiperSlide key={index}>
                <EventCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  price={item.price}
                  onClick={() => handleEventCardClick(item)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="m-6 z-10 w-[106px]"
          >
            <NextArrowIcon />
          </button>
        </div>
        <BgConfetti />
      </DashboardLayout>
    </>
  );
};

export default Event;
