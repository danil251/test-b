import React, {useEffect} from "react";
import Modal from "./Modal/Modal";
import s from './EditPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {closeModalAC, selectModalAC, setDataAC, setTextAC} from "../../redux/editPage-reducer";
import {fileAPI} from "../../api/api";


function EditPage() {

    const editPage = useSelector(state => state.editPage)
    const currentFile = useSelector(state => state.editPage.currentFile)


    const dispatch = useDispatch()


    useEffect(() => {
        fileAPI.setFile().then((res) => {
            dispatch(setDataAC(res.data))
            console.log('ok')
        }).catch(() => {
            console.log('err')
        })
    }, [])

    let files = currentFile ? editPage.files.filter(file => file._id === currentFile) : editPage.files


    let modalOpen = (id) => {
        dispatch(selectModalAC(id, true))
    }
    let closeModal = () => {
        dispatch(closeModalAC(false))
    }

    let handleDownload = async (fileName) => {
        const text = await fileAPI.download(fileName)
        dispatch(setTextAC(text))
    }
    const handleUpdate = async (fileName, content) => {
        fileAPI.update(fileName, content)
            .then(() => {
                console.log('ok');
            });
    };

    return (
        <div className={s.editPage}>
            {editPage.modalIsOpen === true ? <h1>Редактирование файла</h1> : <h1>Список файлов</h1>}
            {files.map(m => <div className={s.listItem} key={m._id} id={m._id}
                                 onClick={() => handleDownload(m.name)}>
                    <div onClick={() => modalOpen(m._id)}>name: {m.name}</div>
                </div>
            )}
            {editPage.modalIsOpen === true ?
                <Modal text={editPage.fileText} handleUpdate={handleUpdate} name={files[0].name}
                       closeModal={closeModal}/> : null}
        </div>
    )
}

export default EditPage

// <div onClick={() => handleDownload(m.name)}></div>