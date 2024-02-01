import CodeEditor from "../components/CodeEditor";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Separator } from "../components/ui/separator";
import { ModeToggle } from "../components/mode-toggle";
import { getQuestions } from "@/api/questions";
import { useQuery } from "@tanstack/react-query";

export interface Question {
  id: number;
  title: string;
  description: string;
}
[];

export default function Questions() {
  const [difficulty, setDifficulty] = useState("Easy");
  const [selectedQuestion, setSelectedQuestion] = useState({} as Question);	
  const [questions, setQuestions] = useState({} as Question[]);

  const { data, isSuccess } = useQuery<Question[]>({
    queryKey: ["questions"],
    queryFn: getQuestions,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setQuestions(data);
    }
  }, [isSuccess, data]);

  const filteredQuestions = (data || []).filter((question) => {
    if (difficulty === "Easy") {
      return question.id < 6;
    } else if (difficulty === "Medium") {
      return question.id >= 6 && question.id < 11;
    } else {
      return question.id >= 11;
    }
  });

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex justify-end m-4 mx-8">
        <ModeToggle />
      </div>
      <h1 className="text-4xl text-center">Code Editor</h1>
      <Separator className="w-1/2 mx-auto my-4" />
      <div className="flex flex-row justify-center items-center space-x-8 mt-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="">Select a Difficulty</h1>
          <Select onValueChange={(difficulty) => setDifficulty(difficulty)}>
            <SelectTrigger className="mx-auto my-4 w-[180px]">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="">Select a Problem</h1>
          <Select onValueChange={(title) => {
                  const selected = filteredQuestions.find(question => question.title === title);
                  setSelectedQuestion(selected)}} 
          >
            <SelectTrigger className="mx-auto my-4 w-[180px]">
              <SelectValue placeholder="Problems" />
            </SelectTrigger>
            <SelectContent>
              {data &&
                filteredQuestions.map((question) => {
                  return (
                    <SelectItem value={question.title}>
                      {question.id} - {question.title}
                    </SelectItem>
                  );
                })}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-1/5 ">
        <div className="flex-col w-3/4 justify-start items-center rounded  border-zinc-800 border bg-stone-200 dark:bg-neutral-900">
          {selectedQuestion && selectedQuestion.title && 
            (
                <div className="flex flex-col gap-4 p-4">
                  <h1 className="px-8 pt-8 pb-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{`Problem ${
                    selectedQuestion.id
                  }: ${selectedQuestion.title}`}</h1>
                  <Separator className=" ml-6 w-3/4" />
                  <div className="flex flex-col ml-14 mt-4">
                    <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                      Difficulty: {difficulty}
                    </h1>
                  </div>
                  <p className="leading-7  ml-8 px-6 py-2 pb-8">
                    {selectedQuestion.description}
                  </p>
                </div>
            )}
        </div>
      </div>
      <CodeEditor />
      <div className="mt-10"></div>
    </div>
  );
}
