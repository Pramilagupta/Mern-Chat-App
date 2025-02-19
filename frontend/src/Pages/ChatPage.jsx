 import ChatProvider from '../Context/ChatProvider';
import  {ChatState}  from '../Context/ChatProvider';
import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/layout';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components//MyChats';
import ChatBox from '../components/ChatBox';

const ChatPage = () => {
  const {user}  = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    
      // <ChatProvider>
        <div style={{width: "100%"}}>
         {user && <SideDrawer/>}

         <Box display="flex" justifyContent='space-between' w="100%" h="91.5vh" p="10px">
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
        </Box>
        </div>
      //  </ChatProvider>
  )
};

export default ChatPage;
