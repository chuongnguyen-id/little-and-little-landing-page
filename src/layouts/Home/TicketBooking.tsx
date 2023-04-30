import { useState } from "react";
import Button from "../../components/Button";
import BottomArrowIcon from "../../components/Icon/BottomArrowIcon";
import CalendarIcon from "../../components/Icon/CalendarIcon";

interface Inputs {
  package?: string;
  number?: number;
  date?: Date;
  fullname?: string;
  phone?: string;
  email?: string;
}

const TicketBooking = () => {
  const [inputs, setInputs] = useState<Inputs>({ package: "Gói gia đình" });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(inputs);
    window.alert(JSON.stringify(inputs));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-6 p-[22.49px] gap-4"
      >
        <select name="package" onChange={handleChange} className="col-span-5">
          <option value="Gói thông thường">Gói thông thường</option>
          <option value="Gói Silver">Gói Silver</option>
          <option value="Gói gia đình">Gói gia đình</option>
        </select>
        <div className="col-span-1 h-[56px] shadow-3xl">
          <BottomArrowIcon />
        </div>
        <input
          placeholder="Số lượng vé"
          type="number"
          name="number"
          value={inputs.number || ""}
          onChange={handleChange}
          className="col-span-2"
        />
        <input
          placeholder="Ngày sử dụng"
          type="text"
          name="date"
          value={
            inputs.date ? new Date(inputs.date).toISOString().substr(0, 10) : ""
          }
          onChange={handleChange}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          min={new Date().toISOString().split("T")[0]}
          className="col-span-3"
        />
        <div className="col-span-1 h-[56px] shadow-3xl">
          <CalendarIcon />
        </div>
        <input
          placeholder="Họ và tên"
          type="text"
          name="fullname"
          value={inputs.fullname || ""}
          onChange={handleChange}
          className="col-span-6"
        />
        <input
          placeholder="Số điện thoại"
          type="text"
          name="phone"
          value={inputs.phone || ""}
          onChange={handleChange}
          className="col-span-6"
        />
        <input
          placeholder="Địa chỉ email"
          type="text"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          className="col-span-6"
        />
        <Button
          style={{ height: "60px" }}
          className="mt-2 col-start-2 col-span-4 w-full"
        >
          Đặt vé
        </Button>
      </form>
    </>
  );
};

export default TicketBooking;
