import MessageContent from "./MessageContent";
import MessageTop from "./MessageTop";
import "./style.css";

const MessageBox = () => {
  return (
    <div
      className="message__box"
      style={{ boxShadow: "0px 0px 20px -15px #ddd" }}
    >
      <MessageTop />
      <MessageContent />
    </div>
  );
};

export default MessageBox;
