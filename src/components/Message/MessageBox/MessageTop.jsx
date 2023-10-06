import IconButton from "@mui/material/IconButton";
import PendingSharpIcon from "@mui/icons-material/PendingSharp";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";

const MessageTop = ({
  setToggleRightSide,
  toggleRightSide,
  currentFriend,
  activeUsers,
  typingMessage,
}) => {
  return (
    <div className="px-4 flex items-center justify-between border-b-2 border-[var(--border-color)] sticky top-0 bg-[var(--bg-color)] z-[999]">
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
              <div className="w-4 h-4 border-[var(--border-color)] border rounded-full bg-[var(--active-icon-color)] absolute right-0 bottom-0"></div>
            ) : (
              ""
            )}
          </div>
          <div>
            <p className="font-bold text-[var(--text-color)] capitalize">
              {currentFriend.name}
            </p>
            {typingMessage &&
            typingMessage.message !== "" &&
            typingMessage.senderId === currentFriend._id ? (
              <p className="text-[var(--text-color)] text-semibold">
                typing...
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            sx={{
              color: "var(--icon-color)",
              background: "var(--icon-bg-color)",
              "&:hover": {
                background: "var(--icon-bg-color)",
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
              color: "var(--icon-color)",
              background: "var(--icon-bg-color)",
              "&:hover": {
                background: "var(--icon-bg-color)",
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
              color: "var(--icon-color)",
              background: "var(--icon-bg-color)",
              "&:hover": {
                background: "var(--icon-bg-color)",
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
