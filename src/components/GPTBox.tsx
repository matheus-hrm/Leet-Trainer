import { useState } from "react";
import GPTicon from "./GPTicon";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { LucideArrowUpFromLine as ArrowIcon } from "lucide-react";

export default function GPTBox() {
  
  const [answer,] = useState("Aguardando resposta")
  
  return (
    <div className="flex flex-col w-2/5 h-full border-primary border-2 rounded-md ">
      <div className="flex flex-row items-center">
        <Button variant="outline" size="icon" className="dark:bg-stone-500 m-3">
          <GPTicon />
        </Button>
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
          GPT-3
        </h1>
      </div>
      <div className="flex justify-center p-2">
        <Separator className="w-3/4 justify-center" />
      </div>
      <ScrollArea className="w-1/2 h-1/2 m-4 p-4 rounded-sm border border-dark-foreground">
        <div>
          <p className="leading-7 [&:not(:first-child)]:mt-6 ">{answer}</p>
        </div>
      </ScrollArea>
      <div className="flex justify-center p-2">
        <Separator className="w-3/4 justify-center" />
      </div>
      <div className="flex justify-center p-2">
        <Button variant="default" className=" w-1/5 gap-2">
          <p className="dark:text-white text-black">Submit Code</p>
          <ArrowIcon className="dark:text-white text-black" />
        </Button>
      </div>
    </div>
  );
}
