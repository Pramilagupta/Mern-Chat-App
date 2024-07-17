import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);
  const [notification, setNotification] = useState([]);

  const history = useHistory();

  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //   setUser(userInfo);

  //   if(!userInfo){
  //     history.push("/");
  //   }
  //   console.log(userInfo);
  // }, [history]);

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    // console.log(userInfo.email);
    // console.log(userInfo.name);
    if (userInfo) {
      try {
        const parsedUserInfo = JSON.parse(userInfo);
        setUser(parsedUserInfo);
      } catch (error) {
        console.error("Error parsing userInfo:", error);
        // setUser(null);
      }
    } else {
      console.log("No userInfo found in localStorage");
      history.push("/");
    }
    // console.log(user)
    console.log(userInfo);
  }, [history]);

  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        selectedChat,
        setSelectedChat,
        chats,
        setChats,
        notification,
        setNotification,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
