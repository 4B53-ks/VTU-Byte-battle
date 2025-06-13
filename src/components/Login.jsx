// Login.jsx
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Essential for Toastify styles
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react'; // Importing icons from lucide-react

const Login = () => {
  // State to manage whether the Login form is active (true) or Signup form (false)
  const [isLogin, setIsLogin] = useState(true);
  // States to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // State to handle the Forgot Password flow
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  // React Router hook for navigation
  const navigate = useNavigate();

  // State to hold form data for all inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Effect hook to update the document title based on the current form state
  useEffect(() => {
    document.title = isForgotPassword ? "Forgot Password" : (isLogin ? "Login" : "Sign Up");
  }, [isLogin, isForgotPassword]); // Rerun when isLogin or isForgotPassword changes

  // Function to switch between Login and Sign Up forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false); // Reset forgot password state when toggling forms
    setFormData({ name: "", email: "", password: "", confirmPassword: "" }); // Clear form data
    toast.dismiss(); // Dismiss any active toasts
  };

  // Function to handle input changes and update formData state
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Common Tailwind CSS classes for input fields for consistency
  const inputStyle =
    "w-full px-4 py-3 bg-gray-900 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-lg placeholder-gray-500";

  // Handles the mock submission for both Login and Sign Up forms
  const handleMockSubmit = (e) => {
    e.preventDefault(); // Prevent default browser form submission

    // Basic validation for password confirmation in Signup mode
    if (!isLogin && formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Simulate an asynchronous operation (e.g., API call)
    toast.info(`Attempting to ${isLogin ? "log in" : "sign up"}...`, { autoClose: false });

    setTimeout(() => {
      toast.dismiss(); // Dismiss the info toast
      toast.success(`${isLogin ? "Logged in" : "Signed up"} successfully!`);
      console.log("User data:", formData);

      // Navigate to dashboard after a short delay to allow toast to be seen
      setTimeout(() => {
        navigate("/dashboard"); // Navigate to your target route after successful auth
      }, 1000); // 1-second delay
    }, 1500); // Simulate 1.5 seconds API call
  };

  // Handles the mock submission for Forgot Password
  const handleMockForgot = (e) => {
    e.preventDefault(); // Prevent default browser form submission

    if (!formData.email) {
      toast.error("Please enter your email address.");
      return;
    }

    toast.info("Sending reset link...", { autoClose: false });

    setTimeout(() => {
      toast.dismiss(); // Dismiss the info toast
      toast.success("Reset link sent to your email!");
      setFormData({ ...formData, email: "" }); // Clear email field
      // Optionally, switch back to login after sending reset link
      setTimeout(() => setIsForgotPassword(false), 1500);
    }, 1500);
  };

  // Conditional rendering for the Forgot Password form
  if (isForgotPassword) {
    return (
      <>
        <ToastContainer position="top-center" autoClose={3000} newestOnTop />
        <div className="flex items-center justify-center h-full w-full px-4"> {/* Adjusted from min-h-screen w-full */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm border border-gray-700">
            <h2 className="text-3xl font-bold text-white text-center mb-6">
              Forgot Password
            </h2>
            <p className="text-center text-gray-400 mb-8 text-sm">
              Enter your email to receive a password reset link.
            </p>
            <form onSubmit={handleMockForgot} className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className={`${inputStyle} pl-10`}
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 text-white text-lg font-semibold shadow-md transition-all duration-300 ease-in-out hover:from-green-600 hover:to-teal-700 transform hover:-translate-y-0.5"
              >
                Send Reset Link
              </button>
            </form>
            <p className="text-center mt-6 text-sm text-gray-400">
              <span
                onClick={() => setIsForgotPassword(false)}
                className="text-green-400 cursor-pointer hover:underline transition-colors duration-200"
              >
                Back to Login
              </span>
            </p>
          </div>
        </div>
      </>
    );
  }

  // Main Login/Signup form rendering
  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} newestOnTop />
      <div className="flex items-center justify-center h-screen w-screen p-4"> {/* Adjusted from min-h-screen w-full */}
        <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md border border-gray-700">
          {/* Form Toggle Buttons */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-6 py-2 rounded-l-lg text-lg font-semibold transition-colors duration-300 shadow-md
                ${isLogin ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}
              `}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-6 py-2 rounded-r-lg text-lg font-semibold transition-colors duration-300 shadow-md
                ${!isLogin ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}
              `}
            >
              Sign Up
            </button>
          </div>

          <h2 className="text-3xl font-bold text-white text-center mb-6">
            {isLogin ? "Welcome Back!" : "Join Us Today!"}
          </h2>
          <p className="text-center text-gray-400 mb-8 text-sm">
            {isLogin ? "Sign in to access your account." : "Create your account to get started."}
          </p>

          <form onSubmit={handleMockSubmit} className="space-y-6">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className={`${inputStyle} pl-10`}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={`${inputStyle} pl-10`}
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={`${inputStyle} pr-10 pl-10`}
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-green-400 transition-colors duration-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
            {!isLogin && (
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className={`${inputStyle} pr-10 pl-10`}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
                <div
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-green-400 transition-colors duration-200"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </div>
              </div>
            )}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 text-white text-lg font-semibold shadow-md transition-all duration-300 ease-in-out hover:from-green-600 hover:to-teal-700 transform hover:-translate-y-0.5"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {isLogin && (
            <p className="text-center mt-4 text-sm">
              <span
                onClick={() => setIsForgotPassword(true)}
                className="text-green-400 cursor-pointer hover:underline transition-colors duration-200"
              >
                Forgot Password?
              </span>
            </p>
          )}

          <p className="text-center mt-6 text-gray-400 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={toggleForm}
              className="text-green-400 cursor-pointer hover:underline ml-1 transition-colors duration-200"
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
