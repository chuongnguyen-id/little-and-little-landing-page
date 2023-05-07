// component
import { CloseOutlined } from "@ant-design/icons";
import Button from "../../components/Button";

// ant
import { notification } from "antd";

// formik
import { Formik, Form, Field, ErrorMessage } from "formik";

// yup
import * as Yup from "yup";

interface Inputs {
  fullname?: string;
  email?: string;
  phone?: string;
  address?: string;
  message?: string;
}

const InfoContactSchema = Yup.object().shape({
  fullname: Yup.string().required("Vui lòng nhập họ và tên"),
  email: Yup.string()
    .email("Địa chỉ email không hợp lệ")
    .required("Vui lòng nhập địa chỉ email"),
  phone: Yup.string()
    .required("Vui lòng nhập số điện thoại")
    .matches(/^(0|\+84)[3|5|7|8|9][0-9]{8}$/, "Số điện thoại không hợp lệ"),
  address: Yup.string().required("Vui lòng nhập địa chỉ"),
  message: Yup.string().required("Vui lòng nhập lời nhắn"),
});

const InfoContact = () => {
  const initialValues: Inputs = {
    fullname: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  };

  const onSubmit = (values: any, { resetForm }: any) => {
    // console.log(values);
    notification.open({
      message: (
        <div className="text-xl p-6">
          Gửi liên hệ thành công.
          <br />
          Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi, bạn nhé!
        </div>
      ),
      closeIcon: <CloseOutlined style={{ color: "orange" }} />,
      onClose: () => {
        resetForm();
      },
      placement: "top",
      style: {
        width: "472px",
        height: "169px",
        borderRadius: "24px",
      },
    });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={InfoContactSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="grid grid-cols-12 pl-[56px] pr-[62px] gap-6">
            <div className="col-span-4">
              <Field
                type="text"
                name="fullname"
                placeholder="Họ và tên"
                className={
                  "w-full border-gray-300" +
                  (errors.fullname && touched.fullname ? " border-red-500" : "")
                }
              />
              <ErrorMessage
                name="fullname"
                component="div"
                className={
                  "text-red-500 text-lg mt-1" +
                  (errors.fullname && touched.fullname ? " h-1" : "")
                }
              />
            </div>
            <div className="col-span-8">
              <Field
                type="email"
                name="email"
                placeholder="Địa chỉ email"
                className={
                  "w-full border-gray-300" +
                  (errors.email && touched.email ? " border-red-500" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className={
                  "text-red-500 text-lg mt-1" +
                  (errors.fullname && touched.fullname ? " h-1" : "")
                }
              />
            </div>
            <div className="col-span-4">
              <Field
                type="text"
                name="phone"
                placeholder="Số điện thoại"
                className={
                  "w-full border-gray-300" +
                  (errors.phone && touched.phone ? " border-red-500" : "")
                }
              />
              <ErrorMessage
                name="phone"
                component="div"
                className={
                  "text-red-500 text-lg mt-1" +
                  (errors.fullname && touched.fullname ? " h-1" : "")
                }
              />
            </div>
            <div className="col-span-8">
              <Field
                type="text"
                name="address"
                placeholder="Địa chỉ"
                className={
                  "w-full border-gray-300" +
                  (errors.address && touched.address ? " border-red-500" : "")
                }
              />
              <ErrorMessage
                name="address"
                component="div"
                className={
                  "text-red-500 text-lg mt-1" +
                  (errors.fullname && touched.fullname ? " h-1" : "")
                }
              />
            </div>
            <div className="col-span-12">
              <Field
                component="textarea"
                name="message"
                placeholder="Lời nhắn"
                className={
                  "w-full border-gray-300 h-[152px]" +
                  (errors.message && touched.message ? " border-red-500" : "")
                }
              />
              <ErrorMessage
                name="message"
                component="div"
                className={
                  "text-red-500 text-lg mt-1" +
                  (errors.fullname && touched.fullname ? " h-1" : "")
                }
              />
            </div>
            <Button
              style={{ height: "60px" }}
              className="col-start-4 col-span-6 mt-6 w-full flex-shrink-0"
            >
              Gửi liên hệ
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default InfoContact;
