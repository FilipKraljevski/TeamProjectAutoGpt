import { useState } from "react"
import { getInputFields } from "../Utils/Data"
import { getOutputFromAutoGpt } from "../Services/BlockService"

type Props = {
    blockId: string
}

type RadioValues = {
    true: true,
    false: false
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
        setShowOutput(false)
        setOutput(null)
        console.log(formState)
    }

    const handleSubmit = async(e: any) => {
        //console.log(formState)
        const data = await getOutputFromAutoGpt(blockId, formState)
        setShowOutput(true)
        setOutput(data)
        setFormState([])
    }

    return <>
        <form>
            {Object.entries(formInputs).map(([key, value]) => (
                <div key={key}>
                    <label>{value.title}:</label>
                    {value.type === "boolean" ? ( 
                        <div>
                            <input type="radio" name={key} onChange={handleChange} value="TrueBoolean" /> True
                            <input type="radio" name={key} onChange={handleChange} value="FalseBoolean" /> False
                        </div>
                    ) : value.enum ? (
                        <select name={key} onChange={handleChange}>
                            <option value="">--Select--</option>
                            {value.enum.map((option: string) => (
                                <option value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        ) : value.type === "number" ? (
                            <input type="number" name={key} onChange={handleChange} placeholder={value.placeholder} />
                        ) : (
                            <input type="text" name={key} onChange={handleChange} placeholder={value.placeholder} />
                        )
                    }
                    <p>{value.description}</p>
                </div>
            ))}
        </form>
        <button onClick={handleSubmit}>Submit</button>
        {showOutput &&
            <div>
                <pre>{JSON.stringify(output, null, 2)}</pre>
            </div>
        }
        </>
}

export default Form