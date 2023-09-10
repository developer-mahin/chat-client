import {  useState } from "react";
import {  useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ActiveFriend from "./ActiveFriend";
import FriendsList from "./FriendsList";
import "./style.css";

const options = ["None", "Atria", "Callisto", "Dione"];

const ITEM_HEIGHT = 48;

const LeftSideBar = () => {
  const { data } = useSelector((state) => state.auth);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div className="left-sidebar">
      <div className="flex items-center justify-between sticky top-0 z-[999] bg-[#1F2C32] ">
        <div className="py-5 flex items-center gap-1">
          <div className="">
            <img
              src={`http://localhost:5000/public/images/users/${data.image}`}
              alt=""
              className="w-[70px] h-[70px] rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-bold text-white capitalize">
              {data.name}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              sx={{
                color: "#fff",
                background: "#00000085",
                "&:hover": {
                  background: "#00000040",
                },
              }}
            >
              <MoreHorizIcon style={{ fontSize: "16px" }} />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              sx={{
                color: "#fff",
                background: "#00000085",
                "&:hover": {
                  background: "#00000040",
                },
              }}
            >
              <BorderColorOutlinedIcon style={{ fontSize: "16px" }} />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div className="relative">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="w-full py-3 pl-12 pr-5 rounded-full bg-[#192132] text-white focus:outline-none"
          />
          <SearchIcon className="absolute left-4 text-white top-[14px]" />
        </div>
      </div>
      <div className="mt-5">
        <ActiveFriend />
      </div>
      <div className="mt-5">
        <FriendsList />
      </div>
    </div>
  );
};

export default LeftSideBar;
