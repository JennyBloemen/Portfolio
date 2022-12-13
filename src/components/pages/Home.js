import React, { Component } from "react";
import Carosel from "../Carosel";

class Home extends Component {
  render() {
    return <h1>Need to build home page</h1>;
  }
}

function Home() {
  const [tools] = useState([
    {
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
    },
    {
      img: require(`../../assets/images/FitCommit-Homepage-Screenshot.png`),
    },
  ]);
  return (
    <div>
      <div>
        <h1>Header</h1>
      </div>
      <div>
        {/* flex here */}
        {projects.map((data, idx) => (
          <Project data={data} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Home;
