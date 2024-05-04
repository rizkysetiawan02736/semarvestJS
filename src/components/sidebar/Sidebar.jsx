import "./sidebar.scss";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FaceIcon from '@mui/icons-material/Face';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const Sidebar = () => {
  return (
    <div className="sidebar">
  <div className="top">
    <Link to="/">
      <span className="logo">Store</span>
    </Link>
  </div>
  <hr />
  <div className="center">
    <ul>
      <p className="title">MAIN</p>
      <li>
        <HomeIcon className="icon"/>
        <span>Dashboard</span>
      </li>
      <p className="title">LIST</p>
      <Link to="/users">
        <li>
        <PersonIcon className="icon"/>
          <span>Users</span>
        </li>
      </Link>
      <Link to="/products">
        <li>
          <AllInboxIcon className="icon"/>  
          <span>Products</span>
        </li>
      </Link>
      <li>
        <BorderColorIcon className="icon" />
        <span>Orders</span>
      </li>
      <p className="title">USER</p>
      <li>
        <FaceIcon className="icon"/>
        <span>Profile</span>
      </li>
      <li>
        < MeetingRoomIcon className="icon"/>
        <span>Logout</span>
      </li>
    </ul>
  </div>
  <div className="bottom">
    <div className="colorOption"></div>
    <div className="colorOption"></div>
  </div>
</div>
  );
};

export default Sidebar;