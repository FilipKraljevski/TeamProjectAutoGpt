export type Execution = {
    id: number,
    agptBlockResponse: {
        id: string,
        name: string
    },
    input: string,
    output: string,
    dateTime: string
}