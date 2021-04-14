import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="39cba861-c749-45b1-96fb-fea4ef1980c2"
      userName="Anna"
      userSecret="wxcvbn"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
};

export default App;
