import TickIcon from "../../components/Icon/TickIcon";
import QRCode from "../../assets/image/QRCode.png";

type Props = {
  qrcode?: string;
  title?: string;
  description?: string;
  date?: string;
  price?: string;
  className?: string;
  [key: string]: any;
};

const PaymentCard = ({
  code,
  title,
  date,
  className = "",
  ...props
}: Props) => {
  return (
    <div
      className={`flex flex-col justify-center rounded-xl bg-white text-center ${
        className || ""
      }`}
      {...props}
    >
      <img src={QRCode} alt="#" className="mx-[75px] my-10 w-[150px]" />
      <div className="mb-6 text-[32px] font-bold">{code}</div>
      <h2 className="text-ticketTextColor font-bold uppercase">vé cổng</h2>
      <b>---</b>
      <div className="my-4 text-lg text-descriptionTextColor font-medium">
        Ngày sử dụng: {date}
      </div>
      <div className="my-4 flex justify-center">
        <TickIcon />
      </div>
    </div>
  );
};

export default PaymentCard;
