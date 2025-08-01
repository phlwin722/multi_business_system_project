import { useNavigate, useLocation, Link } from "react-router-dom";
import "@/css/login.css"; // if "@" is aliased to "src"

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const hiddenPaths = ["/signin", "/signup"];

  const shouldHideNavbar = hiddenPaths.includes(location.pathname);

  const goToSignIn = () => {
    navigate("/signin");
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  const goToIndex = () => {
    navigate("/index");
  }

  return (
    <>
      {shouldHideNavbar ? (
        <nav className="navbar h-[60px]">
          <div className="container">
            <div className="flex">
              <div onClick={goToIndex} className="font-bold px-3 cursor-pointer hover:text-[#252727]">
                MuBui
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar border-bottom">
          <div className="container">
            <div className="flex">
              <div onClick={goToIndex} className="px-3 cursor-pointer hover:text-[#252727] font-bold">
                MuBui
              </div>
            </div>

            <form className="d-flex">
              <button className="btn-login" onClick={goToSignIn}>
                Sign in
              </button>
              <button className="btn-signin" onClick={goToSignUp}>
                Sign up
              </button>
            </form>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
