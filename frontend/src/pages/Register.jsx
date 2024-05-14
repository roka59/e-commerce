import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../validationSchemas/registerSchema";
import { useState } from "react";
import submitAction from "../actions/submitAction";

function Register() {
    const [passwordType, setPasswordType] = useState("password");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  async function onSubmit(data) {
    await submitAction(data);
  }
  console.log(errors);
  function togglePasswordType() {
    let newPasswordType = "text";
    if (passwordType === "text") {
      newPasswordType = "password";
    }
    setPasswordType(newPasswordType);
  }
  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Logo width="150" />
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register using your personal details
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Already a member?{" "}
              <Link
                to="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Login to your account
              </Link>
            </p>
          </div>

          <div className="mt-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex justify-between">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name*
                  </label>
                  <div className="mt-2">
                    <input
                      id="firstName"
                      {...register("firstName")}
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1.5"
                    />
                  </div>
                  {/* {errors.firstName ? <span className="text-xs text-red-500">{errors.firstName.message}</span> : ""} */}
                  {errors.firstName && (
                    <span className="text-xs text-red-500">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name*
                  </label>
                  <div className="mt-2">
                    <input
                      id="lastName"
                      {...register("lastName")}
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1.5"
                    />
                  </div>
                  {errors.lastName && (
                    <span className="text-xs text-red-500">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mobile
                </label>
                <div className="mt-2">
                  <input
                    id="mobile"
                    {...register("mobile")}
                    type="tel"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1.5"
                  />
                </div>

              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email*
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    {...register("email")}
                    type="email"
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1.5"
                  />
                </div>
                {errors.email && (
                  <span className="text-xs text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password*
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    id="password"
                    type={passwordType}
                    {...register("password")}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <div
                    onClick={togglePasswordType}
                    className="absolute inset-y-0 right-2 flex items-center"
                  >
                    {
                        passwordType == "password" ?
                        <i className="fa-regular fa-eye"></i> :
                        <i className="fa-regular fa-eye-slash"></i>
                    }
                    
                  </div>
                </div>
                {errors.password && (
                  <span className="text-xs text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Verify password*
                </label>
                <div className="mt-2">
                  <input
                    id="verifyPassword"
                    {...register("verifyPassword")}
                    type={passwordType}
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1.5"
                  />
                </div>
                {errors.verifyPassword && (
                    <span className="text-xs text-red-500">
                    {errors.verifyPassword.message}
                  </span>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-1.5"
                >
                  Sign in
                </button>
              </div>
              <div className="text-center">
                <Link
                  to="/"
                  className="font-semibold text-indigo-600 hover:text-indigo-500 "
                >
                  Back to home
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default Register;
