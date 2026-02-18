import { create } from "zustand";

export const usePersonStore = create((set) => ({
    email: '',
    uuid: '',
    candidateId: '',
    applicationId: '',
    setEmail: (email) => set({ email }),
    setUuid: (uuid) => set({ uuid }),
    setCandidateId: (candidateId) => set({ candidateId }),
    setApplicationId: (applicationId) => set({ applicationId })
}))