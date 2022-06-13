import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./sidenav.styles.css";

const Sidenav = () => {
  const { address } = useParams();
  const navigate = useNavigate();
  return (
    <div className="col-2 sidenav">
      <div className="nav-logo-container">
        <h1 className="logo-heading">Logo</h1>
      </div>
      <div className="nav-button-container">
        <Button
          className="nav-button"
          onClick={() => navigate(`/dashboard/${address}`)}
        >
          Dashboard
        </Button>
        <Button className="nav-button" onClick={() => navigate("/")}>
          Home
        </Button>
      </div>
    </div>
  );
};

export default Sidenav;
