import React from 'react';
import deleteIcon from '../assets/delete.png';

type propsType = {
    title : string,
    content : string
}

export default function Note(props : propsType){

    function deleteNote(event: React.MouseEvent<HTMLImageElement>){
        const deleteKey: string = event.currentTarget.alt
        localStorage.removeItem(deleteKey)
        location.reload();
    }

    return <div className="note-box">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <div className="delete-box">
            <img onClick={deleteNote} src={deleteIcon} alt={props.title}></img>
        </div>
    </div>
}