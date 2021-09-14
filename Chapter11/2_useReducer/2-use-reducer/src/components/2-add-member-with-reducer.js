import { useReducer, useState } from "react";
import { reducer } from "./reducer";
import ModalBootstrap from "./Modal";

const defaultState = {
    members: [],
    isModalOpen: false,
    modalContent: ''
}
const AddMemberWithReducer = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newMember = { id: new Date().getTime().toString(), name }
            dispatch({ type: 'ADD_MEMBER', payload: newMember });
        } else {
            dispatch({ type: 'NO_VALUE' });
        }

    }

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    }

    const removeMember = (memberId) => {
        dispatch({ type: 'REMOVE_MEMBER', payload: memberId });
    }
    return (
        <>
            {state.isModalOpen && (
                <ModalBootstrap
                    isModalOpen={state.isModalOpen}
                    closeModal={closeModal}
                    modalContent={state.modalContent} />
            )}
            <form onSubmit={handleSubmit} className={'form'}>
                <div>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type='submit'>Add member</button>
            </form>
            {state.members.map((member) => {
              return (
                  <div key={member.id}>
                      <h4>{member.name}</h4>
                      <button onClick={() => removeMember(member.id)}>remove</button>
                  </div>
              )
            })}
        </>
    )
}

export default AddMemberWithReducer;