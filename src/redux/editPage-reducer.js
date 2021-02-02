

let initialState = {
    files: [
        {id: '1', name: 'file1', text: '1Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {id: '2', name: 'file2', text: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {id: '3', name: 'file3', text: '3Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {id: '4', name: 'file4', text: '4Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {id: '5', name: 'file5', text: '5Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}],
    modalIsOpen: false,
    currentFile: null
}

export const editPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SELECT-MODAL': {
            return  {...state, currentFile: action.id, modalIsOpen: action.modalIsOpen}
        }
        case 'CLOSE-MODAL': {
            return {...state, modalIsOpen: action.modalIsOpen, currentFile: null}
        }
        case 'CHANGE-TEXT': {
            return {...state, files: state.files.map(f => f.id === action.id? f.text = action.text : f.text )}
        }
        default:
            return {...state}
    }
}

export const selectModalAC = (id, modalIsOpen) => ({type: 'SELECT-MODAL', id, modalIsOpen})
export const closeModalAC = (modalIsOpen) => ({type: 'CLOSE-MODAL', modalIsOpen})
export const changeTextAC = (text, id) => ({type: 'CHANGE-TEXT', text, id})
