import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./sidenav.styles.css";

const Sidenav = () => {
  const navigate = useNavigate();
  return (
    <div className="col-2 sidenav">
      <div className="nav-logo-container">
        <h1 className="logo-heading">Logo</h1>
      </div>
      <div className="nav-button-container">
        <Button className="nav-button" onClick={() => navigate("/dashboard")}>
          Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Sidenav;
