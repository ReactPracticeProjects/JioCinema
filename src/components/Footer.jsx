import BottomFooter from "./Sections/BottomFooter";
import TopFooter from "./Sections/TopFooter";

function Footer() {
  return (
    <>
      <div className="absolute bottom-0 left-0 w-full">
        {/* Top Footer Section */}
        <TopFooter />
        {/* Bottom Foote Section */}
        <BottomFooter />
      </div>
    </>
  );
}

export default Footer;
