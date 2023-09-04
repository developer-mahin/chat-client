import { useSelector } from "react-redux";
import "./style.css";


const MessageContent = () => {
  const { data } = useSelector((state) => state.auth);
  return (
    <div className="relative w-full">
      <div className="mt-10">
        <div className="flex items-center justify-center">
          <img
            src={`http://localhost:5000/public/images/users/${data.image}`}
            alt=""
            className="w-[70px] h-[70px] rounded-full object-cover"
          />
        </div>
        <div className="text-center mt-1">
          <p className="font-bold text-white capitalize">{data.name}</p>
          <p className=" text-white capitalize">{data.name} is connected</p>
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
          <div className="my__message">
            <div className="my__image__message">
              <div className="my__image">
                <img
                  src={`http://localhost:5000/public/images/users/${data.image}`}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
              </div>
              <div className="my__text">
                <div className="message__text">
                  <p>How are you</p>
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
              <div className="fd__text">
                <div className="message__text">
                  <p>I am fine</p>
                </div>
                <div className="fd__time">2 September 2023</div>
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
              <div className="fd__text">
                <div className="message__text">
                  <p>I am fine</p>
                </div>
                <div className="fd__time">2 September 2023</div>
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
              <div className="fd__text">
                <div className="message__text">
                  <p>I am fine</p>
                </div>
                <div className="fd__time">2 September 2023</div>
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
              <div className="fd__text">
                <div className="message__text">
                  <p>I am fine</p>
                </div>
                <div className="fd__time">2 September 2023</div>
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
              <div className="fd__text">
                <div className="message__text">
                  <p>I am fine</p>
                </div>
                <div className="fd__time">2 September 2023</div>
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
              <div className="fd__text">
                <div className="message__text">
                  <p>I am fine</p>
                </div>
                <div className="fd__time">2 September 2023</div>
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
              <div className="fd__text">
                <div className="message__text">
                  <p>I am fine</p>
                </div>
                <div className="fd__time">2 September 2023</div>
              </div>
            </div>
          </div>
          <div className="my__message">
            <div className="my__image__message">
              <div className="my__image">
                <img
                  src={`http://localhost:5000/public/images/users/${data.image}`}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
              </div>
              <div className="my__text">
                <div className="message__text">
                  <p>How are you</p>
                </div>
                <div className="my__time">2 September 2023</div>
              </div>
            </div>
          </div>
          <div className="my__message">
            <div className="my__image__message">
              <div className="my__image">
                <img
                  src={`http://localhost:5000/public/images/users/${data.image}`}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
              </div>
              <div className="my__text">
                <div className="message__text">
                  <p>How are you</p>
                </div>
                <div className="my__time">2 September 2023</div>
              </div>
            </div>
          </div>
          <div className="my__message">
            <div className="my__image__message">
              <div className="my__image">
                <img
                  src={`http://localhost:5000/public/images/users/${data.image}`}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
              </div>
              <div className="my__text">
                <div className="message__text">
                  <p>How are you</p>
                </div>
                <div className="my__time">2 September 2023</div>
              </div>
            </div>
          </div>
          <div className="my__message">
            <div className="my__image__message">
              <div className="my__image">
                <img
                  src={`http://localhost:5000/public/images/users/${data.image}`}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
              </div>
              <div className="my__text">
                <div className="message__text">
                  {/* <p>How are you</p> */}
                  <img
                    src={`http://localhost:5000/public/images/users/${data.image}`}
                    alt=""
                  />
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
              <div className="fd__text">
                <div className="message__text">
                  <p>I am fine</p>
                </div>
                <div className="fd__time">2 September 2023</div>
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
              <div className="fd__text">
                <div className="message__text">
                  <img
                    src={`http://localhost:5000/public/images/users/${data.image}`}
                    alt=""
                  />
                </div>
                <div className="fd__time">2 September 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageContent;
