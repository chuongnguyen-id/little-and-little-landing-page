import React from "react";

// component
import Header from "../Header";
import TicketBooking from "./TicketBooking";
import Box from "../../components/Box";
import TitleCard from "../../components/TitleCard";
import DashboardLayout from "../../components/DashboardLayout";

// icon
import StarIcon from "../../components/Icon/StarIcon";

// image
import LogoDamSen from "../../assets/image/LogoDamSen.png";
import Spine from "../../assets/image/Spine.png";
import AvatarLisa from "../../assets/image/Decor/AvatarLisa.png";

const Home = () => {
  return (
    <>
      <Header />
      <DashboardLayout>
        <title className="flex gap-[30px] mb-14">
          <img src={LogoDamSen} alt="LogoDamSen" />
          <div className="font-icielKoni text-7xl text-titleColor">
            Đầm Sen<br></br>Park
          </div>
        </title>
        <div className="flex gap-[30px]">
          <Box style={{ width: "950px" }}>
            <p className="p-[55px] text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac mollis justo. Etiam volutpat tellus quis risus
              volutpat, ut posuere ex facilisis.
              <br></br>
              <br></br>
              Suspendisse iaculis libero lobortis condimentum gravida. Aenean
              auctor iaculis risus, lobortis molestie lectus consequat a.
            </p>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex pl-[115px] items-center gap-x-2">
                <StarIcon />
                <b className=" text-primaryTextColor text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </b>
              </div>
            ))}
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
            <TitleCard style={{ width: "284px" }}>Vé của bạn</TitleCard>
            <TicketBooking />
          </Box>
        </div>
        <img
          src={AvatarLisa}
          alt="Lisa"
          className="absolute left-0 top-[490px]"
        />
      </DashboardLayout>
    </>
  );
};

export default Home;
