import {initialPeople, UserType} from "../HW8";

export type ActionType = {type: 'sort', payload: 'up' | 'down'} | {type: 'check', payload: number}

export const homeWorkReducer = (state: Array<UserType> = initialPeople, action: ActionType): Array<UserType>  => {
    switch (action.type) {
        case 'sort': {
           const newState = [...state].sort((a,b) => {
                if(a.name > b.name) return 1
                if(a.name < b.name) return -1
                else return 0
            })
            return action.payload === "up" ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter(a => a.age > action.payload)
        }
        default:
            return state
    }
}