import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
// /import ChatProvider from "./Context/ChatProvider";

import axios from "axios";
import { VITE_BACKEND_API_URL } from "./constants/api_constants";
axios.defaults.baseURL = VITE_BACKEND_API_URL;


function App() {

  return (
    <div className="App">
      {/* <Route path="/" component={Homepage} />
      <Route path="/chats" component={ChatPage} /> */}
      {/* <Homepage/> */}
      <BrowserRouter >
        <Switch>
        <Route path="/" exact ><Homepage /></Route>
      <Route path="/chats"  ><ChatPage /></Route>
      </Switch>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
