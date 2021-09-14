export const reducer = (state, action) => {
    if (action.type === 'ADD_MEMBER') {
        const newMember = [...state.members, action.payload]
        return {
            ...state,
            members: newMember,
            isModalOpen: true,
            modalContent: 'Add member success'
        };
    }

    if (action.type === 'REMOVE_MEMBER') {
        const newMember = state.members.filter(
            (member) => member.id !== action.payload
        );
        return {
            ...state,
            members: newMember,
            isModalOpen: true,
            modalContent: 'Delete member success'
        }
    }

    if (action.type === 'NO_VALUE') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'Please input new member'
        }
    }

    if (action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            isModalOpen: false,
        }
    }

    throw new Error('Xay ra loi !!!');
}