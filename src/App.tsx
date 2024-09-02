// import { Button } from "@nextui-org/react"
import './App.css';
import Divbar from "./components/sidebar";
import CustomTable from './components/Tables';
import Topbar from './components/Topbar.tsx';

function App() {
  return (
    <div className="h-screen">
      <Topbar />
      <CustomTable />
    </div>
  );
}

export default App;
