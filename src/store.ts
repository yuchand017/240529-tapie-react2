import {create} from 'zustand'

interface Credential {
    token: null | string,
    setToken: (userToken: string) => void
}
export const useCredential = create<Credential>((set) => ({
    token: null,
    setToken: (userToken: string) => set({token: userToken})
    })
)

export default {useCredential}