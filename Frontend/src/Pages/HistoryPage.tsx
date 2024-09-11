import React, { useState, useEffect } from 'react';
import { getBlocksApi } from '../Services/BlockService';
import { Block } from '../Models/Block';
import { Execution } from '../Models/Execution';
import { getExecutions } from '../Services/ExecutionService';

const HistoryPage = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [executions, setExecutions] = useState<Execution[]>([]);
  const [filteredExecutions, setFilteredExecutions] = useState<Execution[]>([]);
  const [selectedBlock, setSelectedBlock] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
        const blocks: Block[] = await getBlocksApi()
        setBlocks(blocks)
        const executions: Execution[] = await getExecutions()
        setExecutions(executions)
        setFilteredExecutions(executions)
    };

    fetchData();
  }, []);

  const handleBlockChange = (e: any) => {
    setSelectedBlock(e.target.value);
    filterData(e.target.value, selectedDate);
  };

  const handleDateChange = (e: any) => {
    setSelectedDate(e.target.value);
    filterData(selectedBlock, e.target.value);
  };

  const filterData = (blockName: string, date: string) => {
    let filtered = executions;
    if (blockName) {
      filtered = filtered.filter(e => e.agptBlockResponse.name === blockName);
    }
    if (date) {
      filtered = filtered.filter(e => new Date(e.dateTime).toDateString() === new Date(date).toDateString());
    }
    setFilteredExecutions(filtered);
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="block mb-2 text-lg font-medium text-gray-700">Select Block:</label>
        <select
          value={selectedBlock}
          onChange={handleBlockChange}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">--Select--</option>
          {blocks.map((block) => (
            <option key={block.id} value={block.name}>
              {block.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-lg font-medium text-gray-700">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Block Name</th>
            <th className="px-4 py-2 border-b">Input Params</th>
            <th className="px-4 py-2 border-b">Output Result</th>
            <th className="px-4 py-2 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredExecutions.map((execution) => (
            <tr key={execution.id}>
              <td className="px-4 py-2 border-b">{execution.agptBlockResponse.name}</td>
              <td className="px-4 py-2 border-b">{execution.input}</td>
              <td className="px-4 py-2 border-b">{execution.output}</td>
              <td className="px-4 py-2 border-b">{new Date(execution.dateTime).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryPage;
