import { useState } from "react"
import { toast } from "react-toastify"
import { usePersonStore } from "../store/storedPerson"
import { emailValidate } from "../utils/utils"
import { Button } from "./Button"

export const InputSearch = ({ OnValue, OnChange, OnClick }) => {

    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)
    const {setUuid, setCandidateId } = usePersonStore()
    const [error, setError] = useState(false)

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true)

        if (!emailValidate(OnValue)) {
            setLoading(false)
            setError(true)
            setResult(null)
            return toast.error('Please enter a valid email address.')
        }

        setError(false)
        
        const dataResult = await OnClick()

        if (!dataResult || dataResult.status === '404') {
            setLoading(false)
            setResult(null)
            return;
        }

        setResult(dataResult)
        setUuid(dataResult.uuid)
        setCandidateId(dataResult.candidateId)

        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleClick(e);
        }
    }

    return (
        <>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">Search your data</label>
            <input type="text" placeholder="Enter your email address..." className={`w-full p-2 border rounded shadow-lg ${error ? 'border-red-500' : ''}`} onChange={OnChange} value={OnValue} onKeyDown={handleKeyDown}
            disabled={loading}/>
            {error && <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>}
            <div className="flex justify-end p-2">
                <Button onClick={handleClick} disabled={loading} children={loading ? 'Loading...' : 'Search'} />
            </div>
            {result != null && !loading && (
                <div key={result?.id} className="py-2">
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                        {JSON.stringify(result, null, 2)}
                    </pre>
                </div>
            )}
        </>
    )
}
