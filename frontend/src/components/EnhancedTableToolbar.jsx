import React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import { Toolbar, Typography, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function EnhancedTableToolbar({ numSelected }) {
  return (
    <>
      {numSelected > 0 && (
        <Toolbar
          sx={[
            { pl: { sm: 2 }, pr: { xs: 1, sm: 1 } },
            numSelected > 0 && {
              bgcolor: (theme) =>
                alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
            },
          ]}
        >
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>

          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      )}
    </>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
