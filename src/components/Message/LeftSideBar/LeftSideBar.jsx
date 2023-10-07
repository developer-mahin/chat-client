import { useCallback, useEffect, useReducer, useState } from "react";
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
import { BiLogOut } from "react-icons/bi";

const LeftSideBar = ({
  setCurrentFriend,
  currentFriend,
  activeUsers,
  setResentFriend,
  handleLogout,
  users,
  handleCheckboxChange,
  search,
  setIsChecked,
  isChecked,
}) => {
  const { data } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElCreate, setAnchorElCreate] = useState(null);
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

  const checkItem = JSON.parse(localStorage.getItem("check"));

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
                  width: "25ch",
                },
              }}
            >
              <MenuItem>
                <p className="font-extrabold ">Light</p>

                <div className="mx-4">
                  <label className="flex cursor-pointer select-none items-center">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={checkItem}
                        onChange={() => {
                          setIsChecked(!isChecked);
                          handleCheckboxChange();
                        }}
                        className="sr-only"
                      />
                      <div
                        className={`box block h-8 w-14 rounded-full ${
                          checkItem ? "bg-black" : "bg-gray-500"
                        }`}
                      ></div>
                      <div
                        className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                          checkItem ? "translate-x-full" : ""
                        }`}
                      ></div>
                    </div>
                  </label>
                </div>

                <p className="font-extrabold">Dark</p>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleLogout();
                }}
                sx={{
                  mt: "20px",
                }}
              >
                <BiLogOut className="text-2xl mr-1" />
                <h2 className="text-lg  font-bold">Logout</h2>
              </MenuItem>
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
