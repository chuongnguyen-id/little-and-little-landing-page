import { Link } from "react-router-dom";
import Button from "../../components/Button";
import MiniCalendarIcon from "../../components/Icon/MiniCalendarIcon";

type Props = {
  image?: string;
  title?: string;
  description?: string;
  date?: string;
  price?: string;
  className?: string;
  [key: string]: any;
};

const EventCard = ({
  image,
  title,
  description,
  date,
  price,
  className = "",
  ...props
}: Props) => {
  return (
    <div className={`rounded-xl bg-white ${className || ""}`} {...props}>
      <img src={image} alt="#" className="rounded-t-xl" />
      <div className="my-3 pl-6">
        <div className="text-3xl font-bold">{title}</div>
        <div className="text-lg text-descriptionTextColor font-medium">
          {description}
        </div>
        <div className="flex text-lg text-dateTextColor font-medium">
          <MiniCalendarIcon /> &nbsp;
          {date}
        </div>
        <div className="text-[32px] text-priceTextColor font-bold py-2">
          {price}
        </div>
        <Link to="/chi-tiet">
          <Button style={{ fontSize: "18px" }} className="w-[200px]">
            Xem chi tiết
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
