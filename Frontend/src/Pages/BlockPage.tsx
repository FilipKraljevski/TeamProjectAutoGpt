import { useEffect, useState } from "react"
import { getBlocksApi } from "../Services/BlockService";
import { Block } from "../Models/Block";

const BlockPage = () => {
    const [blocks, setBlocks] = useState<Block[]>([]);
    const [selectedBlock, setSelectedBlock] = useState("")

    useEffect(() => {
        fetchBlocks()
    }, [])

    const fetchBlocks = async () => {
        const data: Block[] = await getBlocksApi();
        setBlocks(data)
    };

    const handleBlockChange = (e: any) => {
        const block = e.value;
        setSelectedBlock(block);
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
    
        </div>
      );
}

export default BlockPage