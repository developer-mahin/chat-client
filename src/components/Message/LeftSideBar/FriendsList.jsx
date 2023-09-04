import { useSelector } from "react-redux";
import "./style.css";

const FriendsList = () => {
  const { data } = useSelector((state) => state.auth);
  return (
    <div className="">
      <div className="py-2 px-3 rounded cursor-pointer active:bg-slate-900 flex items-center gap-1 hover:bg-gray-900">
        <div className="">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-white capitalize">{data.name}</p>
        </div>
      </div>
      <div className="py-2 px-3 rounded cursor-pointer active:bg-slate-900 flex items-center gap-1 hover:bg-gray-900">
        <div className="">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-white capitalize">{data.name}</p>
        </div>
      </div>
      <div className="py-2 px-3 rounded cursor-pointer active:bg-slate-900 flex items-center gap-1 hover:bg-gray-900">
        <div className="">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-white capitalize">{data.name}</p>
        </div>
      </div>
      <div className="py-2 px-3 rounded cursor-pointer active:bg-slate-900 flex items-center gap-1 hover:bg-gray-900">
        <div className="">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-white capitalize">{data.name}</p>
        </div>
      </div>
      <div className="py-2 px-3 rounded cursor-pointer active:bg-slate-900 flex items-center gap-1 hover:bg-gray-900">
        <div className="">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-white capitalize">{data.name}</p>
        </div>
      </div>
      <div className="py-2 px-3 rounded cursor-pointer active:bg-slate-900 flex items-center gap-1 hover:bg-gray-900">
        <div className="">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-white capitalize">{data.name}</p>
        </div>
      </div>
      <div className="py-2 px-3 rounded cursor-pointer active:bg-slate-900 flex items-center gap-1 hover:bg-gray-900">
        <div className="">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-white capitalize">{data.name}</p>
        </div>
      </div>
      <div className="py-2 px-3 rounded cursor-pointer active:bg-slate-900 flex items-center gap-1 hover:bg-gray-900">
        <div className="">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-bold text-white capitalize">{data.name}</p>
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
