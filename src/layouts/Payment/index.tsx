import React from "react";
import Header from "../Header";
import Box from "../../components/Box";
import TitleCard from "../../components/TitleCard";
import DashboardLayout from "../../components/DashboardLayout";
import Spine from "../../assets/image/Spine.png";
import PaymentInfo from "./PaymentInfo";

const Payment = () => {
  return (
    <>
      <Header />
      <DashboardLayout>
        <div className="wrapper mt-30">
          <title className="flex justify-center items-center mb-14 font-icielKoni text-7xl text-titleColor">
            Thanh toán
          </title>
          <div className="flex gap-[30px]">
            <Box style={{ width: "950px" }}>
              <TitleCard style={{ width: "388px" }}>
                Vé cổng - vé gia đình
              </TitleCard>
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
        </div>
      </DashboardLayout>
    </>
  );
};

export default Payment;
