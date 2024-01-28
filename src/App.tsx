import { Link } from "react-router-dom";

import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";

 
export const BASE_URL = "https://localhost:3000"


export default function App() {

  
  return (
    <div className="h-screen w-screen">
      <div className="flex-col w-full h-full pt-4 ">
        <div className="mx-5 flex justify-end">
          <ModeToggle  />
        </div>
        <div className="h-2/6">
        </div>
        <div className="space-y-6 flex-col flex justify-center items-center ">
          <h1 className="text-6xl text-center space-y-6">Leet Trainer</h1>
          <h2 className="text-center space-y-5">Practice code with a.i assistance</h2>
          <Button className=" items-center justify-center"  size="lg">
            <Link to="/code" className="">
              <p>Start</p>
            </Link>
          </Button>
        </div>
        
             
      </div>    
    </div>
  )
}


