// react-router-dom
import { useLocation } from "react-router-dom";

// component
import Button from "../../components/Button";

// formik
import { Formik, Form, Field } from "formik";

interface Inputs {
  price?: string;
  number?: number;
  date?: Date;
  fullname?: string;
  phone?: string;
  email?: string;
  package?: string;
}

const TicketInfo = () => {
  const location = useLocation();
  const initialValues: Inputs = location.state;

  const onSubmit = (values: Inputs) => {
    console.log(values);
    window.alert(JSON.stringify(values));
  };

  const getPrice = () => {
    const { package: packageValue, number } = initialValues;
    if (packageValue === "Gói thông thường" && number) {
      const price = 80000 * number;
      return price.toLocaleString("vi-VN") + " vnđ";
    } else if (packageValue === "Gói silver" && number) {
      const price = 180000 * number;
      return price.toLocaleString("vi-VN") + " vnđ";
    } else if (packageValue === "Gói gia đình" && number) {
      const price = 240000 * number;
      return price.toLocaleString("vi-VN") + " vnđ";
    } else {
      return 0 + " vnđ";
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {() => (
        <Form className="grid grid-cols-8 gap-x-16 gap-y-4 text-xl font-bold pl-[117px] pr-[91px]">
          <label className="col-span-3">
            Số tiền thanh toán
            <Field
              type="string"
              name="price"
              className="mt-2 text-lg font-normal"
              value={getPrice()}
              readOnly
            />
          </label>
          <label className="col-span-2">
            Số lượng vé
            <div className="flex items-center gap-2">
              <Field
                type="number"
                name="number"
                className="mt-2 text-lg font-normal"
                readOnly
              />
              vé
            </div>
          </label>
          <label className="col-span-3">
            Ngày sử dụng
            <Field
              type="date"
              name="date"
              className="mt-2 text-lg font-normal"
              min={new Date().toISOString().split("T")[0]}
              readOnly
            />
          </label>
          <label className="col-start-1 col-span-5">
            Thông tin liên hệ
            <Field
              type="string"
              name="fullname"
              className="mt-2 text-lg font-normal"
              readOnly
            />
          </label>
          <label className="col-start-1 col-span-3">
            Điện thoại
            <Field
              type="string"
              name="phone"
              className="mt-2 text-lg font-normal"
              readOnly
            />
          </label>
          <label className="col-start-1 col-span-5">
            Email
            <Field
              type="string"
              name="email"
              className="mt-2 text-lg font-normal"
              readOnly
            />
          </label>
          {/* <Button
            style={{ height: "60px" }}
            className="mt-2 col-start-2 col-span-4 w-full"
          >
            Thanh toán
          </Button> */}
        </Form>
      )}
    </Formik>
  );
};

export default TicketInfo;
