import { useEffect, useRef, useState } from "react";
import LeftSideBar from "../../components/Message/LeftSideBar/LeftSideBar";
import MessageBottom from "../../components/Message/MessageBox/MessageBottom";
import MessageBox from "../../components/Message/MessageBox/MessageBox";
import RightSideBar from "../../components/Message/RightSideBar/RightSideBar";
import logo from "../../assets/images/logo.png";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addSocketMessage,
  getMessage,
  sendMessage,
  sentImageMessage,
} from "../../redux/messageSlice/messageSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const Message = () => {
  const [toggleRightSide, setToggleRightSide] = useState(false);
  const scrollRef = useRef();
  const socket = useRef();
  const [currentFriend, setCurrentFriend] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const { data } = useSelector((state) => state.auth);
  const [showEmoji, setShowEmoji] = useState(false);
  const [imageConvert, setImageConvert] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [activeUsers, setActiveUser] = useState([]);
  const [socketMessage, setSocketMessage] = useState(null);

  useEffect(() => {}, [(socket.current = io("ws://localhost:8000"))]);
  useEffect(() => {
    socket.current.emit("addUser", data.id, data);
    socket.current.on("getMessage", (data) => {
      setSocketMessage(data);
    });
  }, []);
  useEffect(() => {
    if (socketMessage && currentFriend) {
      if (
        socketMessage.senderId === currentFriend._id &&
        socketMessage.receiverId === data.id
      ) {
        dispatch(addSocketMessage(socketMessage));
      }
    }
    setSocketMessage("")
  }, [socketMessage]);


  useEffect(() => {
    socket.current.on("getUsers", (users) => {
      const filterUser = users.filter((user) => user.userId !== data.id);
      setActiveUser(filterUser);
    });
  }, []);

  const inputHandler = (e) => {
    setNewMessage(e.target.value);
  };
  const dispatch = useDispatch();
  const { isLoading: messageLoading } = useSelector((state) => state.message);
  const handleMessageSent = (e) => {
    e.preventDefault();
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

    //action dispatch
    dispatch(sendMessage(messageData));
  };
  useEffect(() => {
    if (messageLoading) {
      setNewMessage("");
      setShowEmoji(false);
    }
  }, [messageLoading]);

  //get message
  // useEffect(() => {
  //   dispatch(getMessage(currentFriend?._id));
  // }, [currentFriend?._id, dispatch]);

  const token = localStorage.getItem("access_token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  const [messageData, setMessageData] = useState([]);
  useEffect(() => {
    axios
      .post(
        `http://localhost:5000/api/v1/message/get__message/${currentFriend?._id}`,
        { token }
      )
      .then((res) => {
        setMessageData(res.data.message);
      });
  }, [currentFriend?._id, token, messageLoading, dispatch]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageData]);

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
  const handleImageSent = async () => {
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=6172cdc3d7968fb2194fbc4fc29a6a67`;

    const res = await axios.post(url, formData);
    setImageConvert("");
    if (res.data.success) {
      const messageData = {
        senderName: data.name,
        receiverId: currentFriend._id,
        image: res.data.data.display_url,
      };

      await dispatch(sentImageMessage(messageData));
    }
  };

  useEffect(() => {
    setImage(null);
  }, [messageLoading]);

  useEffect(() => {
    setImageConvert(null);
  }, [currentFriend]);

  return (
    <div className="grid grid-cols-12  css__container">
      <div className="col-span-3  border-[#1f2f36] shadow-xl ">
        <LeftSideBar
          setCurrentFriend={setCurrentFriend}
          currentFriend={currentFriend}
          activeUsers={activeUsers}
        />
      </div>
      <div className="col-span-9">
        {currentFriend ? (
          <div className="grid grid-cols-12">
            <div
              className={`${toggleRightSide ? "col-span-8" : "col-span-12"}`}
            >
              <MessageBox
                activeUsers={activeUsers}
                scrollRef={scrollRef}
                messageData={messageData}
                currentFriend={currentFriend}
                setToggleRightSide={setToggleRightSide}
                toggleRightSide={toggleRightSide}
              />
              <div className="py-2 px-4">
                <MessageBottom
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
