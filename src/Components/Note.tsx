import deleteIcon from '../assets/delete.png';

type propsType = {
    title : string,
    content : string,
    important : boolean,
    urgent : boolean
}

export default function Note(props : propsType){

    const importantData = props.important ? "🚨" : "💤"; 
    const urgentData = props.urgent ? "⏰" : "🐢"; 

    function deleteNote(event: React.MouseEvent<HTMLImageElement>){
        const deleteKey: string = event.currentTarget.alt
        localStorage.removeItem(deleteKey)
        location.reload();
    }

    return <div className="note-box">
        <h2>{props.title}</h2>
        <p>{props.content}</p>

        <div className="tag">
            <div className="important">
                {importantData}
            </div>
            <div className="urgent">
                {urgentData}
            </div>
        </div>


        <div className="complete-box">
            <div className="complete-click">
                ✅
            </div>
        </div>
        <div className="delete-box">
            <img onClick={deleteNote} src={deleteIcon} alt={props.title}></img>
        </div>
    </div>
}