

let initialState = {
    files: [],
    modalIsOpen: false,
    currentFile: null,
    fileText: ''
}

export const editPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SELECT-MODAL': {
            return  {...state, currentFile: action.id, modalIsOpen: action.modalIsOpen}
        }
        case 'CLOSE-MODAL': {
            return {...state, modalIsOpen: action.modalIsOpen, currentFile: null, fileText: ''}
        }
        case 'CHANGE-TEXT': {
            return {...state, fileText: action.text }
        }
        case 'SET-DATA': {
            return {...state, files: action.data}
        }
        case 'SET-TEXT': {
            return {...state, fileText: action.newText}
        }
        default:
            return {...state}
    }
}

export const selectModalAC = (id, modalIsOpen) => ({type: 'SELECT-MODAL', id, modalIsOpen})
export const closeModalAC = (modalIsOpen) => ({type: 'CLOSE-MODAL', modalIsOpen})
export const changeTextAC = (text) => ({type: 'CHANGE-TEXT', text})
export const setDataAC = (data) => ({type: 'SET-DATA', data})
export const setTextAC = (newText) => ({type: 'SET-TEXT', newText})
