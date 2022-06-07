import "./title.styles.css";

interface DashTitleProps {
  title: string;
  address: string;
}

const formatAddress = (address: string) => {
  return `${address.substring(0, 6)}.....${address.substring(
    address.length - 3,
    address.length
  )}`;
};
const DashTitle = ({ title, address }: DashTitleProps) => {
  return (
    <div className="dash-title-container">
      <div>
        <p className="dash-title-heading">{title}</p>
      </div>
      <div>
        <p className="dash-title-address">{formatAddress(address)}</p>
      </div>
    </div>
  );
};

export default DashTitle;
