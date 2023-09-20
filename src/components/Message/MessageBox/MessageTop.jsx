import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import PendingSharpIcon from "@mui/icons-material/PendingSharp";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";

const MessageTop = ({
  setToggleRightSide,
  toggleRightSide,
  currentFriend,
  activeUsers,
}) => {
  const { data } = useSelector((state) => state.auth);

  return (
    <div className="px-4 flex items-center justify-between border-b-2 border-gray-700 sticky top-0 bg-[#1f2c32] z-[999]">
      <div>
        <div className="py-5 flex items-center gap-1">
          <div className="relative">
            <img
              src={`http://localhost:5000/public/images/users/${currentFriend.image}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            {activeUsers &&
            activeUsers.length > 0 &&
            activeUsers.some((u) => u.userId === currentFriend._id) ? (
              <div className="w-3 h-3 rounded-full bg-green-500 absolute right-0 bottom-0"></div>
            ) : (
              ""
            )}
          </div>
          <div>
            <p className="font-bold text-white capitalize">
              {currentFriend.name}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            sx={{
              color: "#fff",
              background: "#00000085",
              "&:hover": {
                background: "#00000040",
              },
            }}
          >
            <CallIcon style={{ fontSize: "20px" }} />
          </IconButton>
        </div>
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            sx={{
              color: "#fff",
              background: "#00000085",
              "&:hover": {
                background: "#00000040",
              },
            }}
          >
            <VideocamIcon style={{ fontSize: "20px" }} />
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => setToggleRightSide(!toggleRightSide)}
            aria-label="more"
            id="long-button"
            sx={{
              color: "#fff",
              background: "#00000085",
              "&:hover": {
                background: "#00000040",
              },
            }}
          >
            <PendingSharpIcon style={{ fontSize: "20px" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default MessageTop;
