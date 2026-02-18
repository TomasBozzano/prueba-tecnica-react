import { create } from "zustand";

export const usePersonStore = create((set) => ({
    email: '',
    uuid: '',
    candidateId: '',
    setEmail: (email) => set({ email }),
    setUuid: (uuid) => set({ uuid }),
    setCandidateId: (candidateId) => set({ candidateId }),
}))