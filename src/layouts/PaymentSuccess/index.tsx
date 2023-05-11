import React, { useEffect, useState } from "react";

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

// redux
import { getTicketById } from "../../store/feathers/ticketSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../../store/store";

const PaymentSuccess = () => {
  const dispatch = useDispatch<AppDispatch>();
  const ticket = useAppSelector((state: any) => state.ticket.tickets);

  const [loading, setLoading] = useState(true);

  console.log("ticket1: ", ticket);

  useEffect(() => {
    if (ticket.length > 0) {
      const latestTicketId = ticket[ticket.length - 1].id;
      dispatch(getTicketById(latestTicketId));
      console.log("id: ", latestTicketId);
      console.log("ticket: ", ticket);
    }

    setLoading(false);
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <DashboardLayout>
        <Title className="mb-4">Thanh toán thành công</Title>
        <div className="flex justify-end">
          <Box>
            <div className="flex justify-between items-center my-[30px] w-[1419px]">
              <button>
                <PreviousArrowIcon />
              </button>
              <div className="flex justify-center gap-7">
                {ticket[0] &&
                  Array.from(Array(ticket[0].number).keys()).map((index) => {
                    return (
                      <PaymentCard
                        key={index}
                        code={ticket[0].code}
                        date={ticket[0].date}
                      />
                    );
                  })}
              </div>
              <button>
                <NextArrowIcon />
              </button>
            </div>
            <div className="flex justify-between mx-[125px] my-4 text-xl">
              {/* <div>Số lượng vé: {ticket[0].number} vé</div> */}
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
          className="absolute left-0 top-[260px] z-30"
        />
      </DashboardLayout>
    </>
  );
};

export default PaymentSuccess;
