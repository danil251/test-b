import React, {useState} from "react";
import Modal from "./Modal/Modal";
import s from './EditPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {closeModalAC, selectModalAC} from "../../redux/editPage-reducer";
import {fileAPI} from "../../api/api";


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
const [fileText, setFileText] = useState('')
    let handleDownload = async (fileName) => {
      const text = await  fileAPI.download(fileName)
        setFileText(text)
    }

    return (
        <div className={s.editPage}>
            {editPage.modalIsOpen === true ?<h1>Редактирование файла</h1> : <h1>Список файлов</h1>}
            {files.map(m => <div className={s.listItem} key={m.id} id={m.id} onClick={modalOpen}> id: {m.id} <div onClick={() => handleDownload(m.name)}>name: {m.name}</div> </div>)}
            {editPage.modalIsOpen === true ? <Modal id={id} text={fileText} closeModal={closeModal}/> : null}
        </div>
    )
}

export default EditPage