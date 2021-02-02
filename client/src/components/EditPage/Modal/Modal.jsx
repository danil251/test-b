import React, {useState} from 'react'
import s from './Modal.module.css'
import {useDispatch} from "react-redux";
import {changeTextAC} from "../../../redux/editPage-reducer";


function Modal(props) {

    const dispatch = useDispatch()

    let [index, setIndex] = useState([])
    let selectedText = (e) => {
        let a = e.target.selectionStart
        let b = e.target.selectionEnd
        setIndex([a,b])
    }
    let upperCase =() => {
        let g = props.text.substr(index[0], index[1])
        let h = g.toUpperCase()
        let text = props.text.replace(g, h)
        dispatch(changeTextAC(text, props.id))
    }
    let lowerCase = () => {
        let i = props.text.substr(index[0], index[1])
        let p = i.toUpperCase()
        let text = props.text.replace(i, p)
        dispatch(changeTextAC(text, props.id))
    }



    return (
        <div className={s.container}>
            <div className={s.modal}>
                <textarea onSelect={selectedText} defaultValue={props.text}  rows='25' cols='100'></textarea>
                <button onClick={props.closeModal}>Закрыть</button>
                <button onClick={upperCase}>К верхнему регистру</button>
                <button onClick={lowerCase}>К нижнему регистру</button>

            </div>
        </div>
    )
}

export default Modal