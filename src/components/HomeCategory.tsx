import { cuisineImage } from "@/config/restaurant-options-config";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

type Props = {
  isExpanded: boolean;
  onExpandedClick: () => void;
};

const HomeCategory = ({ isExpanded, onExpandedClick }: Props) => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center ">
        {cuisineImage
          .slice(0, isExpanded ? cuisineImage.length : 8)
          .map((cuisine) => (
            <Link to="/search/" className="font-bold hover:text-green-500">
              <div className="flex flex-col gap-2">
                <img
                  src={cuisine.image}
                  className="h-[200px] w-[350px] object-cover rounded-md cursor-pointer hover:opacity-80"
                />
                <span className="cursor-pointer font-bold">
                  {cuisine.cuisine}
                </span>
              </div>
            </Link>
          ))}
      </div>
      <Button variant={"ghost"} onClick={onExpandedClick}>
        {" "}
        {isExpanded ? (
          <span className="flex flex-row items-center">View Less</span>
        ) : (
          <span className="flex flex-row items-center">View More</span>
        )}
      </Button>
    </div>
  );
};

export default HomeCategory;
