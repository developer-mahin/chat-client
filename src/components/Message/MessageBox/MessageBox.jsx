import MessageContent from "./MessageContent";
import MessageTop from "./MessageTop";
import "./style.css";

const MessageBox = ({
  setShowEmoji,
  showEmoji,
  setToggleRightSide,
  toggleRightSide,
  currentFriend,
  messageData,
  scrollRef,
  activeUsers,
}) => {
  return (
    <div
      className="message__box"
      style={{ boxShadow: "0px 0px 20px -15px #ddd" }}
    >
      <MessageTop
        activeUsers={activeUsers}
        currentFriend={currentFriend}
        setToggleRightSide={setToggleRightSide}
        toggleRightSide={toggleRightSide}
      />
      <MessageContent
        setShowEmoji={setShowEmoji}
        showEmoji={showEmoji}
        scrollRef={scrollRef}
        messageData={messageData}
        currentFriend={currentFriend}
        toggleRightSide={toggleRightSide}
      />
    </div>
  );
};

export default MessageBox;
