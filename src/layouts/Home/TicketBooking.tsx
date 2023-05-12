// react-router-dom
import { useNavigate } from "react-router-dom";

// component
import Button from "../../components/Button";

// formik
import { Formik, Form, Field, ErrorMessage } from "formik";

// ant
import { DatePicker } from "antd";
import moment from "moment";

// yup
import * as Yup from "yup";

// icon
import BottomArrowIcon from "../../components/Icon/BottomArrowIcon";
import CalendarIcon from "../../components/Icon/CalendarIcon";

// type
import { Inputs } from "../../interface";

const validationSchema = Yup.object({
  package: Yup.string().required("Vui lòng chọn gói vé"),
  number: Yup.number()
    .required("Vui lòng nhập số lượng vé")
    .min(1, "Số lượng vé không hợp lệ"),
  date: Yup.date().required("Vui lòng chọn ngày sử dụng"),
  fullname: Yup.string().required("Vui lòng nhập họ và tên"),
  phone: Yup.string()
    .required("Vui lòng nhập số điện thoại")
    .matches(/^(0|\+84)[3|5|7|8|9][0-9]{8}$/, "Số điện thoại không hợp lệ"),
  email: Yup.string()
    .required("Vui lòng nhập địa chỉ email")
    .email("Địa chỉ email không hợp lệ"),
});

const TicketBooking = () => {
  const navigate = useNavigate();

  const initialValues: Inputs = {
    package: "Gói gia đình",
    number: "",
    date: "",
    fullname: "",
    phone: "",
    email: "",
    price: "",
  };

  // calculate the price
  const getPrice = (values: Inputs) => {
    const { package: packageValue, number } = values;
    if (packageValue === "Gói thông thường" && number) {
      const price = 80000 * number;
      return price.toLocaleString("vi-VN") + " vnđ";
    } else if (packageValue === "Gói Silver" && number) {
      const price = 180000 * number;
      return price.toLocaleString("vi-VN") + " vnđ";
    } else if (packageValue === "Gói gia đình" && number) {
      const price = 240000 * number;
      return price.toLocaleString("vi-VN") + " vnđ";
    } else {
      return 0 + " vnđ";
    }
  };

  const onSubmit = (values: Inputs) => {
    // console.log(values.date?.toLocaleString());
    const price = getPrice(values);
    const initialValuesWithPrice = { ...values, price };
    console.log(initialValuesWithPrice);
    navigate("/thanh-toan", { state: initialValuesWithPrice });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="grid grid-cols-6 p-[22.49px] gap-4">
          <Field as="select" name="package" className="col-span-5">
            <option value="Gói thông thường">Gói thông thường</option>
            <option value="Gói Silver">Gói Silver</option>
            <option value="Gói gia đình">Gói gia đình</option>
          </Field>
          <div className="col-span-1 h-[56px] shadow-3xl">
            <BottomArrowIcon />
          </div>
          <div className="col-span-2">
            <Field placeholder="Số lượng vé" type="number" name="number" />
            <ErrorMessage
              name="number"
              component="div"
              className={
                "text-red-500 text-lg mt-1" +
                (errors.number && touched.number ? " h-3" : "")
              }
            />
          </div>
          <div className="col-span-4">
            <Field name="date">
              {({ field }: any) => (
                <DatePicker
                  placeholder="Ngày sử dụng"
                  format="DD/MM/YYYY"
                  name={field.name}
                  showToday={false}
                  suffixIcon={
                    <div className="ml-3 mr-2">
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
              name="date"
              component="div"
              className={
                "text-red-500 text-lg mt-1" +
                (errors.date && touched.date ? " h-3" : "")
              }
            />
          </div>
          <div className="col-span-6">
            <Field placeholder="Họ và tên" type="text" name="fullname" />
            <ErrorMessage
              name="fullname"
              component="div"
              className={
                "text-red-500 text-lg mt-1" +
                (errors.fullname && touched.fullname ? " h-3" : "")
              }
            />
          </div>
          <div className="col-span-6">
            <Field
              placeholder="Số điện thoại"
              type="text"
              name="phone"
              maxLength="10"
              onKeyPress={(event: any) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <ErrorMessage
              name="phone"
              component="div"
              className={
                "text-red-500 text-lg mt-1" +
                (errors.phone && touched.phone ? " h-3" : "")
              }
            />
          </div>
          <div className="col-span-6">
            <Field placeholder="Địa chỉ email" type="text" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className={
                "text-red-500 text-lg mt-1" +
                (errors.email && touched.email ? " h-3" : "")
              }
            />
          </div>
          <Button
            style={{ height: "60px" }}
            className="mt-2 col-start-2 col-span-4 w-full flex-shrink-0"
          >
            Đặt vé
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default TicketBooking;
