import React from "react";
import s from "./DownloadPage.module.css"

function DownloadPage() {

    const fileChange = (e) => {
        console.log(e.currentTarget.value)
    }
    const download = () => {

    }
    return (
        <div className={s.container}>
            <div className={s.downloadPage}>
                <input type="file" accept='.docx, .txt' onChange={fileChange}/>
                <button className={s.btn} onClick={download}>Download</button>
            </div>
        </div>
    )
}

export default DownloadPage