import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { useEffect } from "react";
import { getAllUser } from "../../../redux/userSlice/userSlice";

const FriendsList = ({ setCurrentFriend, currentFriend }) => {
  const { data } = useSelector((state) => state.users);
  const token = localStorage.getItem("access_token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser(token));
  }, [dispatch, token]);

  return (
    <div className="">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item._id}
            onClick={() => setCurrentFriend(item)}
            className={`${
              currentFriend === item ? "bg-[#0b0f11]" : ""
            } py-2 px-3 rounded cursor-pointer flex items-center gap-1 hover:bg-gray-900`}
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
        ))
      ) : (
        <>
          <p>No Friends </p>
        </>
      )}
    </div>
  );
};

export default FriendsList;
