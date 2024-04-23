import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { HiEye, HiEyeOff } from "react-icons/hi";

interface RegistrationFormValues {
  name: string;
  email: string;
  password: string;
  acceptTerms: boolean;
}

export default function Register() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate(); 
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    acceptTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const saveRegistrationData = (values: RegistrationFormValues) => {
    try {
        localStorage.setItem('registrationData', JSON.stringify(values));
    } catch (error) {
        console.error('Error saving registration data:', error);
    }
};

  return (
    <div className="font-sans text-[#333] p-6">
      <div className="h-auto flex flex-col items-center justify-center p-6">
        <div className="grid md:grid-cols-2 items-center gap-6 max-w-7xl w-full">
          <Formik
            initialValues={{ name: '', email: '', password: '', acceptTerms: false }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                if (values.name && values.email && values.password && values.acceptTerms) {
                  setSuccessMessage('Registration successful!');
                  setErrorMessage('');
                  saveRegistrationData(values); 
                  navigate('/');
                } else {
                  setErrorMessage('Please fill in all the required fields correctly.');
                  setSuccessMessage('');
                }
                actions.setSubmitting(false);
              }, 3000);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="md:max-w-md w-full">
                <h3 className="text-2xl font-extrabold mb-10">Registration</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm mb-2 block" htmlFor="name">Name</label>
                    <Field name="name" type="text" className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
                    <ErrorMessage name="name" component="div" className="text-red-500 mt-2" />
                  </div>
                  <div>
                    <label className="text-sm mb-2 block" htmlFor="email">Email</label>
                    <Field name="email" type="email" className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
                    <ErrorMessage name="email" component="div" className="text-red-500 mt-2" />
                  </div>
                  <div className="relative">
                    <label className="text-sm mb-2 block" htmlFor="password">Password</label>
                    <Field name="password" type={showPassword ? 'text' : 'password'} className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 top-7 flex items-center px-3 text-gray-500 focus:outline-none"
                    >
                      {showPassword ? <HiEyeOff /> : <HiEye />}
                    </button>
                    <ErrorMessage name="password" component="div" className="text-red-500 mt-2" />
                  </div>
                  <div className="flex items-center">
                    <Field type="checkbox" name="acceptTerms" id="acceptTerms" className="h-4 w-4 border-gray-300 rounded" />
                    <label htmlFor="acceptTerms" className="ml-3 block text-sm">
                      I accept the <Link to="#" className="text-blue-500 font-semibold hover:underline">Terms and Conditions</Link>
                    </label>
                    <ErrorMessage name="acceptTerms" component="div" className="text-red-500 mt-2" />
                  </div>
                </div>
                <div className="mt-10">
                  <button type="submit" disabled={isSubmitting} className="py-4 px-6 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
                    {isSubmitting ? 'Creating Account...' : 'Create an account'}
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
    </div>
  );
}

