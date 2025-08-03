import * as React from "react";
import PropTypes from "prop-types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import BusinessIcon from '@mui/icons-material/Business';
import FormatListBulletedAddIcon from "@mui/icons-material/FormatListBulletedAdd";
import NavbarMain from "../components/NavbarMain";
import PersonIcon from '@mui/icons-material/Person';
import ArchiveIcon from '@mui/icons-material/Archive';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard", // ← add this
    title: "Dashboard",
    icon: <DashboardIcon />,
    to: "/dashboard",
  },
  {
    segment: "businesses", // ← add this
    title: "Business Management",
    icon: <BusinessIcon />,
    children: [
      {
        segment: "list",
        title: "List Businesses",
        icon: <FormatListBulletedAddIcon />,
        to: "/list",
      },
      {
        segment: "archive",
        title: "Archive Businesses",
        icon: <ArchiveIcon />,
        to: "/archive",
      },
    ],
  },
  {
    segment: 'employee',
    title: "Persons",
    icon: <PersonIcon />,
    children: [
      {
        segment: "list",
        title: "List Employee",
        icon: <GroupsIcon />,
        to: "/list"
      },
      {
        segment: "archive",
        title: "Archive Employee",
        icon: <ArchiveIcon />,
        to: "/archive"
      }
    ]
  },
  {
    segment: "product",
    title: "Product",
    icon: <LocalMallIcon />,
    to: "/product"
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports", // ← add this
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales", // ← add this
        title: "Sales",
        icon: <DescriptionIcon />,
        to: "/reports/sales",
      },
    ],
  },
];

function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [session, setSession] = React.useState({
    user: {
      name: "Bharat Kashyap",
      email: "bharatkashyap@outlook.com",
      image: "https://avatars.githubusercontent.com/u/19550456",
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "Bharat Kashyap",
            email: "bharatkashyap@outlook.com",
            image: "https://avatars.githubusercontent.com/u/19550456",
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  return (
    <AppProvider
      navigation={NAVIGATION}
      session={session}
      authentication={authentication}
      router={{
        navigate: (url) => navigate(url), // ✅ not 'push'
        pathname: location.pathname,
      }}
    >
      <DashboardLayout
        slots={{
          appTitle: NavbarMain,
        }}
      >
        <div className="p-3">
          <Outlet />
        </div>
      </DashboardLayout>
    </AppProvider>
  );
}

MainLayout.propTypes = {
  window: PropTypes.func,
};

export default MainLayout;
