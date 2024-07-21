import { useSelector } from "react-redux";
import BottomBar from "./components/BottomBar";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Detail from "./components/Detail";

function App() {
  const showDetail = useSelector((store) => store.player.showDetail);
  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Content />
        {showDetail && <Detail />}
      </div>
      <BottomBar />
    </>
  );
}

export default App;
