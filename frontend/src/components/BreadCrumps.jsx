import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedAddIcon from "@mui/icons-material/FormatListBulletedAdd";
import ArchiveIcon from "@mui/icons-material/Archive";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const handleClick = (event) => {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
};

const BreadCrumps = ({ breadNumber }) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/dashboard"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          MuBui
        </Link>
        {breadNumber === 1 && (
          <Typography
            sx={{
              color: "text.primary",
              display: "flex",
              alignItems: "center",
            }}
          >
            <DashboardIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Dashboard
          </Typography>
        )}
        {breadNumber === 2 && (
          <Typography
            sx={{
              color: "text.primary",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FormatListBulletedAddIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            List Businesses
          </Typography>
        )}
        {breadNumber === 3 && (
          <Typography
            sx={{
              color: "text.primary",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FormatListBulletedAddIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Archive Businesses
          </Typography>
        )}
        {breadNumber === 4 && (
          <Typography
            sx={{
              color: "text.primary",
              display: "flex",
              alignItems: "center",
            }}
          >
            <GroupsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            List Employee
          </Typography>
        )}
        {breadNumber === 5 && (
          <Typography
            sx={{
              color: "text.primary",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArchiveIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Archive Employee
          </Typography>
        )}
        {breadNumber === 6 && (
          <Typography
            sx={{
              color: "text.primary",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LocalMallIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Product
          </Typography>
        )}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumps;
