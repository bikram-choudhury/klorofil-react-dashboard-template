const InitialState = {
    expandLayout: false
}

export const SidebarReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            return {
                ...state,
                expandLayout: action.expandLayout
            }
        default: return state;
    }
}