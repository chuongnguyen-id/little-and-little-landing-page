import React from "react";
import Header from "../Header";
import DashboardLayout from "../../components/DashboardLayout";

type Props = {};

const Event = (props: Props) => {
  return (
    <>
      <Header />
      <DashboardLayout>Event</DashboardLayout>
    </>
  );
};

export default Event;
