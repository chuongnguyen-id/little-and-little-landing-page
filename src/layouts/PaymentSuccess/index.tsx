import React, { useRef } from "react";

// react-router-dom
import { useLocation } from "react-router-dom";

// component
import Header from "../Header";
import DashboardLayout from "../../components/DashboardLayout";
import PaymentCard from "./PaymentCard";
import Title from "../../components/Title";
import Box from "../../components/Box";
import Button from "../../components/Button";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper as SwiperType, Pagination, Navigation } from "swiper";

// icon
import PreviousArrowIcon from "../../components/Icon/PreviousArrowIcon";
import NextArrowIcon from "../../components/Icon/NextArrowIcon";

// image
import AvatarAlvin from "../../assets/image/Decor/AvatarAlvin.png";

// react-component-export-image
import { exportComponentAsPNG } from "react-component-export-image";
import ExportFile from "./ExportFile";

const PaymentSuccess = () => {
  const location = useLocation();
  // console.log("state: ", location.state);
  const swiperRef = useRef<SwiperType>();

  const componentRef = useRef(null);

  return (
    <>
      <Header />
      <DashboardLayout>
        <Title className="mb-4">Thanh toán thành công</Title>
        <div className="flex justify-end">
          <Box>
            <div className="flex justify-between items-center my-[30px] w-[1400px]">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="m-6 z-20 w-[106px]"
              >
                <PreviousArrowIcon />
              </button>
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                  type: "fraction",
                  el: ".swiper-custom-pagination",
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="w-full"
              >
                {location.state &&
                  Array.from(Array(location.state.number).keys()).map(
                    (index) => {
                      return (
                        <SwiperSlide key={index}>
                          <PaymentCard
                            code={location.state.code}
                            date={location.state.date}
                          />
                        </SwiperSlide>
                      );
                    }
                  )}
              </Swiper>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="m-6 z-30 w-[106px]"
              >
                <NextArrowIcon />
              </button>
            </div>
            <div className="flex justify-between mx-[125px] my-4 text-xl">
              <div className="w-full">Số lượng: {location.state.number} vé</div>
              <div className="flex justify-end swiper-custom-pagination" />
            </div>
          </Box>
        </div>
        <ExportFile componentRef={componentRef} />
        <div className="flex justify-center items-center gap-6 p-6">
          <Button
            onClick={() => exportComponentAsPNG(componentRef)}
            style={{ fontSize: "18px" }}
            className="w-[160px]"
          >
            Tải về
          </Button>
          <Button style={{ fontSize: "18px" }} className="w-[160px]">
            Gửi Email
          </Button>
        </div>
        <img
          src={AvatarAlvin}
          alt="Alvin"
          className="absolute left-0 top-[260px] z-20"
        />
      </DashboardLayout>
    </>
  );
};

export default PaymentSuccess;
