import "./etalase.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Tabelbaru from "../../components/tabelbaru/Tabelbaru";

const Etalase = () => {
  return (
    <div className="etalase">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Tabelbaru/>
      </div>
    </div>
  );
};

export default Etalase;