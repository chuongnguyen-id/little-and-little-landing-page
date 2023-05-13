import TickIcon from "../../components/Icon/TickIcon";
import QRCode from "../../assets/image/QRCode.png";

type Props = {
  qrcode?: string;
  title?: string;
  description?: string;
  fullname?: string;
  number?: number;
  date?: any;
  phone?: string;
  email?: string;
  price?: string;
  className?: string;
  [key: string]: any;
};

const PaymentCard = ({
  code,
  title,
  fullname,
  number,
  price,
  date,
  phone,
  email,
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
      <div className="flex justify-center my-10">
        <img src={QRCode} alt="#" className="w-fit" />
      </div>
      <div className="mb-6 text-[32px] font-bold">{code}</div>
      <h2 className="text-ticketTextColor font-bold uppercase">vé cổng</h2>
      <b>---</b>
      {fullname && (
        <div className="my-4 text-lg text-descriptionTextColor font-medium">
          Thông tin liên hệ: {fullname}
        </div>
      )}
      {number && (
        <div className="my-4 text-lg text-descriptionTextColor font-medium">
          số lượng vé: {number}
        </div>
      )}
      {price && (
        <div className="my-4 text-lg text-descriptionTextColor font-medium">
          Giá: {price}
        </div>
      )}
      <div className="my-4 text-lg text-descriptionTextColor font-medium">
        Ngày sử dụng: {date}
      </div>
      {phone && (
        <div className="my-4 text-lg text-descriptionTextColor font-medium">
          Điện thoại: {phone}
        </div>
      )}
      {email && (
        <div className="my-4 text-lg text-descriptionTextColor font-medium">
          Email: {email}
        </div>
      )}
      <div className="my-4 flex justify-center">
        <TickIcon />
      </div>
    </div>
  );
};

export default PaymentCard;
