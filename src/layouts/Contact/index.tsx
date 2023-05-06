import React from "react";

// component
import Header from "../Header";
import DashboardLayout from "../../components/DashboardLayout";
import Box from "../../components/Box";
import InfoContact from "./InfoContact";
import Title from "../../components/Title";

// icon
import AddressIcon from "../../components/Icon/AddressIcon";
import EmailIcon from "../../components/Icon/EmailIcon";
import PhoneIcon from "../../components/Icon/PhoneIcon";

// image
import AvatarAlex from "../../assets/image/Decor/AvatarAlex.png";

const contact = [
  {
    icon: <AddressIcon />,
    label: "Địa chỉ:",
    info: "86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh",
  },
  {
    icon: <EmailIcon />,
    label: "Email:",
    info: "investigate@your-site.com",
  },
  {
    icon: <PhoneIcon />,
    label: "Phone:",
    info: "+84 145 689 798",
  },
];

const Contact = () => {
  return (
    <>
      <Header />
      <DashboardLayout>
        <Title>Liên hệ</Title>
        <div className="flex justify-end w-[1600px] gap-[30px]">
          <Box style={{ width: "950px" }}>
            <p className="p-[56px] pb-[35px] text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac mollis justo. Etiam volutpat tellus quis risus
              volutpat, ut posuere ex facilisis.
            </p>
            <InfoContact />
          </Box>
          <div className="w-[539px] flex flex-col gap-y-4">
            {contact.map((item) => (
              <Box>
                <div className="flex px-9 py-12 gap-6">
                  {item.icon}
                  <div>
                    <h2 className="text-labelTextColor">{item.label}</h2>
                    <p className="text-infoTextColor text-base">{item.info}</p>
                  </div>
                </div>
              </Box>
            ))}
          </div>
        </div>
        <img
          src={AvatarAlex}
          alt="Alex"
          className="absolute left-0 top-[347px] z-30"
        />
      </DashboardLayout>
    </>
  );
};

export default Contact;
