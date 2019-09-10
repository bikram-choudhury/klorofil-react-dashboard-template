export const SidebarAction = (status) => {
    return {
        type: 'TOGGLE_SIDEBAR',
        expandLayout: status
    }
};