import Sidenav from "../../components/Sidenav/sidenav.component";
import Content from "../../components/Content/content.component";
import "./dashboard.styles.css";

const Dashboard = () => {
  return (
    <div className="container-fluid dashboard">
      <div className="row">
        <Sidenav />
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
