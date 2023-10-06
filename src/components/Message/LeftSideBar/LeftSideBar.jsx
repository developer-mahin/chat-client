import { useState } from "react";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ActiveFriend from "./ActiveFriend";
import FriendsList from "./FriendsList";
import "./style.css";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const LeftSideBar = ({
  setCurrentFriend,
  currentFriend,
  activeUsers,
  setResentFriend,
  handleLogout,
  users,
  search,
}) => {
  const { data } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElCreate, setAnchorElCreate] = useState(null);
  const [changeMood, setChangeMood] = useState(false);
  const open = Boolean(anchorEl);
  const create = Boolean(anchorElCreate);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickCreate = (event) => {
    setAnchorElCreate(event.currentTarget);
  };

  const handleCloseCreate = () => {
    setAnchorElCreate(null);
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <div className="left-sidebar ">
      <div className="flex items-center justify-between sticky top-0 z-[999] bg-[var(--bg-color)]">
        <div className="py-5 flex items-center gap-1">
          <div className="">
            <img
              src={`http://localhost:5000/public/images/users/${data?.image}`}
              alt=""
              className="w-[70px] h-[70px] rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg font-bold text-[var(--text-color)] capitalize">
              {data?.name}
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
                color: "var(--icon-color)",
                background: "var(--icon-bg-color)",
                "&:hover": {
                  background: "var(--icon-bg-color)",
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
                  width: "20ch",
                },
              }}
            >
              <MenuItem>
                <FormGroup>
                  <FormControlLabel
                    control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
                  />
                </FormGroup>
              </MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>

          <div>
            <IconButton
              id="demo-positioned-button"
              aria-controls={create ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={create ? "true" : undefined}
              onClick={handleClickCreate}
              sx={{
                color: "var(--icon-color)",
                background: "var(--icon-bg-color)",
                "&:hover": {
                  background: "var(--icon-bg-color)",
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
              anchorEl={anchorElCreate}
              open={create}
              onClose={handleClose}
              PaperProps={{
                style: {
                  width: "20ch",
                },
              }}
            >
              <MenuItem onClick={handleCloseCreate}>Profile</MenuItem>
              <MenuItem onClick={handleCloseCreate}>My account</MenuItem>
              <MenuItem
                onClick={() => {
                  handleLogout();
                  handleCloseCreate();
                }}
              >
                Logout
              </MenuItem>
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
            onChange={search}
            placeholder="Search"
            className="w-full py-3 pl-12 pr-5 rounded-full bg-[var(--bg-color)] border border-[var(--border-color)] text-[var(--text-color)] focus:outline-none"
          />
          <SearchIcon className="absolute left-4 text-[var(--text-color)] top-[14px]" />
        </div>
      </div>
      <div className="mt-5 pr-3">
        {activeUsers && activeUsers.length > 0
          ? activeUsers.map((user, i) => (
              <ActiveFriend
                key={i}
                user={user}
                setResentFriend={setResentFriend}
                setCurrentFriend={setCurrentFriend}
              />
            ))
          : ""}
      </div>
      <div className="mt-5">
        {users.users && users.users.length > 0
          ? users.users.map((userInfo, i) => (
              <FriendsList
                key={i}
                userInfo={userInfo}
                setResentFriend={setResentFriend}
                setCurrentFriend={setCurrentFriend}
                currentFriend={currentFriend}
                activeUsers={activeUsers}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default LeftSideBar;
