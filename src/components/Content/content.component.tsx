import DashTitle from "../Title/title.component";
import TrendingCardList from "../TrendingCardList/TrendingCardList.Component";
import PriceGraph from "../PriceGraph/PriceGraph.component";
import "./content.styles.css";
import { useParams } from "react-router-dom";

const Content = () => {
  const { address } = useParams();
  if (!address) return <div>Loading...</div>;
  return (
    <div className="col-10 content">
      <div className="row dash-heading">
        <DashTitle title="Dashboard" address={address} />
      </div>
      <TrendingCardList />
      <div className="row dash-graph">
        <PriceGraph />
        <div className="col-4 empty-box-container">
          <div className="empty-box"></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
