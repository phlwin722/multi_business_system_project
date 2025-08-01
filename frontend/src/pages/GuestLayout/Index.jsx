import businessman from "../../assets/businessman.jpg";
import analysis from "../../assets/analysis.jpg";
import paperless from "../../assets/paperless.jpg";
import { Navigate, useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const Index = () => {

  const navigate = useNavigate();
  // Redirect to login if user is authenticated
  const { token } = useStateContext();

  if (token) {
    return <Navigate to='/dashboard' />; 
  }

  const handleGetStarted = () => {
    navigate('/signin');
  }

  return (
    <div className="p-4 grid gap-6 sm:grid-cols-2 bg-gray-50">
      
      {/* Section 1: Businessman + Text */}
      <div className="flex items-center justify-center h-[60vh] md:h-[80vh]">
        <img
          src={businessman}
          alt="Business Strategy"
          className="h-full max-h-[400px] w-auto object-contain"
        />
      </div>
      <div className="flex flex-col justify-center p-4 text-center sm:text-left sm:row-start-1 sm:col-start-1 h-[60vh] md:h-[80vh]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-blue-800">
          Track Your Sales Today
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          Start your journey toward a paperless, real-time business environment.
          Monitor daily sales, inventory, and employee performance across
          multiple business units — all in one dashboard.
        </p>
        <button onClick={handleGetStarted} className="mt-6 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Section 2: Analysis + Text */}
      <div className="flex items-center justify-center h-[60vh] md:h-[80vh]">
        <img
          src={analysis}
          alt="Data Analysis"
          className="h-full max-h-[400px] w-auto object-contain"
        />
      </div>
      <div className="flex items-center justify-center text-center h-[60vh] md:h-[80vh] px-4">
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          📊 Gain real-time insights into your performance. Our dashboard gives
          you actionable data on what’s working — and what’s not.
        </p>
      </div>

      {/* Section 3: Paperless + Text */}
      <div className="flex items-center justify-center h-[60vh] md:h-[80vh]">
        <img
          src={paperless}
          alt="Paperless Workflow"
          className="h-full max-h-[400px] w-auto object-contain"
        />
      </div>
      <div className="flex items-center justify-center text-center h-[60vh] md:h-[80vh] px-4 sm:row-start-3">
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          🧾 Go 100% paperless with auto-generated invoices, real-time stock
          logs, and digital customer records — accessible anywhere, anytime.
        </p>
      </div>
    </div>
  );
};

export default Index;
