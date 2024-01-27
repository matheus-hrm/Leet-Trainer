import { ModeToggle } from "./components/mode-toggle";


export function App() {
  return (
    <div className="">
      <div className="flex-col w-screen h-screen pt-4 ">
        <div className="mx-5 flex justify-end">
          <ModeToggle  />
        </div>
        <div className="flex-row text-center justify-center space-y-6">
          <h1 className="text-2xl">Leet Trainer</h1>
          <h1>Practice code with a.i assistance</h1>
        </div>
      </div>    
    </div>
  )
}


