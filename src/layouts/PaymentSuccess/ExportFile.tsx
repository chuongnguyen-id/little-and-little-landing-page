import { useLocation } from "react-router-dom";
import PaymentCard from "./PaymentCard";

type ExportFileProps = {
  componentRef: any;
};

const ExportFile = ({ componentRef }: ExportFileProps) => {
  const location = useLocation();

  return (
    <div
      ref={componentRef}
      className="absolute -top-full -left-full pl-10 w-[400px]"
    >
      <PaymentCard
        code={location.state.code}
        fullname={location.state.fullname}
        number={location.state.number}
        price={location.state.price}
        date={location.state.date}
        phone={location.state.phone}
        email={location.state.email}
      />
    </div>
  );
};

export default ExportFile;
