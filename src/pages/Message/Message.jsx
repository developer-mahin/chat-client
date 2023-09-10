import { useState } from "react";
import LeftSideBar from "../../components/Message/LeftSideBar/LeftSideBar";
import MessageBottom from "../../components/Message/MessageBox/MessageBottom";
import MessageBox from "../../components/Message/MessageBox/MessageBox";
import RightSideBar from "../../components/Message/RightSideBar/RightSideBar";

const Message = () => {
  const [toggleRightSide, setToggleRightSide] = useState(false);

  return (
    <div className="grid grid-cols-12 px-5">
      <div className="col-span-3 border-r-2 border-[#1f2f36] shadow-xl pr-3">
        <LeftSideBar />
      </div>
      <div className="col-span-9">
        <div className="grid grid-cols-12">
          <div className={`${toggleRightSide ? "col-span-8" : "col-span-12"}`}>
            <MessageBox
              setToggleRightSide={setToggleRightSide}
              toggleRightSide={toggleRightSide}
            />
            <div className="py-2 px-4">
              <MessageBottom
                setToggleRightSide={setToggleRightSide}
                toggleRightSide={toggleRightSide}
              />
            </div>
          </div>
          <div
            className={` ${toggleRightSide ? "block col-span-4" : "hidden"}`}
          >
            <RightSideBar
              setToggleRightSide={setToggleRightSide}
              toggleRightSide={toggleRightSide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
