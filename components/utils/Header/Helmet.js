import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../Images/Logo";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { signout } from "../../../redux/actions/signout.action";
import { useRouter } from "next/router";

const settings = ["Profile", "Main", "Logout"];

const Helmet = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  const email = useSelector((state) => state.login.user?.email);
  const token = useSelector((state) => state.login?.token);
  const success = useSelector((state) => state.login?.success);
  const docPfp = useSelector((state) => state.login.user?.pfp);
  const router = useRouter();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    const data = {
      email,
      token,
    };
    if (setting === "Logout") {
      dispatch(signout(data));
      if (success) router.push("/Login");
    }
    if (setting === "Profile") {
      router.push("/profile");
    }
    if (setting === "Main") {
      router.push("/");
    }
  };

  return (
    <AppBar
      position="static"
      style={{
        boxShadow: "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link href={"/"}>
            <a>
              <Logo />
            </a>
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              width: "95%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={docPfp} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleCloseUserMenu(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Helmet;
