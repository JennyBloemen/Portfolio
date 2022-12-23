import React from "react";
import image from "../../assets/images/IMG_4846.png";
// import jenb from "../../assets/Jenny.jpg";
export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "98.9vw",
        }}
      >
        {/* <img src={jenb} class="img-thumbnail" alt="Jenny Headshot"></img> */}
        <div>Text</div>
      </div>
    </div>
  );
}
