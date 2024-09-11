import axios from "axios"
import { api } from "./Constants"
import { Execution } from "../Models/Execution"

export const getExecutions = async() => {
    const response = await axios.get<Execution[]>(api + "execution")
    return response.data
}