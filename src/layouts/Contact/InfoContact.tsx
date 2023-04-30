import { useState } from "react";
import Button from "../../components/Button";

interface Inputs {
  fullname?: string;
  email?: string;
  phone?: string;
  address?: string;
  message?: string;
}

const InfoContact = () => {
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
        className="grid grid-cols-12 pl-[56px] pr-[62px] gap-6"
      >
        <input
          placeholder="Họ và tên"
          type="text"
          name="fullname"
          value={inputs.fullname || ""}
          onChange={handleChange}
          className="col-span-4"
        />
        <input
          placeholder="Địa chỉ email"
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          className="col-span-8"
        />
        <input
          placeholder="Số điện thoại"
          type="text"
          name="phone"
          value={inputs.phone || ""}
          onChange={handleChange}
          className="col-span-4"
        />
        <input
          placeholder="Địa chỉ"
          type="text"
          name="address"
          value={inputs.address || ""}
          onChange={handleChange}
          className="col-span-8"
        />
        <textarea
          placeholder="Lời nhắn"
          name="message"
          value={inputs.message || ""}
          onChange={handleChange}
          className="col-span-12 h-[152px]"
        />
        <Button
          style={{ height: "60px" }}
          className="mt-6 col-start-4 col-span-6 w-full"
        >
          Gửi liên hệ
        </Button>
      </form>
    </>
  );
};

export default InfoContact;
