import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Torus from "@toruslabs/torus-embed";
import Web3 from "web3";
import "./home.styles.css";

const Home = () => {
  const navigate = useNavigate();

  const onClickLogin = async () => {
    const torus: any = new Torus({});
    await torus.init({
      enableLogging: false,
    });
    await torus.login();

    const web3 = new Web3(torus.provider);
    const address = (await web3.eth.getAccounts())[0];
    navigate(`/dashboard/${address}`);
  };
  return (
    <div className="home-container">
      <Button onClick={() => onClickLogin()}>Torus Wallet</Button>
    </div>
  );
};

export default Home;
