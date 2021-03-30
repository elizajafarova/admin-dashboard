import "./Main.css";
import Charts from "../charts/Charts";
import hello from "../../assets/hello.png";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
         <img src={hello} alt="helo" />
          <div className="main__greeting">
            <h1>Hello Codersbite</h1>
            <p>Welcome your Admin dashboard</p>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <i className="fa fa-user-o fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="test-primary-p">Number of Subscribes</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Times of Watching</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-video-camera fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Video</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-thumbs-up fa-2x text-green"></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Likes</p>
              <span className="font-bold text-title">657</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p> Cupertino, California, USA</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            <Charts />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p> Cupertino, California, USA</p>
              </div>
              <i className="fa fa-use"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Income</h1>
                <p>$70.000</p>
              </div>
              <div className="card2">
                <h1>Sales</h1>
                <p>$124.000</p>
              </div>
              <div className="card3">
                <h1>Users</h1>
                <p>$15.000</p>
              </div>
              <div className="card4">
                <h1>Orders</h1>
                <p>$10.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
