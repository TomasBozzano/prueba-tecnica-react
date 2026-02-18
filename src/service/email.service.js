import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL


export const getPersonData = async (email) => {
    try {
        const response = await fetch(`${API_URL}/api/candidate/get-by-email?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        if (data.error) {
            toast.error(data.error);
            return { status: '404' };
        }
        
        return data;
    } catch (error) {
        toast.error(error.message);
        return { status: '404' };
    }
}