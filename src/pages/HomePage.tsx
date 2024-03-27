import cook from "../assets/cook.jpg";
import restaurant from "../assets/restaurant.jpg";
import rider from "../assets/delivery-guy.jpg";
import appDownload from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-40">
        <h1 className="text-5xl font-bold tracking-tight text-green-600">
          Order delivery near you
        </h1>

        <span className="text-xl">
          Where should we deliver your food today?
        </span>
        <SearchBar
          onSubmit={handleSearchSubmit}
          placeHolder="Search by City or Town"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <img
            src={cook}
            className="w-full max-h-[250px] object-cover rounded-md cursor-pointer hover:opacity-80"
          />
          <span className="cursor-pointer hover:underline">
            Create a business account
          </span>
        </div>
        <div>
          <img
            src={restaurant}
            className="w-full max-h-[250px] object-cover rounded-md cursor-pointer hover:opacity-80"
          />
          <span className="cursor-pointer hover:underline">
            Add your restaurant
          </span>
        </div>
        <div>
          <img
            src={rider}
            className="w-full max-h-[250px] object-cover rounded-md cursor-pointer hover:opacity-80"
          />
          <span className="cursor-pointer hover:underline">
            Register as a courier
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-bold text-3xl text-center">
          Order takeaway even faster!
        </h1>
        <span className="flex text-center">
          Download the MernFood App for faster ordering and personalised
          recommendations
        </span>
        <img src={appDownload} />
      </div>
    </div>
  );
};

export default HomePage;
