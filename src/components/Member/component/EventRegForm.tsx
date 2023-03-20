import Modal from "@/components/components/Modals";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";

type PaymentFormModalProps = {
  openNow: any; // You should replace 'any' with the actual type of 'openNow'
  onClose: any; // You should replace 'any' with the actual type of 'onClose'
  title: string;
  description: string;
};
type ModalOpenerProps = {
  openNow: boolean;
  onClose: () => void;
};
const EventRegForm: React.FC<PaymentFormModalProps> = ({
  openNow,
  onClose,
  title,
  description,
}) => {
  const onLogoutButton = () => {
    console.log("logging out...");
    onClose();
  };
  // const handleSubmit = async (values,{setSubmitting,resetForm})=>(
  //       consol.log(values)
  //        )

  return (
    <div>
      <Modal openNow={openNow} onClose={onClose}>
        <Dialog.Title
          as="h3"
          className=" lg:ml-80 ml-0 mb-10 text-3xl text-center font-bold leading-6  flex items-center w-full"
        >
          {title}
        </Dialog.Title>

        <div className="mx-auto  ">
          <h1 className="text-center text-2xl font-bold text-[#017d3f] sm:text-3xl"></h1>

          <p className="mx-auto text-lg mt-4 max-w-md text-center text-gray-500">
            {description}
          </p>
          <Formik
            initialValues={{
              email: "",
              phoneNumber: "",
              userFirstName: "",
              userLastName: "",
              userName: "",
              userPassword: "",
              confirmPassword: "",
            }}
            validate={(values) => {
              const errors = {
                email: "",
                phoneNumber: "",
                userFirstName: "",
                userLastName: "",
                userName: "",
                userPassword: "",
                confirmPassword: "",
              };
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.userFirstName) {
                errors.userFirstName = "Required";
              }
              if (!values.userLastName) {
                errors.userLastName = "Required";
              }
              if (!values.userName) {
                errors.userName = "Required";
              }
              if (!values.phoneNumber) {
                errors.phoneNumber = "Required";
              }
              if (!values.userPassword) {
                errors.userPassword = "Required";
              }
              if (!values.confirmPassword) {
                errors.confirmPassword = "Required";
              } else if (values.userPassword !== values.confirmPassword) {
                errors.confirmPassword = "Password does not match";
              }
              return errors;
            }}
            onSubmit={() => console.log("submitted")}
          >
            {({ isSubmitting }) => {
              return (
                <Form
                  action=""
                  className="mt-6 mb-0  w-full space-y-4 rounded-lg p-8 shadow-2xl"
                >
                  <div className="   grid lg:grid-rows-1  md:grid-cols-2 grid-cols-1 lg:gap-y-[5em] gap-y-[2em] gap-x-5 pb-[1em] ">
                    <div className="relative mt-1">
                      <label htmlFor="email" className="sr-only text-lg">
                        {" "}
                        Email
                      </label>
                      <div className="relative">
                        <Field
                          className="w-full rounded-lg border-2 border-black bg-white  p-4 pr-12 text-base text-black shadow-lg"
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                        />

                        <ErrorMessage
                          className=" text-error mt-1 text-lg"
                          name="email"
                          component="div"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="sr-only text-lg">
                        {" "}
                        Phone number{" "}
                      </label>
                      <div className="relative mt-1">
                        <Field
                          className="w-full border-2 border-black  shadow-lg bg-white  rounded-lg p-4 pr-12 text-base"
                          type="phone"
                          name="phoneNumber"
                          placeholder=" Last Name "
                        />

                        <ErrorMessage
                          className=" text-error mt-1 text-lg"
                          name="phoneNumber"
                          component="div"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-1">
                    <label htmlFor="userFirstName" className="sr-only text-lg">
                      First Name
                    </label>
                    <div className="relative">
                      <Field
                        className="w-full rounded-lg  border-2 border-black bg-white  p-4 pr-12  text-base shadow-lg"
                        type="text"
                        name="userFirstName"
                        placeholder="Email"
                      />

                      <ErrorMessage
                        className=" text-error mt-1 text-lg"
                        name="userFirstName"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="relative mt-1">
                    <label htmlFor="userFirstName" className="sr-only text-lg">
                      First Name
                    </label>
                    <div className="relative">
                      <Field
                        className="w-full rounded-lg border-2 border-black  shadow-lg  bg-white  p-4 pr-12  text-base "
                        type="text"
                        name="userFirstName"
                        placeholder="Organisation"
                      />

                      <ErrorMessage
                        className=" text-error mt-1 text-lg"
                        name="userFirstName"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="  grid lg:grid-rows-1  md:grid-cols-2 grid-cols-1 lg:gap-y-[5em] gap-y-[2em] gap-x-5 pb-[1em]">
                    <div className="relative mt-1">
                      <label
                        htmlFor="userLastName"
                        className="sr-only text-slate-900  text-lg"
                      >
                        {" "}
                        Last Name{" "}
                      </label>
                      <div className="relative">
                        <Field
                          className="w-full   bg-white text-slate-900  rounded-lg p-4 pr-12 text-base  border-2 border-black  shadow-lg "
                          type="text"
                          name="userLastName"
                          placeholder="Phone"
                        />

                        <ErrorMessage
                          className="text-lg text-error mt-1"
                          name="userLastName"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="relative mt-1">
                      <label htmlFor="userName" className="sr-only text-lg">
                        {" "}
                        Username{" "}
                      </label>
                      <div className="relative">
                        <Field
                          className="w-full bg-white text-slate-900  rounded-lg p-4 pr-12 text-base  border-2 border-black  shadow-lg "
                          type="text"
                          name="Amount to Pay"
                          placeholder=" Amount to Pay"
                        />

                        <ErrorMessage
                          className="text-lg text-error mt-1"
                          name="Amount to Pay"
                          component="div"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-rows-1  md:grid-cols-2 grid-cols-1 lg:gap-y-[10em] gap-y-[2em] gap-x-10 pb-[1em] ">
                    <div className="relative mt-1">
                      <label htmlFor="password" className="sr-only text-lg">
                        Password
                      </label>
                      <div className="relative">
                        <Field
                          className="w-full   border-2 border-black  shadow-lg bg-white text-slate-900  rounded-lg p-4 pr-12 text-base "
                          type="text"
                          name="organisation"
                          placeholder="Position "
                        />

                        <ErrorMessage
                          className="text-lg text-error mt-1"
                          name="organisation"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className=" border-4 lg:w-[453px] w-full px-6 flex justify-center items-center flex-col  border-dashed	 h-[210px]">
                      <p className=" text-center">
                        {" "}
                        Upload Image in passport photo size (600 X 600){" "}
                      </p>
                      {/* <button className=" mt-10 bg-pri text-white w-[110px] rounded-md h-[50px] font-bold text-lg ">
                        {" "}
                        upload{" "}
                      </button> */}
                      <input
                        type="file"
                        name="file"
                        id="file"
                        className="mt-10 bg-pri text-white w-full rounded-md h-[50px] font-bold text-lg  "
                        // className=" mt-10 bg-pri text-white w-full rounded-md h-[50px] font-bold text-lg  "
                      />
                    </div>
                  </div>

                  <div className="flex  flex-col gap-10 items-center justify-between">
                    <button
                      onClick={onClose}
                      disabled={isSubmitting}
                      type="submit"
                      className="block lg:w-96 w-full rounded-lg bg-pri_var_2 px-5 py-3 text-base font-medium text-white"
                    >
                      {" "}
                      Join Now{" "}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default EventRegForm;
