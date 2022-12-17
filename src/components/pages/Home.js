import React from "react";
import image from "../../assets/images/IMG_4846.png";

export default function Home() {
  return (
    <div>
      {/* <div>Text</div> */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "9vw",
        }}
      >
        Text Goes Here
      </div>
    </div>
  );
}
