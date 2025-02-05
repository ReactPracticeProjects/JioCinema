import React from "react";
import SpotLight from "./common/SpotLight";
import spotlightimg from "/spotlight.webp";
import TopPicks from "./common/TopPicks";

function MainSec() {

  const channel=[{
    image: ["https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/nick-1727006404112.jpg","https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/colors-hindirevised-1734374133792.png","https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/mtv-1727006354793.jpg","https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/colors-infinity-1727257439757.jpg","https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/colors-gujarati---1727007509417.jpg","https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/colors-bangla-1727006525266.jpg","https://v3img.voot.com/resizeMedium,w_153,h_153/v3Storage/assets/colors-marathi-1727006494654.jpg",]
  }

  ]

  const data = [
    {
      title: "Top Picks",
      image: [
        "https://v3img.voot.com/resizeMedium,w_200,h_266/v3Storage/assets/3x4-sunil-1733726571742.jpg",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1738652124883.jpg",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1738604163665.jpg",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1738566983882.jpg",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1738500445984.jpg",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1738057976134.jpg",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1737221180383.jpg",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1737220837327.jpg",
      ],
    },
    {
      title: "Must Watch Movies",
      image: [
        "https://v3img.voot.com/resizeMedium,w_200,h_266/v3Storage/assets/3x4-1738500445984.jpg",
        "https://v3img.voot.com/resizeMedium,w_200,h_266/v3Storage/assets/3x4-1738057976134.jpg",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1737220837327.jpg",
        "https://v3img.voot.com/resizeMedium,w_200,h_266/v3Storage/assets/3x4-1728654050753.jpg",
        "https://v3img.voot.com/resizeMedium,w_200,h_266/v3Storage/assets/udaan-1688981859240.jpg",
        "https://v3img.voot.com/resizeMedium,w_200,h_266/v3Storage/assets/ashi-hi-fantasy--marathi--16762799926391727267151674.jpg",
        "https://v3img.voot.com/resizeMedium,w_200,h_266/v3Storage/assets/vikram-vedha-3x4-1724397881704.jpg",
        "https://v3img.voot.com/resizeMedium,w_200,h_266/v3Storage/assets/bloody-daddy-3x4-clean-1687779431652.jpg",
      ],
    },
    {
      title: "Best Of Originals",
      image: [
        "https://v3img.voot.com/resizeMedium,w_200,h_266/v3Storage/assets/3x4-sunil-1733726571742.jpg",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1738652124883.jpg",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1738604163665.jpg",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1738566983882.jpg",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1738500445984.jpg",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1738057976134.jpg",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1737221180383.jpg",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1737220837327.jpg",
      ],
    },
    {
      title: "Peacock's Finest",
      image: [
        "https://v3img.voot.com/resizeMedium,w_200,h_266/v3Storage/assets/3x4-1738500445984.jpg",
        "https://v3img.voot.com/resizeMedium,w_200,h_266/v3Storage/assets/3x4-1738057976134.jpg",
        "https://v3img.voot.com/resizeMedium,w_150,h_200/v3Storage/assets/3x4-1737220837327.jpg",
        "https://v3img.voot.com/resizeMedium,w_200,h_266/v3Storage/assets/3x4-1728654050753.jpg",
        "https://v3img.voot.com/resizeMedium,w_200,h_266/v3Storage/assets/udaan-1688981859240.jpg",
        "https://v3img.voot.com/resizeMedium,w_200,h_266/v3Storage/assets/ashi-hi-fantasy--marathi--16762799926391727267151674.jpg",
        "https://v3img.voot.com/resizeMedium,w_200,h_266/v3Storage/assets/vikram-vedha-3x4-1724397881704.jpg",
        "https://v3img.voot.com/resizeMedium,w_200,h_266/v3Storage/assets/bloody-daddy-3x4-clean-1687779431652.jpg",
      ],
    },
  ];

  return (
    <>
      <TopPicks content={channel} />
      <SpotLight imgsrc={spotlightimg} />
      <TopPicks content={data} />
    </>
  );
}

export default MainSec;
