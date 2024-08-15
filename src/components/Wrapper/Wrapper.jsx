import { Component } from "react";
import Feedback from "../Feedback/Feedback";
import Statistics from "../Statistics/Statistics";

class Wrapper extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateReviews = (e) => {
    const status = e.currentTarget.textContent.toLowerCase();
    const obj = {};
    obj[status] = this.state[status] + 1;
    this.setState(obj);
  };
  render() {
    // this.updateReviews("bad");
    return (
      <div>
        <Feedback cb={this.updateReviews} />
        <Statistics data={this.state} />
      </div>
    );
  }
}

export default Wrapper;
