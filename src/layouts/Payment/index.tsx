import React from "react";

// component
import Header from "../Header";
import Box from "../../components/Box";
import TitleCard from "../../components/TitleCard";
import DashboardLayout from "../../components/DashboardLayout";
import PaymentInfo from "./PaymentInfo";
import TicketInfo from "./TicketInfo";
import Title from "../../components/Title";

// image
import Spine from "../../assets/image/Spine.png";
import AvatarTrini from "../../assets/image/Decor/AvatarTrini.png";

const Payment = () => {
  return (
    <>
      <Header />
      <DashboardLayout>
        <Title>Thanh toán</Title>
        <div className="flex gap-[30px]">
          <Box style={{ width: "950px" }}>
            <TitleCard style={{ width: "388px", marginLeft: "117px" }}>
              Vé cổng - vé gia đình
            </TitleCard>
            <TicketInfo />
          </Box>
          <img
            src={Spine}
            alt="Spine"
            className="flex ml-[-70px] mr-[-100px] mb-[15px]"
          />
          <Box
            style={{ width: "538px" }}
            className="flex flex-col items-center justify-center"
          >
            <TitleCard style={{ width: "388px" }}>
              Thông tin thanh toán
            </TitleCard>
            <PaymentInfo />
          </Box>
        </div>
        <img
          src={AvatarTrini}
          alt="Trini"
          className="absolute left-0 top-[347px]"
        />
      </DashboardLayout>
    </>
  );
};

export default Payment;
