import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContactForm } from "./constactForm";

function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const getFlagEmoji = (code) => {
  if (!code) return "";
  code = code.toUpperCase();

  return String.fromCodePoint(
    code.charCodeAt(0) + 127397,
    code.charCodeAt(1) + 127397
  );
};

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "*Required first name";
    if (!form.lastName.trim()) errs.lastName = "*Required last name";

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(form.email)) errs.email = "*Invalid email";

    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*()+=';`~":>.<,]).{6,}$/;
    if (!passRegex.test(form.password))
      errs.password = "*Choose a strong password";

    if (form.password !== form.confirmPassword)
      errs.confirmPassword = "*Passwords do not match";

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // TODO: API call
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] via-[#e8f4f8] to-[#e3f6f5] px-4 py-8 md:py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
       
        <div className="bg-gradient-to-r from-[#002c5f] to-[#004080] px-8 py-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Create Account
          </h1>
          <p className="text-[#b3d9ff] text-sm md:text-base">
            Sign up to get started
          </p>
          
        </div>
        

      
        <div className="px-6 md:px-8 py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col w-full">
                <label className="block text-sm font-semibold text-[#002c5f] mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) =>
                    setForm({ ...form, firstName: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a1ab]"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>

              <div className="flex flex-col w-full">
                <label className="block text-sm font-semibold text-[#002c5f] mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) =>
                    setForm({ ...form, lastName: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a1ab]"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label className="block text-sm font-semibold text-[#002c5f] mb-2">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a1ab]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col w-full relative">
                <label className="block text-sm font-semibold text-[#002c5f] mb-2">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a1ab]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-[#00a1ab]"
                >
                  <i
                    className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  ></i>
                </button>
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              <div className="flex flex-col w-full">
                <label className="block text-sm font-semibold text-[#002c5f] mb-2">
                  Confirm Password
                  
                </label>
                <input
                  type="password"
                  value={form.confirmPassword}
                  onChange={(e) =>
                    setForm({ ...form, confirmPassword: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a1ab]"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#00a1ab] to-[#008995] text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#00a1ab] font-semibold hover:text-[#008995]"
            >
              Log in
            </Link>
          </p>
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
}

export default Signup;
