import MessageContent from "./MessageContent";
import MessageTop from "./MessageTop";
import "./style.css";

const MessageBox = ({
  setToggleRightSide,
  toggleRightSide,
  currentFriend,
  messageData,
  scrollRef,
}) => {
  return (
    <div
      className="message__box"
      style={{ boxShadow: "0px 0px 20px -15px #ddd" }}
    >
      <MessageTop
        currentFriend={currentFriend}
        setToggleRightSide={setToggleRightSide}
        toggleRightSide={toggleRightSide}
      />
      <MessageContent
        scrollRef={scrollRef}
        messageData={messageData}
        currentFriend={currentFriend}
        toggleRightSide={toggleRightSide}
      />
    </div>
  );
};

export default MessageBox;
