import { defineStore } from "pinia";

const useStore = defineStore(
    'comm',
    {
        state: () => ({
            count: 0
        }),
        actions: {
            inc() {
                this.count ++
            }
        }
    }
)

export default useStore