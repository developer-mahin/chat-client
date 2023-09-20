const ActiveFriend = ({ setCurrentFriend, user }) => {

  return (
    <div>
      <div className="flex items-center justify-between">
        <div
          onClick={() =>
            setCurrentFriend({
              _id: user.userInfo.id,
              email: user.userInfo.email,
              name: user.userInfo.name,
              image: user.userInfo.image,
            })
          }
          className="w-[50px] h-[50px] relative cursor-pointer"
        >
          <img
            src={`http://localhost:5000/public/images/users/${user.userInfo.image}`}
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
