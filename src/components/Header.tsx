import {
  TextField,
  InputAdornment,
  Popover,
  List,
  ListItemButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HeaderSearchIcon from "../assets/icons/HeaderSearchIcon";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
interface MenuItem {
  id: number;
  path: string;
  name: string;
  icon?: string;
}

interface HeaderProps {
  menuItem: MenuItem[];
  menuItem1: MenuItem[];
}

const Header: React.FC<HeaderProps> = ({ menuItem, menuItem1 }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const open = Boolean(anchorEl);

  const isNavLinkActive = (path: string) => {
    return location.pathname === path;
  };

  const handleProfileMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div className="flex justify-start sm:justify-between items-center mx-4 lg:mx-8 mt-3 lg:mt-6">
        <div className="flex lg:hidden ">
          <IconButton onClick={handleMenuClick}>
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
        </div>

        <div className="hidden md:block">
          <TextField
            placeholder="Search"
            size="small"
            sx={{
              borderRadius: "1rem",
              boxShadow: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
              input: {
                "&::placeholder": {
                  color: "#00BE64",
                  opacity: 1,
                },
              },
              backgroundColor: "white",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                  borderRadius: "1rem",
                },
              },
            }}
            variant="outlined"
            //   onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HeaderSearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="flex gap-6">
          <img
            className="hidden sm:block cursor-pointer"
            src="../../Icons/notificationIcon.svg"
          />

          <div
            className="rounded-full w-28 flex justify-between items-center p-3 bg-white cursor-pointer"
            onClick={handleProfileMenuClick}
          >
            <img className=" rounded-full" src="../../Icons/BlackMen.svg" />

            <KeyboardArrowDownIcon sx={{ color: "#DEDEDE" }} />
          </div>
        </div>
      </div>
      <div className="bg-black lg:hidden">
        {isSidebarOpen &&
          menuItem?.map((item) => (
            <div key={item?.id}>
              <NavLink
                to={item.path}
                onClick={handleMenuItemClick}
                className={`font-[Montserrat] font-medium text-lg text-white ${
                  isNavLinkActive(item.path)
                    ? "flex items-center bg-[#FF8F1F] bg-opacity-50"
                    : ""
                }`}
              >
                <div className="flex gap-4 items-center py-4 pl-8">
                  <div>
                    <img src={item?.icon} alt={item?.icon} />
                  </div>
                  <div className="link_text text-white">{item.name}</div>
                </div>
              </NavLink>
            </div>
          ))}
        {isSidebarOpen &&
          menuItem1?.map((item) => (
            <div key={item?.id}>
              <NavLink
                to={item.path}
                onClick={handleMenuItemClick}
                className="font-[Montserrat] font-medium text-lg text-white"
                // activeclassName="active"
              >
                <div className="flex gap-4 items-center py-4 pl-8">
                  {/* <div className="icon">{item.icon}</div> */}
                  <div>
                    <img src={item?.icon} alt={item?.icon} />
                  </div>
                  <div className="link_text text-white">{item.name}</div>
                </div>
              </NavLink>
            </div>
          ))}
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleProfileMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <List>
          <ListItemButton
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            Logout
          </ListItemButton>
        </List>
      </Popover>
    </>
  );
};

export default Header;
