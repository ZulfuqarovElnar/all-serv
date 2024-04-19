import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function Login() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };  

  return (
    <div className="font-sans text-[#333] max-w-7xl mx-auto h-auto">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              if (values.email === 'test@example.com' && values.password === 'password') {
                setSuccessMessage('Login successful!');
                setErrorMessage('');
                navigate('/');
              } else {
                setErrorMessage('Invalid email or password');
                setSuccessMessage('');
              }
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-lg max-md:mx-auto w-full py-16 p-6">
              <div className="">
                <h3 className="text-4xl font-extrabold">Sign in</h3>
                <p className="text-sm mt-6">Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account.</p>
              </div>
              <div>
                <label className="text-sm mb-3 block" htmlFor="email">Email</label>
                <Field name="email" type="text" className="w-full text-sm bg-gray-100 px-4 py-4 rounded-md outline-blue-600" placeholder="Enter email" />
                <ErrorMessage name="email" component="div" className="text-red-500 mt-2" />
              </div>
              <div className="mt-6 relative">
                <label className="text-sm mb-3 block" htmlFor="password">Password</label>
                <Field name="password" type={showPassword ? 'text' : 'password'} className="w-full text-sm bg-gray-100 px-4 py-4 rounded-md outline-blue-600" placeholder="Enter password" />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 top-9 flex items-center px-3 text-gray-500 focus:outline-none"
                >
                  {showPassword ? <HiEyeOff /> : <HiEye />}
                </button>
                <ErrorMessage name="password" component="div" className="text-red-500 mt-2" />
              </div>
              <div className="flex items-center gap-4 justify-between mt-4">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-3 block text-sm">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link to="/" className="text-blue-600 hover:underline">
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div className="mt-10">
                <button type="submit" disabled={isSubmitting} className="w-full shadow-xl py-3 px-4 text-sm font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  {isSubmitting ? 'Logging in...' : 'Log in'}
                </button>
              </div>
              {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
              {successMessage && <div className="text-green-500 mt-4">{successMessage}</div>}
            </Form>
          )}
        </Formik>
        <div className="h-full max-md:mt-10">
          <img src="https://readymadeui.com/login-image.webp" className="w-full h-full object-cover" alt="Dining Experience" />
        </div>
      </div>
    </div>
  );
}
