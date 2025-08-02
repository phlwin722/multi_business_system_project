import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const NavbarMain = () => {
  return (
    <div>
      <Stack direction="row" alignItems="center" spacing={2}>
        <CloudCircleIcon fontSize="large" color="primary" />
        <Typography variant="h6">MuBui</Typography>
      </Stack>
    </div>
  );
};

export default NavbarMain;
