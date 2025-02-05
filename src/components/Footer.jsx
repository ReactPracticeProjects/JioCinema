import BottomFooter from "./Sections/BottomFooter";
import TopFooter from "./Sections/TopFooter";

function Footer() {
  return (
    <>
      <div className=" w-full">
        {/* Top Footer Section */}
        <TopFooter />
        {/* Bottom Foote Section */}
        <BottomFooter />
      </div>
    </>
  );
}

export default Footer;
