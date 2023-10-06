import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { AiFillCloseCircle, AiFillGift } from "react-icons/ai";
import { IoSendSharp } from "react-icons/io5";
import { emojis } from "../../../data/emijis";
import "./style.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const MessageBottom = ({
  toggleRightSide,
  inputHandler,
  newMessage,
  handleMessageSent,
  setNewMessage,
  setShowEmoji,
  showEmoji,
  getImageData,
  imageConvert,
  setImageConvert,
  handleImageSent,
  image,
  setImage,
  handleEmojiPicker,
}) => {
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
            <ControlPointIcon className="text-[var(--text-color)] text-2xl mx-2 cursor-pointer" />
          </button>
          <div>
            <input
              type="file"
              onChange={getImageData}
              id="pic"
              accept="image/*"
              className="hidden"
            />

            <label
              data-te-toggle="tooltip"
              data-te-placement="top"
              data-te-ripple-color="light"
              title="Add Image"
              htmlFor="pic"
            >
              <AddPhotoAlternateIcon className="text-[var(--text-color)] text-2xl mx-2 cursor-pointer" />
            </label>
          </div>
          <DriveFileRenameOutlineOutlinedIcon className="text-[var(--text-color)] text-2xl mx-2 cursor-pointer" />
          <button
            data-te-toggle="tooltip"
            data-te-placement="top"
            data-te-ripple-color="light"
            title="Add Gift"
          >
            <AiFillGift className="text-[var(--text-color)] text-2xl mx-2 cursor-pointer" />
          </button>
        </div>

        <form
          onSubmit={handleMessageSent}
          className="flex items-center gap-2 flex-1"
        >
          <div className="flex-1 relative ">
            <div className={`${imageConvert && "relative"}`}>
              <input
                type="text"
                onChange={inputHandler}
                placeholder="Aa"
                value={newMessage}
                className="w-full py-2.5 px-4 rounded-full bg-[var(--bg-color)] border border-[var(--border-color)] placeholder:font-bold text-[var(--text-color)] focus:outline-none"
              />
              {imageConvert && (
                <div className="absolute -top-[140px] py-2 px-4 rounded-lg bg-[var(--bg-color)]">
                  <AiFillCloseCircle
                    onClick={() => {
                      setImageConvert(null);
                      setImage(null);
                    }}
                    className="text-[var(--text-color)] text-2xl float-right cursor-pointer"
                  />
                  <div>
                    <PhotoProvider>
                      <PhotoView src={imageConvert}>
                        <img
                          src={imageConvert}
                          className="w-[80px] h-[80px] object-cover cursor-pointer"
                          alt=""
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                </div>
              )}
            </div>
            <p
              onClick={() => setShowEmoji(!showEmoji)}
              className="text-[var(--text-color)] text-2xl mx-2 cursor-pointer absolute right-1 top-1"
            >
              🙂
            </p>
          </div>

          <div>
            {showEmoji && (
              <div
                className={`grid grid-cols-7 bg-[var(--bg-color)] border border-[--border-color] p-4 rounded-md emoji__wrapper ${
                  !toggleRightSide ? "right-[100px]" : "right-[450px]"
                }`}
              >
                {emojis.map((e, i) => (
                  <div
                    onClick={() => handleEmojiPicker(e)}
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
              <button className={`${image !== null ? "hidden" : "block"}`}>
                <IoSendSharp className="text-[var(--text-color)] text-2xl mx-2 cursor-pointer" />
              </button>
            ) : (
              <button
                type="submit"
                className={`${
                  image !== null ? "hidden" : "block"
                } text-2xl cursor-pointer`}
              >
                ❤️
              </button>
            )}
          </div>
        </form>
        <div>
          <button
            type="submit"
            className={`${image === null ? "hidden" : "block"}`}
          >
            <IoSendSharp
              onClick={handleImageSent}
              className="text-[var(--text-color)] text-2xl mx-2 cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageBottom;
