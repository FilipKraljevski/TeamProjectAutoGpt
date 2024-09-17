import axios from "axios"
import { api, autogpt } from "./Constants"
import { Block } from "../Models/Block"

export const getBlocksApi = async() => {
    const response = await axios.get<Block[]>(api + "agptBlock/all");
    return response.data
}

export const getOutputFromAutoGpt = async(id: string, formData: any) => {
    const response = await axios.post(autogpt + "blocks/"+ id + "/execute", {
        ...formData
    })
    return response.data
}

export const saveResultToBackend = async(id: string, inputData: any, outputData: any) => {
    const date = new Date().toUTCString();
    console.log(date);
    const response = await axios.post(api + "execution/agptBlock/"+ id + "/save", {
        input: inputData,
        output: outputData,
        dateTime: date
    })
    return response.data
}