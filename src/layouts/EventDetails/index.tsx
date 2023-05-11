import React from "react";

// react-router-dom
import { useLocation } from "react-router-dom";

// component
import Header from "../Header";
import DashboardLayout from "../../components/DashboardLayout";
import Title from "../../components/Title";
import Box from "../../components/Box";
import BgConfetti from "../BgConfetti";

// icon
import MiniCalendarIcon from "../../components/Icon/MiniCalendarIcon";

// image
import Event1 from "../../assets/image/Event/Event1.png";

const EventDetails = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <DashboardLayout>
        <Title className="text-[64px]">{location.state.title}</Title>
        <Box className="flex py-16 px-12 gap-x-[43px] text-lg text-justify z-20">
          <div>
            <img
              src={location.state.image}
              alt="#"
              className="pb-6 rounded-xl"
            />
            <div className="flex text-lg text-dateTextColor font-medium">
              <MiniCalendarIcon /> &nbsp;30/05/2021 - 01/06/2021
            </div>
            <div className="text-lg text-descriptionTextColor font-medium">
              {location.state.description}
            </div>
            <div className="text-[32px] text-priceTextColor font-bold py-2">
              {location.state.price}
            </div>
          </div>
          <div className="w-[288px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic sdsd
            typesetting, remaining cssa essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, of Lorem Ipsum.
          </div>
          <div className="w-[288px]">
            <img src={Event1} alt="#" className="pb-6 rounded-xl" />
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. words, consectetur, from a Lorem Ipsum passage, and going
            through the cites of the word in classical literature,
          </div>
          <div className="w-[288px]">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. words, consectetur, from a Lorem Ipsum passage, and going
            through the cites of the word in classical literature,
            <img src={Event1} alt="#" className="pt-6 rounded-t-xl" />
          </div>
        </Box>
        <BgConfetti />
      </DashboardLayout>
    </>
  );
};

export default EventDetails;
