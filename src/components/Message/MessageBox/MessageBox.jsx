import MessageContent from "./MessageContent";
import MessageTop from "./MessageTop";
import "./style.css";

const MessageBox = ({ setToggleRightSide, toggleRightSide }) => {
  return (
    <div
      className="message__box"
      style={{ boxShadow: "0px 0px 20px -15px #ddd" }}
    >
      <MessageTop
        setToggleRightSide={setToggleRightSide}
        toggleRightSide={toggleRightSide}
      />
      <MessageContent
        setToggleRightSide={setToggleRightSide}
        toggleRightSide={toggleRightSide}
      />
    </div>
  );
};

export default MessageBox;
