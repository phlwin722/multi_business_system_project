import "@/css/login.css"; // if "@" is aliased to "src"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../../axiosClient";
import { useStateContext } from "../../contexts/ContextProvider";

const Login = () => {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const { setToken, setUser} = useStateContext();

  const [errors, setErrors] = useState(null);
  const [validation, setValidation] = useState(null);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const closeValidation = () => {
    setValidation(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrors({});
      setValidation();

      const response = await axios.post("/signin", formData);

      if (response.data.message && response.status === 200) {
        setToken(response.data.token)
        setUser(response.data.user)
        navigate('/dashboard')
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else if (error.response && error.response.status === 423) {
        {
          setValidation(error.response.data.errors);
        }
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="">
        <div className="p-4 grid gap-4 sm:grid-cols-2">
          <div className="self-center h-[85vh] flex items-center justify-center">
            <div className="bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] w-full max-w-[28rem]">
              <form className="form" onSubmit={handleSubmit}>
                <p className="h3 text-center">Login</p>

                {validation && (
                  <div className="text-sm bg-red-500 py-2 px-2 rounded-lg text-white">
                    <div className="flex items-center justify-between">
                      <div>{validation}</div>
                      <div className="cursor-pointer">
                        <svg
                          onClick={closeValidation}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          height="1em"
                          fill="currentColor"
                          className="cursor-pointer"
                        >
                          <path d="M231 256l107-107c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L186 210.7 79 103.7C66.5 91.2 46.2 91.2 33.7 103.7s-12.5 32.8 0 45.3L140.7 256 33.7 363c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L186 301.3l107 107c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L231.3 256z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex-column">
                  <label>Email </label>
                </div>
                <div className="inputForm">
                  <svg
                    height="20"
                    viewBox="0 0 32 32"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Layer_3" data-name="Layer 3">
                      <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                    </g>
                  </svg>
                  <input
                    name="email"
                    type="text"
                    className="input w-full"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {errors?.email && (
                  <p className="text-sm text-red-600">{errors.email[0]}</p>
                )}
                <div className="flex-column">
                  <label>Password </label>
                </div>
                <div className="inputForm">
                  <svg
                    height="20"
                    viewBox="-64 0 512 512"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                    <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
                  </svg>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    className="input w-full"
                    placeholder="Enter your Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {!passwordVisible ? (
                    <svg
                      className="cursor-pointer"
                      onClick={togglePasswordVisibility}
                      viewBox="0 0 576 512"
                      height="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
                    </svg>
                  ) : (
                    <svg
                      className="cursor-pointer"
                      onClick={togglePasswordVisibility}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      height="1em"
                      fill="currentColor"
                    >
                      <path d="M633.8 458.1L34.9 6.2C27.3 0.7 16.7 2.4 11.2 10S2.4 27.3 10 32.8l86.6 62.6C38.3 139.4 6.5 192.5.5 208c-3.3 7.9-3.3 16.7 0 24.6 17.8 42.7 63.3 106.4 132.1 145.5 33.9 19.1 72.6 33.2 113.3 36.7l52.6 38c-10.2 1.3-20.6 2-31.5 2-80.8 0-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1C142.5 68.8 207.2 32 288 32c34.2 0 66.6 6.9 96.4 19.2l91.6 66.3c34.4 24.9 65.2 56.7 88.2 92.5 3.3 7.9 3.3 16.7 0 24.6-7.8 18.8-21.2 40.8-38.6 63.2l81.5 59c7.6 5.5 18.2 3.8 23.7-3.7s3.9-18.3-3.6-23.8zM320 144a111.9 111.9 0 0 0-43.7 8.8l152.7 110.5c.7-3.8 1-7.8 1-11.8 0-61.9-50.1-112-112-112zm0 224c61.9 0 112-50.1 112-112 0-4-.3-8-.9-11.8L278.4 150.3C278.6 150.1 278.8 150 279 150c13.6-5.1 28.2-8 43-8 61.9 0 112 50.1 112 112s-50.1 112-112 112c-15.1 0-29.5-2.9-42.8-8.2l-46.3-33.5c2.3.5 4.6.8 7 .8z" />
                    </svg>
                  )}
                </div>
                {errors?.password && (
                  <p className="text-sm text-red-600">{errors.password[0]}</p>
                )}

                <div className="flex-row">
                  <div></div>
                  <span className="span">Forgot password?</span>
                </div>
                <button className="button-submit" type="submit">
                  Sign In
                </button>
                <p className="" onClick={handleSignUp}>
                  Don't have an account?{" "}
                  <span className="span hover:underline">Sign Up</span>
                </p>
              </form>
            </div>
          </div>
          <div className="h-auto sm:row-start-1 sm:col-start-1 hidden sm:block">
            2
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
