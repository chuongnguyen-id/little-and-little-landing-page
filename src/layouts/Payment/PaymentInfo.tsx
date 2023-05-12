import { useState } from "react";

// component
import Button from "../../components/Button";

// formik
import { Formik, Form, Field, ErrorMessage } from "formik";

// yup
import * as Yup from "yup";

// ant
import { DatePicker, Modal, Spin } from "antd";
import moment from "moment";

// icon
import CalendarIcon from "../../components/Icon/CalendarIcon";
import SadEmoji from "../../components/Icon/SadEmojiIcon";

// react-router-dom
import { useLocation, useNavigate } from "react-router-dom";

// redux
import { createTicket } from "../../store/feathers/ticketSlice";
import { useAppDispatch } from "../../store/store";
import { Inputs } from "../../interface";
import { unwrapResult } from "@reduxjs/toolkit";

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
  const [modal, contextHolder] = Modal.useModal();
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  // random code
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
    setIsLoading(true);
    dispatch(createTicket(values))
      .then(unwrapResult)
      .then(() => {
        navigate("/thanh-toan/thanh-cong", { state: initialValues });
      })
      .catch((error) => {
        console.error(error);
        countDown();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // modal notification
  const countDown = () => {
    let secondsToGo = 3;

    const instance = modal.info({
      closable: false,
      icon: null,
      content: (
        <div className="flex justify-center">
          <div className="absolute z-10 -top-16">
            <SadEmoji />
          </div>
          <div className="absolute top-0 left-0 w-full rounded-t-lg bg-errorHeaderColor h-[84.74px]" />
          <div className="mt-12 p-8 text-xl">
            Hình như đã có lỗi xảy ra khi thanh toán...
            <br />
            Vui lòng kiểm tra lại thông tin liên hệ, thông tin thẻ và thử lại.
          </div>
        </div>
      ),
      footer: null,
      width: "472px",
    });

    const timer = setInterval(() => {
      secondsToGo -= 1;
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };

  return (
    <>
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
                  (errors.cardholderName && touched.cardholderName
                    ? " h-2"
                    : "")
                }
              />
            </label>
            <label className="col-span-6">
              Ngày hết hạn
              <Field name="expirationDate" className="mt-2">
                {({ field }: any) => (
                  <DatePicker
                    placeholder=""
                    format="DD/MM/YYYY"
                    name={field.name}
                    showToday={false}
                    suffixIcon={
                      <div className="ml-3">
                        <CalendarIcon />
                      </div>
                    }
                    size="large"
                    onChange={(date) => {
                      field.onChange({
                        target: {
                          name: field.name,
                          value: date?.toISOString().substring(0, 10),
                        },
                      });
                    }}
                    disabledDate={(current) => {
                      return current && current < moment();
                    }}
                  />
                )}
              </Field>
              <ErrorMessage
                name="expirationDate"
                component="div"
                className={
                  "text-red-500 text-lg mt-1" +
                  (errors.expirationDate && touched.expirationDate
                    ? " h-2"
                    : "")
                }
              />
            </label>
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
              {isLoading ? <Spin /> : "Thanh toán"}
            </Button>
          </Form>
        )}
      </Formik>
      {contextHolder}
    </>
  );
};

export default PaymentInfo;
