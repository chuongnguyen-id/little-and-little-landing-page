import React from "react";

// component
import Header from "../Header";
import DashboardLayout from "../../components/DashboardLayout";
import PaymentCard from "./PaymentCard";
import Title from "../../components/Title";
import Box from "../../components/Box";
import Button from "../../components/Button";

// icon
import PreviousArrowIcon from "../../components/Icon/PreviousArrowIcon";
import NextArrowIcon from "../../components/Icon/NextArrowIcon";

// image
import AvatarAlvin from "../../assets/image/Decor/AvatarAlvin.png";

const pay = [
  {
    code: "ALT20230503",
    date: "30/05/2021",
  },
  {
    code: "ALT20230503",
    date: "30/05/2021",
  },
  {
    code: "ALT20230503",
    date: "30/05/2021",
  },
  {
    code: "ALT20230503",
    date: "30/05/2021",
  },
];

const PaymentSuccess = () => {
  return (
    <>
      <Header />
      <DashboardLayout>
        <Title className="mb-4">Thanh toán thành công</Title>
        <div className="flex justify-end w-[1560px]">
          <Box>
            <div className="flex justify-center items-center my-[30px] gap-7">
              <button>
                <PreviousArrowIcon />
              </button>
              {pay.map((item) => (
                <PaymentCard code={item.code} date={item.date} />
              ))}
              <button>
                <NextArrowIcon />
              </button>
            </div>
            <div className="flex justify-between mx-[125px] my-4 text-xl">
              <div>Số lượng vé: {pay.length} vé</div>
              <div>Trang 1/3</div>
            </div>
          </Box>
        </div>
        <div className="flex justify-center items-center gap-6 p-6">
          <Button style={{ fontSize: "18px" }} className="w-[160px]">
            Tải về
          </Button>
          <Button style={{ fontSize: "18px" }} className="w-[160px]">
            Gửi Email
          </Button>
        </div>
        <img
          src={AvatarAlvin}
          alt="Alvin"
          className="absolute left-0 top-[260px]"
        />
      </DashboardLayout>
    </>
  );
};

export default PaymentSuccess;
