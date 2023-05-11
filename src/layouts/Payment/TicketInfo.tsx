// react-router-dom
import { useLocation } from "react-router-dom";

// formik
import { Formik, Form, Field } from "formik";

import { Inputs } from "../../interface";

const TicketInfo = () => {
  const location = useLocation();
  const initialValues: Inputs = location.state;

  return (
    <Formik initialValues={initialValues} onSubmit={(values, actions) => {}}>
      {() => (
        <Form className="grid grid-cols-8 gap-x-16 gap-y-4 text-xl font-bold pl-[117px] pr-[91px]">
          <label className="col-span-3">
            Số tiền thanh toán
            <Field
              type="text"
              name="price"
              className="mt-2 text-lg font-normal"
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
              type="text"
              name="fullname"
              className="mt-2 text-lg font-normal"
              readOnly
            />
          </label>
          <label className="col-start-1 col-span-3">
            Điện thoại
            <Field
              type="text"
              name="phone"
              className="mt-2 text-lg font-normal"
              readOnly
            />
          </label>
          <label className="col-start-1 col-span-5">
            Email
            <Field
              type="text"
              name="email"
              className="mt-2 text-lg font-normal"
              readOnly
            />
          </label>
        </Form>
      )}
    </Formik>
  );
};

export default TicketInfo;
