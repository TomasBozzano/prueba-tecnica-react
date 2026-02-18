import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL

export const getJobs = async () => {
    try {
        const response = await fetch(`${API_URL}/api/jobs/get-list`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        if (response.status !== 200) {
            toast.error(data.message)
        }

        return data;
    } catch (error) {
        toast.error(error.message)
    }
}

export const applyForJob = async (PersonJobApply) => {
    const {uuid, jobId, candidateId, repoUrl} = PersonJobApply

    try {
        const response = await fetch(`${API_URL}/api/jobs/apply`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uuid,
                jobId,
                candidateId,
                repoUrl
            })
        });
        const data = await response.json();
        
        if (response.status !== 200) {
            toast.error(data.message)
        }
        return data;
    } catch (error) {
        toast.error(error.message)
    }
}