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
      <div>
        <header>
          <NavBarMainLayout />
        </header>
        <aside>
          <SideBar />
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
