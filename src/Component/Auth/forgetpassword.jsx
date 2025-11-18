import { useState } from "react";
import { Link } from "react-router-dom";
import { ContactForm } from "./constactForm";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] via-[#e8f4f8] to-[#e3f6f5] px-4 py-8 md:py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        
        <div className="bg-gradient-to-r from-[#002c5f] to-[#004080] px-8 py-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Forgot Password
          </h1>
          <p className="text-[#b3d9ff] text-sm md:text-base">
            Enter your email to reset your password
          </p>
        </div>

        <div className="px-6 md:px-8 py-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#002c5f] mb-2">
                Email
              </label>
              <div className="relative">
                <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-[#00a1ab]"></i>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00a1ab] transition-all"
                />
              </div>

              
              
            </div>

            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00a1ab] to-[#008995] text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Send Reset Link
            </button>
          </form>

     
          <p className="mt-6 text-center text-sm text-gray-600">
            Remembered your password?{" "}
            <Link
              to="/login"
              className="text-[#00a1ab] hover:text-[#008995] font-semibold transition-colors"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
