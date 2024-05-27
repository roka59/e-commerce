import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../validationSchemas/loginSchema";
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import signinAction from "../actions/signinAction";
function Login() {
  const navigate = useNavigate()
  const [cookies, setCookies] = useCookies(['authToken'])
  const [backendError, setBackendError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });


  async function onSubmit(data) {
    setBackendError()
    const response = await signinAction(data);
    const {sucess, token, error} = await response.json()
    if(error) {
      setBackendError(error.messages.join(', '))
    } else if(sucess){
 console.log(sucess.message);
 setCookies('authToken', token);
    }
  }

  useEffect(() => {
    if (cookies.authToken) {
      return navigate("/dashboard");
    }
  }, [cookies, navigate])
  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Logo width="150"/>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
         Login using your personal details
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Not a member yet?{" "}
              <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Register now
             </Link>
            </p>
          </div>

          {
            backendError && <p className="text-red-500 text-sm mt-4">{backendError}</p>
}
          <div className="mt-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    {...register('email')}
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                  {errors.email && (
                  <span className="text-xs text-red-500">
                    {errors.email.message}
                  </span>
                )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    {...register('password')}
                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                  {errors.password && (
                  <span className="text-xs text-red-500">
                    {errors.password.message}
                  </span>
                )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <Link to="/reset-password"  className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"

                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
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

export default Login;
