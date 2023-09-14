import { useSelector } from "react-redux";
import "./style.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const MessageContent = ({
  toggleRightSide,
  currentFriend,
  messageData,
  scrollRef,
}) => {
  const { data } = useSelector((state) => state.auth);
  const { image, name } = currentFriend;
  // const { messageData } = useSelector((state) => state.message);
  console.log(messageData);

  return (
    <>
      <div className="">
        <div className="mt-10">
          <div className="flex items-center justify-center">
            <img
              src={`http://localhost:5000/public/images/users/${image}`}
              alt=""
              className="w-[70px] h-[70px] rounded-full object-cover"
            />
          </div>
          <div className="text-center mt-1">
            <p className="font-bold text-white capitalize">{name}</p>
            <p className=" text-white capitalize">{name} is connected</p>
            <p className=" text-white capitalize">3 days ago</p>
          </div>
        </div>
        {/**
         *
         *
         *
         *
         * */}
        <div className="message__show">
          <div>
            {messageData && messageData?.length > 0 ? (
              messageData?.map((m, i) =>
                m?.senderId === data?.id ? (
                  <div ref={scrollRef} key={m._id} className="my__message">
                    <div className="my__image__message">
                      <div className="my__image">
                        <PhotoProvider>
                          <PhotoView
                            src={`http://localhost:5000/public/images/users/${data.image}`}
                          >
                            <img
                              src={`http://localhost:5000/public/images/users/${data.image}`}
                              className="object-cover w-[50px] h-[50px] rounded-full "
                              alt=""
                            />
                          </PhotoView>
                        </PhotoProvider>
                      </div>
                      <div
                        className={`${
                          !toggleRightSide ? "w-[900px]" : "w-[370px]"
                        }  flex justify-end flex-col items-end`}
                      >
                        <div className="my__message__text">
                          <p>{m.message?.text}</p>
                        </div>
                        <div className="my__time">2 September 2023</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div ref={scrollRef} key={i} className="fd__message">
                    <div className="fd__image__message">
                      <div className="fd__image">
                        <PhotoProvider>
                          <PhotoView
                            src={`http://localhost:5000/public/images/users/${currentFriend.image}`}
                          >
                            <img
                              src={`http://localhost:5000/public/images/users/${currentFriend.image}`}
                              className="object-cover w-[50px] h-[50px] rounded-full "
                              alt=""
                            />
                          </PhotoView>
                        </PhotoProvider>
                      </div>
                      <div
                        className={`${
                          !toggleRightSide ? "w-[900px]" : "w-[370px]"
                        }  flex justify-start flex-col items-start`}
                      >
                        <div className="fd__message__text">
                          <p>{m.message?.text}</p>
                        </div>
                        <div className="fd__time">2 September 2023</div>
                      </div>
                    </div>
                  </div>
                )
              )
            ) : (
              <>
                <h2 className="text-lg font-semibold text-white text-center mt-10">
                  No Message Here Start you conversation
                </h2>
              </>
            )}

            {/* <div className="my__message">
              <div className="my__image__message">
                <div className="my__image">
                  <img
                    src={`http://localhost:5000/public/images/users/${data.image}`}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full object-cover"
                  />
                </div>
                <div
                  className={`${
                    !toggleRightSide ? "w-[900px]" : "w-[370px]"
                  }  flex justify-end flex-col items-end`}
                >
                  <div className="message__text">
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
                  <div className="my__time">2 September 2023</div>
                </div>
              </div>
            </div>

            <div className="fd__message">
              <div className="fd__image__message">
                <div className="fd__image">
                  <img
                    src={`http://localhost:5000/public/images/users/${data.image}`}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full object-cover"
                  />
                </div>
                <div
                  className={`${
                    !toggleRightSide ? "w-[900px]" : "w-[370px]"
                  }  flex justify-start flex-col items-start`}
                >
                  <div className="message__text">
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
                  <div className="fd__time">2 September 2023</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageContent;
