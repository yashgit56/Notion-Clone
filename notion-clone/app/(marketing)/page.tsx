import { Button } from "@/components/ui/button";
import Heading from "./_components/heading";
import Heroes from "./_components/heroes";
import { Footer } from "./_components/footer";
import Cards from "./_components/notionCards";

const MarketingPage = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col items-center justify-center
      md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
      </div>
      {/* <div className="flex items-center justify-center text-lg font-bold">
        Every Team, Side By Side 
      </div> */}
      {/* <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
        <Cards image="m1.png" content="Engineering"/>
        <Cards image="m2.png" content="Design"/>
        <Cards image="m3.png" content="Product"/>
        <Cards image="m4.png" content="Marketing"/>
        <Cards image="m5.png" content="Operations"/>
        <Cards image="m6.png" content="HR"/>
      </div> */}

      <Footer />
    </div>
  );
}

export default MarketingPage;
