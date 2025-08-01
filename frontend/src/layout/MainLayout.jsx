import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";
import NavBarMainLayout from "../components/NavBarMainLayout.jsx";
import SideBar from "../components/SideBar.jsx";

export default function MainLayout() {
  const { user, token } = useStateContext();

  if (!token) {
    return <Navigate to="/index" />;
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Header (fixed height) */}
        <header className="bg-white shadow-md">
          <NavBarMainLayout />
        </header>

        {/* Body (fills remaining height) */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="hidden md:block w-65 overflow-y-auto">
            <SideBar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-red-500 overflow-y-auto">
            haha
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
