import { Question } from "@/pages/Questions";
import axios from "axios"

const URL = "/questions"

export const getQuestions = async (): Promise<Question[]> => {
    const res = await axios.get(URL);
    return res.data;   
}