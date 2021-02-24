import React, {useState} from 'react'
import s from './Modal.module.css'
import {useDispatch} from "react-redux";
import {changeTextAC, closeModalAC, setTextAC} from "../../../redux/editPage-reducer";


function Modal(props) {

    const dispatch = useDispatch()

    let [index, setIndex] = useState([])
    let [search, setSearch] = useState(null)
    let selectedText = (e) => {
        let a = e.target.selectionStart
        let b = e.target.selectionEnd
        setIndex([a, b])
    }

    let upperCase = () => {
        let c = index[1] - index[0]
        let g = props.text.substr(index[0], c)
        let h = g.toUpperCase()
        let y = props.text.split('')
        y.splice(index[0], g.length, h)
        let p = y.join('')
        dispatch(changeTextAC(p))
    }
    let lowerCase = () => {
        let c = index[1] - index[0]
        let g = props.text.substr(index[0], c)
        let h = g.toLowerCase()
        let y = props.text.split('')
        y.splice(index[0], g.length, h)
        let p = y.join('')
        dispatch(changeTextAC(p))
    }
    let handlerSearch = (e) => {
        let text = e.currentTarget.value
        setSearch(text)
    }

    let searchMatches = () => {
        const text = props.text
        const result = text.replace('' + search + '', <p className={s.color}>{search}</p>)
        console.log(result, typeof result)
    }
    let update = () => {
        props.handleUpdate(props.name, props.text)
        dispatch(closeModalAC(false))
    }
    let changeText = (e) => {
        dispatch(changeTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.container}>
            <textarea onChange={changeText} onSelect={selectedText} value={props.text} rows='25' cols='100'></textarea>
            <div className={s.buttons}>
                <button className={s.button} onClick={props.closeModal}>Закрыть</button>
                <button className={s.button} onClick={upperCase}>К верхнему регистру</button>
                <button className={s.button} onClick={lowerCase}>К нижнему регистру</button>
                <input className={s.button} type="text" onChange={handlerSearch}/>
                <button className={s.button} onClick={searchMatches}> Поиск</button>
                <button onClick={update}>Сохранить</button>
            </div>
        </div>
    )
}

export default Modal