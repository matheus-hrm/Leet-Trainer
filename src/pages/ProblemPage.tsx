import HomeToggle from "@/components/home-toggle";
import QuestionsPage from "./Questions";
import { ModeToggle } from "@/components/mode-toggle";
import CodeEditor from "@/components/CodeEditor";
import Footer from "@/components/Footer";
import GPTBox from "@/components/GPTBox";

export default function ProblemsPage() {
  return (
    <>
      <div className="flex absolute p-4 gap-x-3">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">Leet Trainer</h1>
        <HomeToggle />
        <ModeToggle />
      </div>
      <QuestionsPage />
      <div className="flex flex-row justify-center items-center gap-x-8 p-8">
        <CodeEditor />
        <GPTBox />
      </div>
      <Footer />
    </>
  );
}
