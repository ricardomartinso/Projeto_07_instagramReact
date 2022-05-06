import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Corpo from "./Corpo";
import FundoMobile from "./FundoMobile";

function Instagram() {
  return (
    <div class="wrapper">
      <Navbar />
      <Corpo />
      <FundoMobile />
    </div>
  );
}

const element = document.querySelector(".root");
ReactDOM.render(Instagram(), element);
