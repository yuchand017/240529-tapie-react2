import {create} from 'zustand'

interface Credential {
    token: null | string,
    setToken: (userToken: null | string) => void
}
export const useCredential = create<Credential>((set) => ({
    token: null,
    setToken: (userToken: null | string) => set({token: userToken})
    })
)

export default {useCredential}