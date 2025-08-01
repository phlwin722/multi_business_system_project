import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GuestLayout() {

  const { token } = useStateContext();
  const location = useLocation();
  const hiddenPaths = ['/signin', '/signup'];

  const shouldHideNavbar = hiddenPaths.includes(location.pathname);

  if (token) {
    return <Navigate to="/dashboard" />
  }
  return (
    <div>
      <Navbar />
      <Outlet />
      {!shouldHideNavbar && <Footer />}
    </div>
  )
}
