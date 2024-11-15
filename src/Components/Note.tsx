import deleteIcon from '../assets/delete.png';

type propsType = {
    title : string,
    content : string
}

export default function Note(props : propsType){


    return <div className="note-box">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <div className="delete-box">
            <img src={deleteIcon}></img>
        </div>
    </div>
}