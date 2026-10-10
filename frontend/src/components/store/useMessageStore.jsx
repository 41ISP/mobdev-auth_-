import { create } from "zustand";
import { api } from "../api/api";
export const useMessageStore = create((set) => ({
    message: [],
    getMessages: async () => {
        try{
            const res = await api.getMessages()
            set({messages: res.data})
        } catch (error) {
            cosole.error(error)
        }
    }
}))