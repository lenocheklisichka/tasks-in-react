const initState = {
    isLoading: false
}

export type InitialStateType = typeof initState

export const loadingReducer = (state: InitialStateType = initState, action: LoadingActionType): InitialStateType => {
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({type: 'LOADING', isLoading})

export type LoadingActionType = {
    type: 'LOADING'
    isLoading: boolean
}