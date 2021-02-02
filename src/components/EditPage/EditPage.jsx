import React from "react";
import Modal from "./Modal/Modal";
import s from './EditPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {closeModalAC, selectModalAC} from "../../redux/editPage-reducer";


function EditPage(props) {

    const editPage = useSelector(state => state.editPage)
    const currentFile = useSelector(state => state.editPage.currentFile)

    const dispatch = useDispatch()


    let files = currentFile ? editPage.files.filter(file => file.id === currentFile):editPage.files
    let text = files.length === 1? files[0].text : null
    let id = files.length === 1? files[0].id : null

    let modalOpen = (e) => {
        dispatch(selectModalAC(e.currentTarget.id, true))
    }
    let closeModal = () => {
        dispatch(closeModalAC(false))
    }
    console.log(files)
    return (
        <div className={s.editPage}>
            {editPage.modalIsOpen === true ?<h1>Редактирование файла</h1> : <h1>Список файлов</h1>}
            {files.map(m => <div className={s.listItem} key={m.id} id={m.id} onClick={modalOpen}> id: {m.id} name: {m.name} </div>)}
            {editPage.modalIsOpen === true ? <Modal id={id} text={text} closeModal={closeModal}/> : null}
        </div>
    )
}

export default EditPage