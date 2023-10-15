import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useSelector } from "react-redux";
import "./style.css";
import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const RightSideBar = ({
  toggleRightSide,
  currentFriend,
  activeUsers,
  messageData,
}) => {
  const { data } = useSelector((state) => state.auth);
  const [showSharedMedia, setShowSharedMedia] = useState(false);
  return (
    <>
      {toggleRightSide && (
        <div className="mt-10 right__side__bar">
          <div className="flex items-center justify-center">
            <div className=" relative w-[80px] h-[80px]">
              <img
                src={`http://localhost:5000/public/images/users/${currentFriend.image}`}
                className="w-[80px] h-[80px] rounded-full object-cover"
                alt=""
              />
              {activeUsers &&
              activeUsers.length > 0 &&
              activeUsers.some((u) => u.userId === currentFriend._id) ? (
                <div className="w-4 h-4 rounded-full bg-[var(--active-icon-color)] absolute right-2 bottom-1 border border-[var(--border-color)]"></div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            {activeUsers &&
            activeUsers.length > 0 &&
            activeUsers.some((u) => u.userId === currentFriend._id) ? (
              <p className="text-xl font-semibold text-center text-[var(--active-icon-color)] mt-2">
                Active
              </p>
            ) : (
              ""
            )}
            <p className="text-xl font-semibold text-center text-[var(--text-color)]">
              {currentFriend.name}
            </p>
          </div>

          {/**
           *
           * */}
          <div className="pl-6 mt-10">
            <div>
              <div className="flex items-center justify-between cursor-pointer py-2">
                <h1 className="text-xl text-[var(--text-color)] font-semibold">
                  Customize Chat
                </h1>
                <BsChevronDown className="text-2xl text-[var(--text-color)]" />
              </div>
              {/*  */}
              <div className="flex items-center justify-between cursor-pointer  py-2">
                <h1 className="text-xl text-[var(--text-color)] font-semibold">
                  Privacy and Support
                </h1>
                <BsChevronDown className="text-2xl text-[var(--text-color)]" />
              </div>
              {/*  */}
              <div>
                <div
                  onClick={() => setShowSharedMedia(!showSharedMedia)}
                  className="flex items-center justify-between cursor-pointer  py-2"
                >
                  <h1 className="text-xl text-[var(--text-color)] font-semibold">
                    Shared Media
                  </h1>
                  {showSharedMedia ? (
                    <BsChevronUp className="text-2xl text-[var(--text-color)]" />
                  ) : (
                    <BsChevronDown className="text-2xl text-[var(--text-color)]" />
                  )}
                </div>
                {showSharedMedia && (
                  <div className="mt-6">
                    <div className="grid grid-cols-2 gap-3">
                      {messageData && messageData.length > 0 ? (
                        messageData.map((message, i) => (
                          <PhotoProvider key={i}>
                            <PhotoView src={message.message.image}>
                              <img
                                src={message.message.image}
                                className="object-cover cursor-pointer"
                                alt=""
                              />
                            </PhotoView>
                          </PhotoProvider>
                        ))
                      ) : (
                        <p className="text-[var(--text-color)] font-bold text-center">
                          No media available
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/**
           *
           * */}
        </div>
      )}
    </>
  );
};

export default RightSideBar;
