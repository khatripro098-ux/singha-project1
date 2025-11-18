import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  

  
  
  const validator = () => {
    const error = {};
    if (!form.email.trim()) error.email = "Email is required";
    const emailRegEx = /^\S+@\S+\.\S+$/;
    if (!emailRegEx.test(form.email))
      error.email = "Invalid Email";

    if (!form.password.trim()) error.password = "Password is required";

    return error;
  };

  const handleClick = (e) => {
    e.preventDefault();
    const valid = validator();
    setErrors(valid);

    if (Object.keys(valid).length === 0) {
      alert("Form is valid!"); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] via-[#e8f4f8] to-[#e3f6f5] px-4 py-8 md:py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
      
        <div className="bg-gradient-to-r from-[#002c5f] to-[#004080] px-8 py-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome Back
          </h1>
          <p className="text-[#b3d9ff] text-sm md:text-base">
            Sign in to your account
          </p>
        </div>

       
        <div className="px-6 md:px-8 py-8">
          <form className="space-y-6" onSubmit={handleClick}>
          
            <div>
              <label className="block text-sm font-semibold text-[#002c5f] mb-2">
                Email
              </label>

              
              
              <div className="relative">
                <i className="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-[#00a1ab]"></i>
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a1ab] transition-all"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            
            <div>
              <label className="block text-sm font-semibold text-[#002c5f] mb-2">
                Password
              </label>
              <div className="relative">
                <i className="fas fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-[#00a1ab]"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a1ab] transition-all"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#00a1ab]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={`fas ${
                      showPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#00a1ab] border-gray-300 rounded focus:ring-[#00a1ab]"
                />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-[#00a1ab] hover:text-[#008995] font-medium transition-colors"
              >
                Forgot password?
              </Link>
            </div>

          
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00a1ab] to-[#008995] text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#00a1ab] hover:text-[#008995] font-semibold transition-colors"
            >
              Sign up now
            </Link>
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
