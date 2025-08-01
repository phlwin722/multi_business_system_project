import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosClient";

const Signup = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState(null);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    position: "admin",
    terms_accepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setErrors({});

      const response = await axios.post("/signup", formData);

      if (response.data.message && response.status === 200) {
        alert("Registration successful! Please sign in.");
        navigate("/signin");
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <>
      <div className="grid gap-4 p-4 sm:grid-cols-2">
        <div className="px-5 h-85vh flex items-center justify-center">
          <div className="bg-white shadow-md rounded-[10px] w-full p-6">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold mb-6">Sign up</h2>

              <div className="mb-4">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors?.first_name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.first_name[0]}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors?.last_name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.last_name[0]}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors?.email && (
                  <p className="text-red-600 mt-1 text-sm">{errors.email[0]}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors?.password && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.password[0]}
                  </p>
                )}
              </div>

              <div>
                <div className="mb-2 flex items-center">
                  <input
                    type="checkbox"
                    id="terms_accepted"
                    name="terms_accepted"
                    checked={formData.terms_accepted}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="terms_accepted" className="text-sm ml-1">
                    I agree to the Terms and Conditions
                  </label>
                </div>
                {errors?.terms_accepted && (
                  <p className="text-red-600 text-sm mt-[-20px]">
                    {errors.terms_accepted[0]}
                  </p>
                )}
              </div>

              <div className="mb-3 mt-4 text-sm">
                Already have an account?{" "}
                <span
                  className="text-blue-600 font-medium cursor-pointer hover:underline"
                  onClick={handleSignIn}
                >
                  Sign in
                </span>
              </div>

              <button type="submit" className="button-submit">
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div className="h-85vh sm:row-start-1 sm:col-start-1 hidden sm:block">
          2
        </div>
      </div>
    </>
  );
};

export default Signup;
