import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
// /import ChatProvider from "./Context/ChatProvider";

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
