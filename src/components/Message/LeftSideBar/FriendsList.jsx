import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { useEffect } from "react";
import { getAllUser } from "../../../redux/userSlice/userSlice";

const FriendsList = () => {
  const { data } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  return (
    <div className="">
      {data.map((item) => (
        <div
          key={item._id}
          className="py-2 px-3 rounded cursor-pointer active:bg-slate-900 flex items-center gap-1 hover:bg-gray-900"
        >
          <div className="">
            <img
              src={`http://localhost:5000/public/images/users/${item.image}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </div>
          <div>
            <p className="font-bold text-white capitalize">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
