const initState = {
    theme: ''
};
export type InitialStateType = typeof initState

export const themeReducer = (state:InitialStateType = initState, action: ChangeThemeAcnionType): InitialStateType => { 
    switch (action.type) {
        case "THEME": {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string) => {
    return {
        type: "THEME",
        theme
    } as const
}
export type ChangeThemeAcnionType = ReturnType<typeof changeThemeC>