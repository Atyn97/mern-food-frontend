import appDownload from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import HomeCategory from "@/components/CuisineCard";
import { useState } from "react";

const HomePage = () => {
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-40 px-8 bg-white rounded-lg shadow-md py-8 flex flex-col md:gap-5 gap-2 text-center -mt-40">
        <h1 className="md:text-5xl text-3xl font-bold tracking-tight text-green-600">
          Order delivery near you
        </h1>

        <span className="md:text-xl text-sm">
          Where should we deliver your food today?
        </span>
        <SearchBar
          onSubmit={handleSearchSubmit}
          placeHolder="Search by City or Town [ Leipzig ]"
        />
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold text-3xl">Food for everyone!</h1>
          <HomeCategory
            isExpanded={isExpanded}
            onExpandedClick={() =>
              setIsExpanded((prevIsExpended) => !prevIsExpended)
            }
          />
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="font-bold text-3xl">Why SpeedyFood?</h1>

          <ul className="space-y-2">
            <li>
              ✓ <b>Quickest</b> - SpeedyEats provides the fastest food delivery
              in the market.
            </li>
            <li>
              ✓ <b>Easiest</b> - Now get your food is just a few clicks or taps
              away. Order online or download our Grab super app for a faster and
              more rewarding experience.
            </li>
            <li>
              ✓ <b>Pay fast</b> - It’s easy to get your meals delivered to you.
              It’s even easier to pay for it with SpeedyPay.
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-bold text-3xl text-center">
            Order takeaway even faster!
          </h1>
          <span className="flex text-center">
            Download the SpeedyEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownload} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
