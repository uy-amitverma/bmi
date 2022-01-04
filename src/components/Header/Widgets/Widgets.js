import * as React from "react";
import Menu from "@mui/material/Menu";
import logo from "../../../Images/logo.png";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { IconButton, Tooltip } from "@material-ui/core";
import styles from './Widgets.module.css'

export default function Widgets(props) {
  const { handleSignOut, userDetails, showDataEntry, showBMI, showQC } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          sx={{
            padding: "8px",
            width: "2.5rem",
            height: "2.5rem",
            fontSize: "1.5rem",
          }}
        >
          <WidgetsIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            px: 1.5,
            "& .MuiAvatar-root": {
              width: "2rem",
              height: "2rem",
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className={styles['icon-container']}>
          {showDataEntry && <img src={logo} />}
          {showBMI && <img src={logo} />}
          {showQC && <img src={logo} />}
        </div>
      </Menu>
    </>
  );
}

Widgets.defaultProps = {
  showDataEntry: true,
  showBMI: true,
  //   showQC: true,
};
