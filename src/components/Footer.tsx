import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <>
      <div className="pt-20 pb-10">
        <Separator className="w-1/2 mx-auto my-4" />
        <p className="text-center text-muted-foreground">
          Created by{" "}
          <Link
            target="blank"
            className=" hover:text-primary"
            to="https://github.com/matheus-hrm"
          >
            matheus-hrm
          </Link>
        </p>
      </div>
    </>
  );
}
