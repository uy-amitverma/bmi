import React from "react";
import styles from "./Header.module.css";
import clientLogo from "../../Images/clientLogo.png";

import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import LoginIcon from "@mui/icons-material/Login";
import product from "../../Images/product_1.png";
import logo from "../../Images/logo.png";
import { AccountMenu } from "./AccountMenu";
import { Widgets } from "./Widgets";

const Header = (props) => {
  const schools = ["a div className={style]", "b", "c", "d"];
  const { isLoggedIn } = props;
  return (
    <div className={styles.header}>
      <div className={styles["header-wrapper"]}>
        <div className={styles["logo-wrapper"]}>
          <img
            className={styles.image}
            src={logo}
            alt="UdyogYantra Technologies"
          />
        </div>
        <div className={styles["product-wrapper"]}>
          <div className={styles.heading}>
            <div>Govt. Of Andhra Pradesh</div>
            <div className={styles["sub-heading"]}>NutreGro</div>
          </div>
          <div className={styles["school-option"]}>
            <span>School: </span>
            <FormControl className={styles.formControl}>
              <Select className={styles["school-Selection"]} id="school">
                <MenuItem value="">Select a school</MenuItem>
                {schools.map((school) => {
                  return <MenuItem value={school}>{school}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={styles["client-wrapper"]}>
          {isLoggedIn ? (
            <div className={styles.accountMenu}>
              <AccountMenu
              // handleSignOut={signoutAPI}
              // userDetails={userData.userDetails}
              />
            </div>
          ) : (
            <IconButton
              className={styles["login-btn"]}
              // onClick={openLogin}
            >
              <LoginIcon className={styles["login-icon"]} />
            </IconButton>
          )}

          <Widgets />
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  isLoggedIn: true,
  visibleQC: true,
  visibleDataEntry: true,
  visibleBMI: true,
};

export default Header;
