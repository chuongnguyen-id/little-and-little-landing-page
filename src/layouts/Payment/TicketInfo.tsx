import { useState } from "react";
import Button from "../../components/Button";
import CalendarIcon from "../../components/Icon/CalendarIcon";

interface Inputs {
  numberCard?: string;
  fullname?: string;
  expirationDate?: Date;
  csc?: string;
}

const TicketInfo = () => {
  const [inputs, setInputs] = useState<Inputs>({});

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
        <label>
          Số tiến thanh toán
          <input
            placeholder="Số thẻ"
            type="string"
            name="numberCard"
            value={inputs.numberCard || ""}
            onChange={handleChange}
            className="col-span-6"
          />
        </label>

        <label>
          Họ tên chủ thẻ
          <input
            type="string"
            name="fullname"
            value={inputs.fullname || ""}
            onChange={handleChange}
            className="col-span-6"
          />
        </label>
        <label>
          Ngày hết hạn
          <input
            type="text"
            name="date"
            value={
              inputs.expirationDate
                ? new Date(inputs.expirationDate).toISOString().substr(0, 10)
                : ""
            }
            onChange={handleChange}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            min={new Date().toISOString().split("T")[0]}
            className="col-span-5"
          />
          <div className="col-span-1 h-[56px] shadow-3xl">
            <CalendarIcon />
          </div>
        </label>
        <input
          type="password"
          name="csc"
          value={inputs.csc || ""}
          onChange={handleChange}
          className="col-span-2"
        />
        <Button
          style={{ height: "60px" }}
          className="mt-2 col-start-2 col-span-4 w-full"
        >
          Thanh toán
        </Button>
      </form>
    </>
  );
};

export default TicketInfo;
