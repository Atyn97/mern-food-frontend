import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import LoadingButton from "./LoadingButton";

const CheckoutButton = () => {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button onClick={onLogin} className="bg-green-500 w-full">
        Log in to check out
      </Button>
    );
  }
  if (isAuthLoading) {
    return <LoadingButton />;
  }

  return (
    <Button onClick={onLogin} className="bg-green-500 w-full">
      Go to check out
    </Button>
  );
};

export default CheckoutButton;
