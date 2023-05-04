import React from "react";

// component
import Header from "../Header";
import DashboardLayout from "../../components/DashboardLayout";
import EventCard from "./EventCard";
import Title from "../../components/Title";

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
    title: "Sự kiện 1",
    description: "đầm sen Park",
    date: "30/05/2021 - 01/06/2021",
    price: "25.000 VNĐ",
  },
  {
    image: Event3,
    title: "Sự kiện 3",
    description: "đầm sen Park",
    date: "30/05/2021 - 01/06/2021",
    price: "50.000 VNĐ",
  },
  {
    image: Event4,
    title: "Sự kiện 4",
    description: "đầm sen Park",
    date: "30/05/2021 - 01/06/2021",
    price: "50.000 VNĐ",
  },
];

const Event = () => {
  return (
    <>
      <Header />
      <DashboardLayout>
        <Title>Sự kiện nổi bật</Title>
        <div className="flex items-center gap-7">
          <button>
            <PreviousArrowIcon />
          </button>
          {event.map((item) => (
            <EventCard
              className="w-[356px]"
              image={item.image}
              title={item.title}
              description={item.description}
              date={item.date}
              price={item.price}
            />
          ))}
          <button>
            <NextArrowIcon />
          </button>
        </div>
        <BgConfetti />
      </DashboardLayout>
    </>
  );
};

export default Event;
