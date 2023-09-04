import { useSelector } from "react-redux";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const ActiveFriend = () => {
  const { data } = useSelector((state) => state.auth);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="w-[50px] h-[50px] relative">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-full h-full rounded-full object-cover border-2 border-gray-400"
          />
          <div className="absolute -top-[5px] right-0 ">
            <FiberManualRecordIcon
              style={{ color: "#66CC33", fontSize: "16px" }}
            />
          </div>
        </div>
        <div className="w-[50px] h-[50px] relative">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-full h-full rounded-full object-cover border-2 border-gray-400"
          />
          <div className="absolute -top-[5px] right-0 ">
            <FiberManualRecordIcon
              style={{ color: "#66CC33", fontSize: "16px" }}
            />
          </div>
        </div>
        <div className="w-[50px] h-[50px] relative">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-full h-full rounded-full object-cover border-2 border-gray-400"
          />
          <div className="absolute -top-[5px] right-0 ">
            <FiberManualRecordIcon
              style={{ color: "#66CC33", fontSize: "16px" }}
            />
          </div>
        </div>
        <div className="w-[50px] h-[50px] relative">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-full h-full rounded-full object-cover border-2 border-gray-400"
          />
          <div className="absolute -top-[5px] right-0 ">
            <FiberManualRecordIcon
              style={{ color: "#66CC33", fontSize: "16px" }}
            />
          </div>
        </div>
        <div className="w-[50px] h-[50px] relative">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-full h-full rounded-full object-cover border-2 border-gray-400"
          />
          <div className="absolute -top-[5px] right-0 ">
            <FiberManualRecordIcon
              style={{ color: "#66CC33", fontSize: "16px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveFriend;
