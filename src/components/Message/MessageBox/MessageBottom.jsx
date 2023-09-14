import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { AiFillGift } from "react-icons/ai";
import { IoSendSharp } from "react-icons/io5";
import { useState } from "react";
import { emojis } from "../../../data/emijis";
import "./style.css";

const MessageBottom = ({
  toggleRightSide,
  inputHandler,
  newMessage,
  handleMessageSent,
  setNewMessage,
}) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [emojiPicker, setEmojiPicker] = useState([]);

  const handleEmojiPicker = (value) => {
    setEmojiPicker(value);
    setEmojiPicker([...emojiPicker, value]);
    setNewMessage(emojiPicker, newMessage);
  };

  return (
    <div className="">
      <div className="py-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          <button
            data-te-toggle="tooltip"
            data-te-placement="top"
            data-te-ripple-color="light"
            title="Add Attachment"
          >
            <ControlPointIcon className="text-white text-2xl mx-2 cursor-pointer" />
          </button>
          <div>
            <input type="file" id="pic" accept="image/*" className="hidden" />
            <label
              data-te-toggle="tooltip"
              data-te-placement="top"
              data-te-ripple-color="light"
              title="Add Image"
              htmlFor="pic"
            >
              <AddPhotoAlternateIcon className="text-white text-2xl mx-2 cursor-pointer" />
            </label>
          </div>
          <DriveFileRenameOutlineOutlinedIcon className="text-white text-2xl mx-2 cursor-pointer" />
          <button
            data-te-toggle="tooltip"
            data-te-placement="top"
            data-te-ripple-color="light"
            title="Add Gift"
          >
            <AiFillGift className="text-white text-2xl mx-2 cursor-pointer" />
          </button>
        </div>

        <form
          onSubmit={handleMessageSent}
          className="flex items-center gap-2 flex-1"
        >
          <div className="flex-1 relative ">
            <input
              type="text"
              onChange={inputHandler}
              placeholder="Aa"
              value={newMessage}
              // onKeyUp={handleMessageSent}
              className="w-full py-2.5 px-4 rounded-full bg-[#1b262b] placeholder:font-bold text-white focus:outline-none"
            />
            <p
              onClick={() => setShowEmoji(!showEmoji)}
              className="text-white text-2xl mx-2 cursor-pointer absolute right-1 top-1"
            >
              🙂
            </p>
          </div>

          <div>
            {showEmoji && (
              <div
                className={`grid grid-cols-7 bg-gray-900 p-4 rounded-md emoji__wrapper ${
                  !toggleRightSide ? "right-[100px]" : "right-[450px]"
                }`}
              >
                {emojis.map((e, i) => (
                  <div
                    onClick={(e) => handleEmojiPicker(e.target.innerText)}
                    className="text-2xl cursor-pointer"
                    key={i}
                  >
                    {e}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            {newMessage.length ? (
              <button>
                <IoSendSharp className="text-white text-2xl mx-2 cursor-pointer" />
              </button>
            ) : (
              <button type="submit" className="text-2xl cursor-pointer">
                ❤️
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageBottom;
