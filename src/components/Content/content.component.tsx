import DashTitle from "../Title/title.component";
import TrendingCardList from "../TrendingCardList/TrendingCardList.Component";
import PriceGraph from "../PriceGraph/PriceGraph.component";
import "./content.styles.css";

const Content = () => {
  return (
    <div className="col-10 content">
      <div className="row dash-heading">
        <DashTitle
          title="Dashboard"
          address="0x787840758A78Bd9B24C05C4bbB77d59225ab4844"
        />
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
