import { useEffect, useReducer, useRef, useState } from "react";
import LeftSideBar from "../../components/Message/LeftSideBar/LeftSideBar";
import MessageBottom from "../../components/Message/MessageBox/MessageBottom";
import MessageBox from "../../components/Message/MessageBox/MessageBox";
import RightSideBar from "../../components/Message/RightSideBar/RightSideBar";
import logo from "../../assets/images/logo.png";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getMessage,
  seenMessage,
  sendMessage,
  sentImageMessage,
  updatedDeliveredStatus,
} from "../../redux/messageSlice/messageSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { toast } from "react-toastify";
import sendingSound from "../../assets/audio/sendingSound.mp3";
import notificationSound from "../../assets/audio/notification.mp3";
import useSound from "use-sound";
import { getAllUser } from "../../redux/userSlice/userSlice";
import { useQuery } from "@tanstack/react-query";

const Message = () => {
  const [toggleRightSide, setToggleRightSide] = useState(false);
  const [sendingSoundPlay] = useSound(sendingSound);
  const [notificationSoundPlay] = useSound(notificationSound);
  const scrollRef = useRef();
  const socket = useRef();
  const [currentFriend, setCurrentFriend] = useState(null);
  const [resentFriend, setResentFriend] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const { data } = useSelector((state) => state.auth);
  const [showEmoji, setShowEmoji] = useState(false);
  const [imageConvert, setImageConvert] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [activeUsers, setActiveUser] = useState([]);
  const [socketMessage, setSocketMessage] = useState({});
  const [typingMessage, setTypingMessage] = useState(null);
  const {
    messageSentSuccess,
    messageData: message,
    currentMessage,
  } = useSelector((state) => state.message);
  const { data: userInfo } = useSelector((state) => state.users);
  const token = localStorage.getItem("access_token") || "";
  const [messageData, setMessageData] = useState([]);

  /* 
 connect to socket
   */
  useEffect(() => {}, [(socket.current = io("ws://localhost:8000"))]);
  /* 
 All handler and get all data from socket io
   */
  useEffect(() => {
    socket.current.emit("addUser", data.id, data);
    socket.current.on("getMessage", (data) => {
      setSocketMessage(data);
    });
    socket.current.on("getTypingMessage", (data) => {
      setTypingMessage(data);
    });
  }, []);

  /**
   *
   * */
  useEffect(() => {
    if (
      socketMessage &&
      socketMessage.senderId !== resentFriend._id &&
      socketMessage.receiverId === data.id
    ) {
      toast(`${socketMessage.senderName} send a new message`);
      notificationSoundPlay();
      dispatch(updatedDeliveredStatus(currentMessage));
    }
  }, [socketMessage]);

  /* 
 for getting active user 
   */
  useEffect(() => {
    socket.current.on("getUsers", (users) => {
      const filterUser = users.filter((user) => user.userId !== data.id);
      setActiveUser(filterUser);
    });
  }, []);

  const { data: users = [], refetch } = useQuery({
    queryKey: ["allUsersInfo"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/user/all_user/${token}`
      );
      const data = await res.json();
      return data;
    },
  });

  /* 
  message value adding handler
   */
  const inputHandler = (e) => {
    setNewMessage(e.target.value);
    socket.current.emit("typingMessage", {
      senderId: data.id,
      receiverId: currentFriend._id,
      message: e.target.value,
    });
  };
  const dispatch = useDispatch();
  const { isLoading: messageLoading } = useSelector((state) => state.message);

  /* 
  for sending message 
   */

  const handleEmojiPicker = (value) => {
    setNewMessage(`${newMessage}` + value);
    socket.current.emit("typingMessage", {
      senderId: data.id,
      receiverId: currentFriend._id,
      message: value,
    });
  };

  const handleMessageSent = (e) => {
    e.preventDefault();
    sendingSoundPlay();
    const messageData = {
      senderName: data.name,
      receiverId: currentFriend._id,
      message: newMessage ? newMessage : "❤️",
    };

    socket.current.emit("sendMessage", {
      senderId: data.id,
      senderName: data.name,
      receiverId: currentFriend._id,
      time: new Date(),
      message: {
        text: newMessage ? newMessage : "❤️",
        image: "",
      },
    });
    refetch();
    setTypingMessage();
    //action dispatch
    dispatch(sendMessage(messageData));
  };

  /* 
  for get all message
   */

  useEffect(() => {
    axios
      .post(
        `http://localhost:5000/api/v1/message/get__message/${currentFriend?._id}`,
        { token }
      )
      .then((res) => {
        setMessageData(res.data.message);
        if (socketMessage && currentFriend) {
          if (
            socketMessage.senderId === currentFriend._id &&
            socketMessage.receiverId === data.id
          ) {
            setMessageData(socketMessage);
            dispatch(seenMessage(currentMessage));
            socket.current.emit("messageSeen", currentMessage);
          }
        }
        setSocketMessage("");
      });
  }, [
    currentFriend?._id,
    token,
    messageLoading,
    dispatch,
    currentMessage,
    socketMessage,
    seenMessage,
    socket,
  ]);

  // console.log(socketMessage);

  /* 
  for scrolling behavior
   */
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageData]);

  /* 
  get image data using
   */

  const getImageData = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const convert = e.target.result;
        setImageConvert(convert);
      };
      reader.readAsDataURL(file);
    }
  };

  /* 
  function image sent
  */
  const handleImageSent = async () => {
    const formData = new FormData();
    formData.append("image", image);
    sendingSoundPlay();

    const url = `https://api.imgbb.com/1/upload?key=6172cdc3d7968fb2194fbc4fc29a6a67`;

    const res = await axios.post(url, formData);
    setImageConvert("");
    if (res.data.success) {
      const messageData = {
        senderName: data.name,
        receiverId: currentFriend._id,
        image: res.data.data.display_url,
      };
      refetch();
      socket.current.emit("sendMessage", {
        senderId: data.id,
        senderName: data.name,
        receiverId: currentFriend._id,
        time: new Date(),
        message: {
          text: "",
          image: res.data.data.display_url,
        },
      });

      await dispatch(sentImageMessage(messageData));
    }
  };

  useEffect(() => {
    dispatch(getAllUser(token));
  }, [dispatch, token, socketMessage]);

  useEffect(() => {
    if (messageSentSuccess) {
      socket.current.emit("sendMessage", message[message.length[-1]]);

      const msgInfo = message[message.length[-1]];
      const index = userInfo.findIndex(
        (f) =>
          f.friendInfo._id === msgInfo.receiverId ||
          f.friendInfo._id === msgInfo.senderId
      );

      userInfo[index].messageInfo = msgInfo;
    }
  }, [messageSentSuccess, message, userInfo]);

  const [ignore, forceUpdate] = useReducer((x) => x + 1, 0);
  const handleLogout = () => {
    localStorage.clear();
    forceUpdate();
    socket.current.emit("logout", data.id);
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate, ignore]);

  useEffect(() => {
    setImage(null);
  }, [messageLoading]);

  useEffect(() => {
    setImageConvert(null);
  }, [currentFriend]);

  useEffect(() => {
    if (messageLoading) {
      setNewMessage("");
      setShowEmoji(false);
    }
  }, [messageLoading]);

  useEffect(() => {
    if (messageSentSuccess || socketMessage) {
      setTypingMessage(null);
    }
  }, [messageSentSuccess, setTypingMessage]);

  return (
    <div className="grid grid-cols-12  css__container">
      <div className="col-span-3  border-[#1f2f36] shadow-xl ">
        <LeftSideBar
          users={users}
          messageSentSuccess={messageSentSuccess}
          setResentFriend={setResentFriend}
          setCurrentFriend={setCurrentFriend}
          currentFriend={currentFriend}
          activeUsers={activeUsers}
          handleLogout={handleLogout}
          socketMessage={socketMessage}
        />
      </div>
      <div className="col-span-9">
        {currentFriend ? (
          <div className="grid grid-cols-12">
            <div
              className={`${toggleRightSide ? "col-span-8" : "col-span-12"}`}
            >
              <MessageBox
                typingMessage={typingMessage}
                activeUsers={activeUsers}
                scrollRef={scrollRef}
                messageData={messageData}
                currentFriend={currentFriend}
                setToggleRightSide={setToggleRightSide}
                toggleRightSide={toggleRightSide}
              />
              <div className="py-2 px-4">
                <MessageBottom
                  handleEmojiPicker={handleEmojiPicker}
                  setImageConvert={setImageConvert}
                  handleImageSent={handleImageSent}
                  imageConvert={imageConvert}
                  getImageData={getImageData}
                  setShowEmoji={setShowEmoji}
                  showEmoji={showEmoji}
                  handleMessageSent={handleMessageSent}
                  setNewMessage={setNewMessage}
                  inputHandler={inputHandler}
                  newMessage={newMessage}
                  toggleRightSide={toggleRightSide}
                  image={image}
                  setImage={setImage}
                />
              </div>
            </div>
            <div
              className={` ${toggleRightSide ? "block col-span-4" : "hidden"}`}
            >
              <RightSideBar
                activeUsers={activeUsers}
                currentFriend={currentFriend}
                toggleRightSide={toggleRightSide}
              />
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-center h-[100vh]">
              <img src={logo} alt="" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Message;
