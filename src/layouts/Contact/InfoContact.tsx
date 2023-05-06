// import { useState } from "react";
// import Button from "../../components/Button";

// interface Inputs {
//   fullname?: string;
//   email?: string;
//   phone?: string;
//   address?: string;
//   message?: string;
// }

// const InfoContact = () => {
//   const [inputs, setInputs] = useState<Inputs>({});

//   const handleChange = (event: any) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs((values) => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = (event: any) => {
//     event.preventDefault();
//     console.log(inputs);
//     window.alert(JSON.stringify(inputs));
//   };

//   return (
//     <>
//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-12 pl-[56px] pr-[62px] gap-6"
//       >
//         <input
//           placeholder="Họ và tên"
//           type="text"
//           name="fullname"
//           value={inputs.fullname || ""}
//           onChange={handleChange}
//           className="col-span-4"
//         />
//         <input
//           placeholder="Địa chỉ email"
//           type="email"
//           name="email"
//           value={inputs.email || ""}
//           onChange={handleChange}
//           className="col-span-8"
//         />
//         <input
//           placeholder="Số điện thoại"
//           type="text"
//           name="phone"
//           value={inputs.phone || ""}
//           onChange={handleChange}
//           className="col-span-4"
//         />
//         <input
//           placeholder="Địa chỉ"
//           type="text"
//           name="address"
//           value={inputs.address || ""}
//           onChange={handleChange}
//           className="col-span-8"
//         />
//         <textarea
//           placeholder="Lời nhắn"
//           name="message"
//           value={inputs.message || ""}
//           onChange={handleChange}
//           className="col-span-12 h-[152px]"
//         />
//         <Button
//           style={{ height: "60px" }}
//           className="mt-6 col-start-4 col-span-6 w-full"
//         >
//           Gửi liên hệ
//         </Button>
//       </form>
//     </>
//   );
// };

// export default InfoContact;

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";

const InfoContactSchema = Yup.object().shape({
  fullname: Yup.string().required("Họ và tên không được để trống"),
  email: Yup.string()
    .email("Địa chỉ email không hợp lệ")
    .required("Địa chỉ email không được để trống"),
  phone: Yup.string().required("Số điện thoại không được để trống"),
  address: Yup.string().required("Địa chỉ không được để trống"),
  message: Yup.string().required("Lời nhắn không được để trống"),
});

const InfoContact = () => {
  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  };

  const onSubmit = (values: any) => {
    console.log(values);
    window.alert(JSON.stringify(values));
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
                  "text-red-500 text-sm mt-1" +
                  (errors.fullname && touched.fullname ? " h-0" : "")
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
                  "text-red-500 text-sm mt-1" +
                  (errors.fullname && touched.fullname ? " h-0" : "")
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
                  "text-red-500 text-sm mt-1" +
                  (errors.fullname && touched.fullname ? " h-0" : "")
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
                  "text-red-500 text-sm mt-1" +
                  (errors.fullname && touched.fullname ? " h-0" : "")
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
                  "text-red-500 text-sm mt-1" +
                  (errors.fullname && touched.fullname ? " h-0" : "")
                }
              />
            </div>
            <Button className="col-start-4 col-span-6 mt-6 w-full flex-shrink-0">
              Gửi liên hệ
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default InfoContact;
