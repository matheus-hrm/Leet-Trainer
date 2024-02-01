import { Question } from "@/code/Questions";
import axios from "axios"

const URL = "http://localhost:3000/questions"

export const getQuestions = async (): Promise<Question[]> => {
    const res = await axios.get(URL);
    return res.data;
}