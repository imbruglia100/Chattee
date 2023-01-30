import './App.css';
import NavBar from './components/Navbar';
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatBox from "./pages/Chatbox";
import Welcome from "./pages/Welcome";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App font-rubik">
      <NavBar />
      {user ? <ChatBox/> : <Welcome />}
    </div>
  );
}

export default App;
