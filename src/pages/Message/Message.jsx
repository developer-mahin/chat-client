import LeftSideBar from "../../components/Message/LeftSideBar/LeftSideBar";
import MessageBottom from "../../components/Message/MessageBox/MessageBottom";
import MessageBox from "../../components/Message/MessageBox/MessageBox";
import RightSideBar from "../../components/Message/RightSideBar/RightSideBar";

const Message = () => {
  return (
    <div className="grid grid-cols-12 px-5">
      <div className="col-span-3 border-r-2 border-[#1f2f36] shadow-xl pr-3">
        <LeftSideBar />
      </div>
      <div className="col-span-9">
        <div className="grid grid-cols-12">
          <div className="col-span-8 ">
            <MessageBox />
            <div className="py-2 px-4">
              <MessageBottom />
            </div>
          </div>
          <div className="col-span-4">
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
