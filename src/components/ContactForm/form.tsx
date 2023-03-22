import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactFrom: React.FC = () => {
  return (
    <div>
      <div className="mx-auto  ">
        <h1 className="text-center text-2xl font-bold  sm:text-3xl mt-10 ">
          {" "}
          Contact
        </h1>

        <p className="mx-auto text-lg mt-4 max-w-sm  text-center text-gray-500">
          for more info or enquiries please fill the form below
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
            const errors = {};
            // if (!values.email) {
            //     errors.email = 'Required';
            // } else if (
            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            // ) {
            //     errors.email = 'Invalid email address';
            // }
            // if (!values.userFirstName) {
            //     errors.userFirstName = 'Required';
            // }
            // if (!values.userLastName) {
            //     errors.userLastName = 'Required';
            // }
            // if (!values.userName) {
            //     errors.userName = 'Required';
            // }
            // if (!values.phoneNumber) {
            //     errors.phoneNumber = 'Required';
            // }
            // if (!values.userPassword) {
            //     errors.userPassword = 'Required';
            // }
            // if (!values.confirmPassword) {
            //     errors.confirmPassword = 'Required';
            // } else if (values.userPassword !== values.confirmPassword) {
            //     errors.confirmPassword = 'Password does not match';
            // }
            return errors;
          }}
          onSubmit={() => console.log("submitted")}
        >
          {({ isSubmitting }) => {
            return (
              <Form
                action=""
                className="mt-6   items-center  gap-10  w-full  flex  flex-col rounded-lg p-8 shadow-sm "
              >
                <div className=" w-3/5  grid lg:grid-rows-1  md:grid-cols-2 grid-cols-1 lg:gap-y-[5em] gap-y-[2em] gap-x-10 pb-[1em] ">
                  <div className="relative mt-1">
                    <label htmlFor="email" className="sr-only text-lg">
                      {" "}
                      Email
                    </label>
                    <div className="relative">
                      <Field
                        className="  w-full  rounded-lg border-2 border-black bg-white  p-4 pr-12 text-base text-black shadow-lg"
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
                        className=" w-full   border-2 border-black  shadow-lg bg-white  rounded-lg p-4 pr-12 text-base"
                        type="phone"
                        name="phoneNumber"
                        placeholder=" email "
                      />

                      <ErrorMessage
                        className=" text-error mt-1 text-lg"
                        name="phoneNumber"
                        component="div"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative mt-1 w-3/5">
                  <label htmlFor="userFirstName" className="sr-only text-lg">
                    First Name
                  </label>
                  <div className="relative">
                    <Field
                      className="  w-full   rounded-lg  border-2 border-black bg-white  p-4 pr-12  text-base shadow-lg"
                      type="text"
                      name="userFirstName"
                      placeholder="Phone "
                    />

                    <ErrorMessage
                      className=" text-error mt-1 text-lg"
                      name="userFirstName"
                      component="div"
                    />
                  </div>
                </div>
                <div className="relative mt-1 w-3/5  ">
                  <label htmlFor="userFirstName" className="sr-only text-lg">
                    First Name
                  </label>
                  <div className="relative">
                    <Field
                      className="  w-full  rounded-lg border-2 border-black  shadow-lg  bg-white  p-4 pr-12  text-base "
                      type="text"
                      name="userFirstName"
                      placeholder="Subject"
                    />

                    <ErrorMessage
                      className=" text-error mt-1 text-lg"
                      name="userFirstName"
                      component="div"
                    />
                  </div>
                </div>
                <div className="relative mt-1 w-3/5  ">
                  <label htmlFor="userFirstName" className="sr-only text-lg">
                    First Name
                  </label>
                  <div className="relative">
                    <Field
                      className="  w-full  rounded-lg border-2 border-black  shadow-lg  bg-white  p-4 pr-12  text-base "
                      type="text"
                      name="userFirstName"
                      placeholder="Message"
                    />

                    <ErrorMessage
                      className=" text-error mt-1 text-lg"
                      name="userFirstName"
                      component="div"
                    />
                  </div>
                </div>

                <div className="flex  flex-col gap-10 items-center ">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="block lg:w-96 w-full rounded-lg bg-pri_var_2 px-5 py-3 text-base font-medium text-white"
                  >
                    {" "}
                    Submit
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default ContactFrom;
