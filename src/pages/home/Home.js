import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <Featured />
      </div>
    </div>
  );
};

export default Home;
