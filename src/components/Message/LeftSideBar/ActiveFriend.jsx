import { useSelector } from "react-redux";

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
          <div className="absolute w-3 h-3 bg-green-500 rounded-full right-0 top-1 "></div>
        </div>
        <div className="w-[50px] h-[50px] relative">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-full h-full rounded-full object-cover border-2 border-gray-400"
          />
          <div className="absolute w-3 h-3 bg-green-500 rounded-full right-0 top-1 "></div>
        </div>
        <div className="w-[50px] h-[50px] relative">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-full h-full rounded-full object-cover border-2 border-gray-400"
          />
          <div className="absolute w-3 h-3 bg-green-500 rounded-full right-0 top-1 "></div>
        </div>
        <div className="w-[50px] h-[50px] relative">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-full h-full rounded-full object-cover border-2 border-gray-400"
          />
          <div className="absolute w-3 h-3 bg-green-500 rounded-full right-0 top-1 "></div>
        </div>
        <div className="w-[50px] h-[50px] relative">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-full h-full rounded-full object-cover border-2 border-gray-400"
          />
          <div className="absolute w-3 h-3 bg-green-500 rounded-full right-0 top-1 "></div>
        </div>
      </div>
    </div>
  );
};

export default ActiveFriend;
