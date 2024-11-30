import {create} from "zustand"
import { persist } from 'zustand/middleware';


interface GlobleStore {
    activeAccount: string | null,
    globalLoading: boolean,
    newJoiner: boolean,
    updateGlobalLoading: (loading:boolean) => void,
}


const useGlobleStore= create(persist<GlobleStore>((set) => ({
    activeAccount:null,
    globalLoading:true,
    newJoiner:true,
    updateGlobalLoading(loading) {
        set({globalLoading:loading})
    },
}),  {
    name: "globle-storage",
}))


export default useGlobleStore