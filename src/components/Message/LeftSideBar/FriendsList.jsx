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
        currentFriend === friendInfo ? "bg-[#0b0f11]" : ""
      } py-2 px-3 rounded cursor-pointer flex items-center justify-between gap-1 hover:bg-gray-900`}
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
          <p className="font-bold text-white capitalize">{friendInfo.name}</p>
          <div className="flex items-center justify-between gap-2">
            <div className="">
              {messageInfo?.senderId === myInfo.id ? (
                <span className="text-gray-400 flex items-center gap-1">
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
                <div className="text-gray-400 flex items-center justify-between gap-[2px]">
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
              <AiOutlineCheckCircle className="text-white text-lg" />
            ) : messageInfo?.status === "delivered" ? (
              <AiFillCheckCircle className="text-white text-lg" />
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
            <div className="w-[15px] h-[15px] rounded-full bg-cyan-500"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsList;
