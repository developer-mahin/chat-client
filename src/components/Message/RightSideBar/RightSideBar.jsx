import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useSelector } from "react-redux";
import "./style.css";
import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const RightSideBar = ({ toggleRightSide, currentFriend }) => {
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
              <div className="w-3 h-3 rounded-full bg-green-500 absolute right-2 bottom-2"></div>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold text-center text-white mt-2">
              Active
            </p>
            <p className="text-xl font-semibold text-center text-white">
              {currentFriend.name}
            </p>
          </div>

          {/**
           *
           * */}
          <div className="pl-6 mt-10">
            <div>
              <div className="flex items-center justify-between cursor-pointer py-2">
                <h1 className="text-xl text-white font-semibold">
                  Customize Chat
                </h1>
                <BsChevronDown className="text-2xl text-white" />
              </div>
              {/*  */}
              <div className="flex items-center justify-between cursor-pointer  py-2">
                <h1 className="text-xl text-white font-semibold">
                  Privacy and Support
                </h1>
                <BsChevronDown className="text-2xl text-white" />
              </div>
              {/*  */}
              <div>
                <div
                  onClick={() => setShowSharedMedia(!showSharedMedia)}
                  className="flex items-center justify-between cursor-pointer  py-2"
                >
                  <h1 className="text-xl text-white font-semibold">
                    Shared Media
                  </h1>
                  {showSharedMedia ? (
                    <BsChevronUp className="text-2xl text-white" />
                  ) : (
                    <BsChevronDown className="text-2xl text-white" />
                  )}
                </div>
                {showSharedMedia && (
                  <div className="mt-6">
                    <div className="grid grid-cols-2 gap-3">
                      <PhotoProvider>
                        <PhotoView
                          src={`http://localhost:5000/public/images/users/${data.image}`}
                        >
                          <img
                            src={`http://localhost:5000/public/images/users/${data.image}`}
                            className="object-cover cursor-pointer"
                            alt=""
                          />
                        </PhotoView>
                      </PhotoProvider>
                      <PhotoProvider>
                        <PhotoView
                          src={`http://localhost:5000/public/images/users/${data.image}`}
                        >
                          <img
                            src={`http://localhost:5000/public/images/users/${data.image}`}
                            className="object-cover cursor-pointer"
                            alt=""
                          />
                        </PhotoView>
                      </PhotoProvider>
                      <PhotoProvider>
                        <PhotoView
                          src={`http://localhost:5000/public/images/users/${data.image}`}
                        >
                          <img
                            src={`http://localhost:5000/public/images/users/${data.image}`}
                            className="object-cover cursor-pointer"
                            alt=""
                          />
                        </PhotoView>
                      </PhotoProvider>
                      <PhotoProvider>
                        <PhotoView
                          src={`http://localhost:5000/public/images/users/${data.image}`}
                        >
                          <img
                            src={`http://localhost:5000/public/images/users/${data.image}`}
                            className="object-cover cursor-pointer"
                            alt=""
                          />
                        </PhotoView>
                      </PhotoProvider>
                      <PhotoProvider>
                        <PhotoView
                          src={`http://localhost:5000/public/images/users/${data.image}`}
                        >
                          <img
                            src={`http://localhost:5000/public/images/users/${data.image}`}
                            className="object-cover cursor-pointer"
                            alt=""
                          />
                        </PhotoView>
                      </PhotoProvider>
                      <PhotoProvider>
                        <PhotoView
                          src={`http://localhost:5000/public/images/users/${data.image}`}
                        >
                          <img
                            src={`http://localhost:5000/public/images/users/${data.image}`}
                            className="object-cover cursor-pointer"
                            alt=""
                          />
                        </PhotoView>
                      </PhotoProvider>
                      <PhotoProvider>
                        <PhotoView
                          src={`http://localhost:5000/public/images/users/${data.image}`}
                        >
                          <img
                            src={`http://localhost:5000/public/images/users/${data.image}`}
                            className="object-cover cursor-pointer"
                            alt=""
                          />
                        </PhotoView>
                      </PhotoProvider>
                      <PhotoProvider>
                        <PhotoView
                          src={`http://localhost:5000/public/images/users/${data.image}`}
                        >
                          <img
                            src={`http://localhost:5000/public/images/users/${data.image}`}
                            className="object-cover cursor-pointer"
                            alt=""
                          />
                        </PhotoView>
                      </PhotoProvider>
                      <PhotoProvider>
                        <PhotoView
                          src={`http://localhost:5000/public/images/users/${data.image}`}
                        >
                          <img
                            src={`http://localhost:5000/public/images/users/${data.image}`}
                            className="object-cover cursor-pointer"
                            alt=""
                          />
                        </PhotoView>
                      </PhotoProvider>
                      <PhotoProvider>
                        <PhotoView
                          src={`http://localhost:5000/public/images/users/${data.image}`}
                        >
                          <img
                            src={`http://localhost:5000/public/images/users/${data.image}`}
                            className="object-cover cursor-pointer"
                            alt=""
                          />
                        </PhotoView>
                      </PhotoProvider>
                      <PhotoProvider>
                        <PhotoView
                          src={`http://localhost:5000/public/images/users/${data.image}`}
                        >
                          <img
                            src={`http://localhost:5000/public/images/users/${data.image}`}
                            className="object-cover cursor-pointer"
                            alt=""
                          />
                        </PhotoView>
                      </PhotoProvider>
                      <PhotoProvider>
                        <PhotoView
                          src={`http://localhost:5000/public/images/users/${data.image}`}
                        >
                          <img
                            src={`http://localhost:5000/public/images/users/${data.image}`}
                            className="object-cover cursor-pointer"
                            alt=""
                          />
                        </PhotoView>
                      </PhotoProvider>
                      <PhotoProvider>
                        <PhotoView
                          src={`http://localhost:5000/public/images/users/${data.image}`}
                        >
                          <img
                            src={`http://localhost:5000/public/images/users/${data.image}`}
                            className="object-cover cursor-pointer"
                            alt=""
                          />
                        </PhotoView>
                      </PhotoProvider>
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
