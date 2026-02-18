import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { toast } from "react-toastify";
import { UsePagination } from "../hooks/UsePagination";
import { applyForJob, getJobs } from "../service/jobs.service";
import { usePersonStore } from "../store/storedPerson";
import { urlGitHubValidate } from "../utils/utils";
import { Button } from "./Button";
import { Card } from "./Card";

export const ListPosition = () => {

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [applyingJobId, setApplyingJobId] = useState(null)
    const [formState, setFormState] = useState({})
    const [github, setGithub] = useState('')
    const { uuid, candidateId, applicationId } = usePersonStore();
    const { currentPage, totalPages, itemCurrent, backToPage, nextToPage, handleindexPage, handleLastPage } = UsePagination(jobs)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getJobs();
            setJobs(data);
            setLoading(false);
        };
        fetchData();
    }, [])

    const handleApply = async (jobId) => {        
        if(!uuid || !candidateId || !applicationId) {
            toast.error('Please search your data first.');
            return;
        }

        if(!github || !urlGitHubValidate(github)) {
            setFormState(prev => ({
                ...prev,
                [jobId]: { ...prev[jobId], error: true }
            }))
            toast.error('Please enter a valid GitHub URL.');
            return;
        }

        setFormState(prev => ({
            ...prev,
            [jobId]: { ...prev[jobId], error: false }
        }))

        setApplyingJobId(jobId);

        const dataPostApply ={
            uuid,
            jobId,
            candidateId,
            applicationId,
            repoUrl: github,
        }

        try {
            const response = await applyForJob(dataPostApply)

            if(!response.ok){
                toast.error(response.message);
            }else{
                toast.success('Application submitted successfully!');
            }

        } catch (error) {
            toast.error(error.message);
        }finally{
            setApplyingJobId(null);
        }
    }

    const handleChange = (e, jobId) => {
        const inputValue = e.target.value.trim();
        setGithub(inputValue)
        setFormState(prevState => ({
            ...prevState,
            [jobId]: {
                value: inputValue,
                error: false
            }
        }))
    }

    return (
        <article className="mt-10 w-full">
            <h2 className="text-2xl font-bold mb-4">Job Positions</h2>
            <ul className="w-full list-disc bg-gray-50 p-4 rounded-lg">
                {loading ? (<p>Loading job positions...</p>)
                    : !jobs ? (<p>No job positions available.</p>) : itemCurrent.map((job) => (
                        <Card 
                            key={job.id} 
                            jobId={job.id}
                            title={job.title}
                            OnValue={formState[job.id]?.value || ''}
                            OnClick={() => handleApply(job.id)} 
                            OnChange={e => handleChange(e, job.id)} 
                            error={formState[job.id]?.error || false}
                            isApplying={applyingJobId === job.id}
                        />
                    ))}
            </ul>
            <div className="flex items-center justify-center mt-2 gap-2">
                <Button onClick={handleindexPage} disabled={currentPage === 1} value={1}>
                    <MdKeyboardDoubleArrowLeft />
                </Button>
                <Button onClick={backToPage} disabled={currentPage === 1}>
                    <FaArrowLeft />
                </Button>
                <span>Page {currentPage} of {totalPages}</span>
                <Button onClick={nextToPage} disabled={currentPage === totalPages}>
                    <FaArrowRight />
                </Button>
                <Button onClick={handleLastPage} disabled={currentPage === totalPages} value={totalPages}>
                    <MdKeyboardDoubleArrowRight />
                </Button>

            </div>
        </article>
    )
}
