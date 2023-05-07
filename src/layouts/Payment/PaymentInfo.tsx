// component
import Button from "../../components/Button";

// formik
import { Formik, Form, Field, ErrorMessage } from "formik";

// yup
import * as Yup from "yup";

// icon
import CalendarIcon from "../../components/Icon/CalendarIcon";

interface Inputs {
  numberCard?: string;
  fullname?: string;
  expirationDate?: Date | "";
  csc?: string;
}

const validationSchema = Yup.object().shape({
  numberCard: Yup.string().required("Vui lòng nhập số thẻ"),
  fullname: Yup.string().required("Vui lòng nhập họ tên chủ thẻ"),
  expirationDate: Yup.date()
    .required("Vui lòng nhập ngày hết hạn")
    .min(new Date(), "Ngày hết hạn không hợp lệ"),
  csc: Yup.string().required("Vui lòng nhập CVV/CVC"),
});

const PaymentInfo = () => {
  const initialValues: Inputs = {
    numberCard: "",
    fullname: "",
    expirationDate: "",
    csc: "",
  };

  const onSubmit = (values: Inputs) => {
    console.log(values);
    window.alert(JSON.stringify(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="grid grid-cols-6 p-[22.49px] gap-4 text-xl font-bold">
          <label className="col-span-6">
            Số thẻ
            <Field
              type="string"
              name="numberCard"
              className="mt-2 text-lg font-normal"
            />
            <ErrorMessage
              name="numberCard"
              component="div"
              className={
                "text-red-500 text-lg mt-1" +
                (errors.numberCard && touched.numberCard ? " h-2" : "")
              }
            />
          </label>
          <label className="col-span-6">
            Họ tên chủ thẻ
            <Field
              type="string"
              name="fullname"
              className="mt-2 text-lg font-normal"
            />
            <ErrorMessage
              name="numberCard"
              component="div"
              className={
                "text-red-500 text-lg mt-1" +
                (errors.numberCard && touched.numberCard ? " h-2" : "")
              }
            />
          </label>
          <label className="col-span-5">
            Ngày hết hạn
            <Field
              type="text"
              name="expirationDate"
              className="mt-2 text-lg font-normal"
              onFocus={(e: any) => (e.target.type = "date")}
              onBlur={(e: any) => (e.target.type = "text")}
              min={new Date().toISOString().split("T")[0]}
            />
            <ErrorMessage
              name="numberCard"
              component="div"
              className={
                "text-red-500 text-lg mt-1" +
                (errors.numberCard && touched.numberCard ? " h-2" : "")
              }
            />
          </label>
          <div className="col-span-1 mt-9 h-[56px] shadow-3xl">
            <CalendarIcon />
          </div>
          <label className="col-span-2">
            CVV/CVC
            <Field
              type="password"
              name="csc"
              className="mt-2 text-lg font-normal"
            />
            <ErrorMessage
              name="numberCard"
              component="div"
              className={
                "text-red-500 text-lg mt-1" +
                (errors.numberCard && touched.numberCard ? " h-2" : "")
              }
            />
          </label>
          <Button
            style={{ height: "60px" }}
            className="mt-2 col-start-2 col-span-4 w-full"
            type="submit"
          >
            Thanh toán
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default PaymentInfo;
