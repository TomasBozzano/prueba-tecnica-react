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
    const {uuid, jobId, candidateId, repoUrl, applicationId} = PersonJobApply

    const payload = {
        uuid: String(uuid),
        jobId: String(jobId),
        candidateId: String(candidateId),
        applicationId: String(applicationId),
        repoUrl: String(repoUrl)
        
    }

    try {
        const response = await fetch(`${API_URL}/api/candidate/apply-to-job`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();

        if (response.status !== 200 && response.status !== 201) {
            return { ok: false, message: data.message || 'Error applying to job' }
        }
        
        return { ok: true, data };
    } catch (error) {
        console.error('Error en applyForJob:', error);
        return { ok: false, message: error.message }
    }
}