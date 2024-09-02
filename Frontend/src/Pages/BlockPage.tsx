import { useEffect, useState } from "react"
import { getBlocksApi } from "../Services/BlockService";
import { Block } from "../Models/Block";
import Form from "../Components/Form";

const BlockPage = () => {
    const [blocks, setBlocks] = useState<Block[]>([]);
    const [selectedBlock, setSelectedBlock] = useState("")
    const [isInputFormReady, setIsInputFormReady] = useState(false)

    useEffect(() => {
        fetchBlocks()
    }, [])

    const fetchBlocks = async () => {
        const data: Block[] = await getBlocksApi();
        setBlocks(data)
    };

    const handleBlockChange = (e: any) => {
        const block = e.target.value;
        setSelectedBlock(block);
        if(block){
          setIsInputFormReady(true)
        }else{
          setIsInputFormReady(false)
        }
    }

    return (
        <div className="p-4">
          <label className="block mb-2 text-lg font-medium text-gray-700">Select Block:</label>
          <select
            value={selectedBlock}
            onChange={handleBlockChange}
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">--Select--</option>
            {blocks.map((block) => (
                <option key={block.id} value={block.id}>
                    {block.name}
                </option>
            ))}
          </select>
          {isInputFormReady && <Form blockId={selectedBlock}/>}
        </div>
      );
}

export default BlockPage