import { Home } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const HomeToggle = () => {
  return (
    <Button variant="outline" size="icon">
      <Link to="/">
        <Home className="dark:text-white text-black size-5.5 p-0 text-sm rounded-md" />
      </Link>
    </Button>
  );
};

export default HomeToggle;
