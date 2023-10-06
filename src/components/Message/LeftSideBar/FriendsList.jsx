import { useSelector } from "react-redux";
import "./style.css";
import {
  AiFillCamera,
  AiFillCheckCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import moment from "moment";

const FriendsList = ({
  setCurrentFriend,
  currentFriend,
  setResentFriend,
  userInfo,
  activeUsers,
}) => {
  const { data: myInfo } = useSelector((state) => state.auth);
  const { friendInfo, messageInfo } = userInfo;

  return (
    <div
      onClick={() => {
        setCurrentFriend(friendInfo);
        setResentFriend(friendInfo);
      }}
      className={`${
        currentFriend === friendInfo ? "bg-[var(--active-color)]" : ""
      } py-2 px-3 rounded cursor-pointer flex items-center justify-between gap-1 hover:bg-[var(--active-color)] hover_fd`}
    >
      <div className="flex items-center cursor-pointer gap-2">
        <div className="relative">
          <img
            src={`http://localhost:5000/public/images/users/${friendInfo.image}`}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
          {activeUsers &&
          activeUsers.length > 0 &&
          activeUsers.some((u) => u.userId === friendInfo._id) ? (
            <div className="w-4 h-4 rounded-full bg-green-500 absolute right-0 bottom-0 border border-gray-50"></div>
          ) : (
            ""
          )}
        </div>

        <div className="">
          <p className="font-bold text-[var(--text-color)] capitalize fd_name">
            {friendInfo.name}
          </p>
          <div className="flex items-center justify-between gap-2">
            <div className="">
              {messageInfo?.senderId === myInfo.id ? (
                <span className="text-[var(--text-color)] flex items-center gap-1">
                  You{" "}
                  {messageInfo?.message.text ? (
                    <p className="text-[12px]">
                      {messageInfo?.message.text.slice(0, 10) + "...."}
                    </p>
                  ) : (
                    <div className="flex items-center gap-[2px]">
                      <AiFillCamera />
                      <p className="text-[12px]">Photo</p>
                    </div>
                  )}
                </span>
              ) : (
                <div className="text-[var(--text-color)] flex items-center justify-between gap-[2px]">
                  <div className="flex items-center gap-1">
                    <p className="">{friendInfo?.name}</p>
                    {messageInfo?.message.text ? (
                      <p className="text-[12px]">
                        {messageInfo?.message?.text.slice(0, 10) + "...."}
                      </p>
                    ) : messageInfo?.message.image ? (
                      <div className="flex items-center gap-[2px]">
                        <AiFillCamera />
                        <p>Photo</p>
                      </div>
                    ) : (
                      <p className="lowercase text-[12px]">connected you</p>
                    )}
                  </div>
                  <div className="text-[12px]">
                    {messageInfo
                      ? moment(messageInfo.createdAt).startOf("mini").fromNow()
                      : moment(friendInfo.createdAt).startOf("mini").fromNow()}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {myInfo.id === messageInfo?.senderId ? (
          <div className="">
            {messageInfo?.status === "unseen" ? (
              <AiOutlineCheckCircle className="text-[var(--text-color)] text-lg" />
            ) : messageInfo?.status === "delivered" ? (
              <AiFillCheckCircle className="text-[var(--text-color)] text-lg" />
            ) : (
              <img
                src={`http://localhost:5000/public/images/users/${friendInfo.image}`}
                className="w-[15px] h-[15px] rounded-full"
                alt=""
              />
            )}
          </div>
        ) : (
          <div>
            {/* <img
                    src={`http://localhost:5000/public/images/users/${friendInfo.image}`}
                    className="w-[15px] h-[15px] rounded-full"
                    alt=""
                  /> */}
            <div className="w-[15px] h-[15px] rounded-full bg-[var(--message-icon-color)]"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsList;
