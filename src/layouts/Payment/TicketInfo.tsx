import { useState } from "react";
import Button from "../../components/Button";

interface Inputs {
  price?: string;
  number?: number;
  date?: Date;
  fullname?: string;
  phone?: string;
  email?: string;
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
        className="grid grid-cols-8 gap-x-16 gap-y-4 text-xl font-bold pl-[117px] pr-[91px]"
      >
        <label className="col-span-3">
          Số tiền thanh toán
          <input
            type="string"
            name="price"
            value={inputs.price || ""}
            onChange={handleChange}
            className="mt-2 text-lg font-normal"
          />
        </label>
        <label className="col-span-2">
          Số lượng vé
          <div className="flex items-center gap-2">
            <input
              type="number"
              name="number"
              value={inputs.number || ""}
              onChange={handleChange}
              className="mt-2 text-lg font-normal"
            />
            vé
          </div>
        </label>
        <label className="col-span-3">
          Ngày sử dụng
          <input
            type="text"
            name="date"
            value={
              inputs.date
                ? new Date(inputs.date).toISOString().substr(0, 10)
                : ""
            }
            onChange={handleChange}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            min={new Date().toISOString().split("T")[0]}
            className="mt-2 text-lg font-normal"
          />
        </label>
        <label className="col-start-1 col-span-5">
          Thông tin liên hệ
          <input
            type="string"
            name="fullname"
            value={inputs.fullname || ""}
            onChange={handleChange}
            className="mt-2 text-lg font-normal"
          />
        </label>
        <label className="col-start-1 col-span-3">
          Điện thoại
          <input
            type="string"
            name="phone"
            value={inputs.phone || ""}
            onChange={handleChange}
            className="mt-2 text-lg font-normal"
          />
        </label>
        <label className="col-start-1 col-span-5">
          Email
          <input
            type="string"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            className="mt-2 text-lg font-normal"
          />
        </label>
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
