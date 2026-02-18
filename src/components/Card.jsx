export const Card = ({id, title, OnValue, OnClick, OnChange, error}) => {

    return (
        <>
            <div className="w-full rounded overflow-hidden shadow-lg bg-white mb-4">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">GitHub URL:</label>
                    <input type="text" className={`w-full p-2 border rounded shadow-lg ${error ? 'border-red-500' : ''}`}
                        value={OnValue}
                        onChange={OnChange}
                        placeholder="Enter your project Github" />
                    {error && <p className="text-red-500 text-sm mt-1">Please enter your project GitHub URL.</p>}
                </div>
                <div className="flex justify-end px-6 py-4">
                    <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={OnClick}
                    >Apply</button>
                </div>
            </div>
        </>
    )
}
