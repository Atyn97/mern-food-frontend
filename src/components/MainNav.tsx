import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <Link to="/order-status" className="font-bold hover:text-green-500">
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          className="flex-1 font-bold bg-green-500 hover:bg-green-400"
          onClick={async () => await loginWithRedirect()}
        >
          Login/Sign Up
        </Button>
      )}
    </span>
  );
};

export default MainNav;
