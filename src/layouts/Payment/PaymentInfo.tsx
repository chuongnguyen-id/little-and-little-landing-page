// component
import Button from "../../components/Button";

// formik
import { Formik, Form, Field, ErrorMessage } from "formik";

// yup
import * as Yup from "yup";

// icon
import CalendarIcon from "../../components/Icon/CalendarIcon";

// react-router-dom
import { useLocation, useNavigate } from "react-router-dom";

// redux
import { createTicket } from "../../store/feathers/ticketSlice";
import { useAppDispatch } from "../../store/store";
import { Inputs } from "../../interface";

const validationSchema = Yup.object().shape({
  numberCard: Yup.string()
    .matches(/[0-9]{16}$/, "Số thẻ không hợp lệ")
    .required("Vui lòng nhập số thẻ"),
  cardholderName: Yup.string().required("Vui lòng nhập họ tên chủ thẻ"),
  expirationDate: Yup.date()
    .required("Vui lòng nhập ngày hết hạn")
    .min(new Date(), "Ngày hết hạn không hợp lệ"),
  csc: Yup.string()
    .matches(/[0-9]{3}$/, "CSC không hợp lệ")
    .required("Vui lòng nhập CVV/CVC"),
});

const PaymentInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const date = new Date(location.state.date);
  const code =
    Math.random().toString(36).substring(2, 5).toUpperCase() +
    date.toLocaleDateString().replace(/\//g, "");

  const initialValues: Inputs = {
    ...location.state,
    numberCard: "",
    cardholderName: "",
    expirationDate: "",
    csc: "",
    code,
  };

  const onSubmit = (values: Inputs) => {
    // console.log(values);
    dispatch(createTicket(values));
    navigate("/thanh-toan/thanh-cong");
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
              type="text"
              name="numberCard"
              maxLength="16"
              className="mt-2 text-lg font-normal"
              onKeyPress={(event: any) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
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
              type="text"
              name="cardholderName"
              className="mt-2 text-lg font-normal"
            />
            <ErrorMessage
              name="cardholderName"
              component="div"
              className={
                "text-red-500 text-lg mt-1" +
                (errors.cardholderName && touched.cardholderName ? " h-2" : "")
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
              name="expirationDate"
              component="div"
              className={
                "text-red-500 text-lg mt-1" +
                (errors.expirationDate && touched.expirationDate ? " h-2" : "")
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
              maxLength="3"
              className="mt-2 text-lg font-normal"
              onKeyPress={(event: any) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <ErrorMessage
              name="csc"
              component="div"
              className={
                "text-red-500 text-lg mt-1" +
                (errors.csc && touched.csc ? " h-2" : "")
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
