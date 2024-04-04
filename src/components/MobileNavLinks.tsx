import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <div className="flex flex-col gap-3">
      <Link to="/order-status" className="font-bold hover:text-green-500">
        Order Status
      </Link>
      <Link to="/manage-restaurant" className="font-bold hover:text-green-500">
        My Restaurant
      </Link>
      <Link
        to="user-profile"
        className="flex bg-white items-center font-bold hover:text-green-500"
      >
        User Profile
      </Link>
      <Button
        className="flex-1 items-center px-3 font-bold hover:bg-gray-600"
        onClick={() => logout()}
      >
        Logout
      </Button>
    </div>
  );
};

export default MobileNavLinks;
