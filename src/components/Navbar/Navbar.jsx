import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import useStyle from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyle();
  const currentLocation = useLocation();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src="https://fabskill.com/assets/img/bus_cover/cropped/63_1565191317.webp"
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
            Commerce
          </Typography>
          <div className={classes.grow}></div>
          <div className={classes.button}></div>
          {currentLocation.pathname === "/" && (
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
