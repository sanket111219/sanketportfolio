import "./App.css";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import Home from "./PortfolioContainer/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Profile from "./PortfolioContainer/Home/Profile/Profile";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />
    </div>
  );
}

export default App;
