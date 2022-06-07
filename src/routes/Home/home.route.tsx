import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./home.styles.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <Button onClick={() => navigate("/dashboard")}>Torus Wallet</Button>
    </div>
  );
};

export default Home;
