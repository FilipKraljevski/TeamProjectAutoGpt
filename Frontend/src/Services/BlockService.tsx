import axios from "axios"
import { api } from "./Constants"
import { Block } from "../Models/Block"

export const getBlocksApi = async() => {
    const response = await axios.get<Block[]>(api + "agptBlock/all");
    return response.data
}