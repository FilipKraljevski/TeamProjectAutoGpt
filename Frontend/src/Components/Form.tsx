import { useState } from "react"
import { getInputFields } from "../Utils/Data"
import { getOutputFromAutoGpt, saveResultToBackend } from "../Services/BlockService"

type Props = {
    blockId: string
}

const Form: React.FC<Props> = ({blockId}) => {
    const formInputs = getInputFields(blockId)?? []
    const [formState, setFormState] = useState({})
    const [showOutput, setShowOutput] = useState(false)
    const [output, setOutput] = useState(null)
    
    const handleChange = (e: any) => {
        const { name, value, type } = e.target;
        let booleanValue = null;
        let numberValue = null;
        if(value === "TrueBoolean"){
            booleanValue = true;
        }else if(value === "FalseBoolean"){
            booleanValue = false;
        }
        if(type === "number"){
            numberValue = value * 1.0
        }
        if(booleanValue != null){
            setFormState({...formState, [name]: booleanValue});
        }
        else if(numberValue != null){
            setFormState({...formState, [name]: numberValue});
        }
        else{
            setFormState({...formState, [name]: value});
        }
        clearOutput()
    }

    const handleSubmit = async(e: any) => {
        const data = await getOutputFromAutoGpt(blockId, formState)
        setShowOutput(true)
        setOutput(data)
        saveResultToBackend(blockId, JSON.stringify(formState, null, 2), JSON.stringify(data, null, 2))
    }

    const clearOutput = () => {
        setShowOutput(false)
        setOutput(null)
    }

    return (
        <>
          <form className="space-y-4">
            {Object.entries(formInputs).map(([key, value]) => (
              <div key={key} className="flex flex-col space-y-2">
                <label className="font-semibold">{value.title}:</label>
                {value.type === "boolean" ? (
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={key}
                        onChange={handleChange}
                        value="TrueBoolean"
                        className="form-radio"
                      />
                      <span>True</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={key}
                        onChange={handleChange}
                        value="FalseBoolean"
                        className="form-radio"
                      />
                      <span>False</span>
                    </label>
                  </div>
                ) : value.enum ? (
                  <select
                    name={key}
                    onChange={handleChange}
                    className="form-select mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">--Select--</option>
                    {value.enum.map((option: string) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : value.type === "number" ? (
                  <input
                    type="number"
                    name={key}
                    onChange={handleChange}
                    placeholder={value.placeholder}
                    className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                ) : (
                  <input
                    type="text"
                    name={key}
                    onChange={handleChange}
                    placeholder={value.placeholder}
                    className="form-input mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                )}
                <p className="text-sm text-gray-500">{value.description}</p>
              </div>
            ))}
          </form>
          <button
            onClick={handleSubmit}
            className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
          {showOutput && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-sm">
              <pre>{JSON.stringify(output, null, 2)}</pre>
              <button
                onClick={clearOutput}
                className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Clear Output
            </button>
            </div>
          )}
        </>
      );
}

export default Form