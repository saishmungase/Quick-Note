import { useEffect, useState } from 'react';
import deleteIcon from '../assets/delete.png';

type propsType = {
    title: string;
    content: string;
    important: boolean;
    status: boolean;
    urgent: boolean;
};

export default function Note(props: propsType) {
    const [update, setUpdate] = useState<{
        content: string;
        importance: boolean;
        status : boolean,
        urgent: boolean;
    } >({
        content : "",
        importance : false,
        status : false,
        urgent : false
    });

    const importantData = props.important ? "🚨" : "💤"; 
    const urgentData = props.urgent ? "⏰" : "🐢"; 

    function deleteNote(event: React.MouseEvent<HTMLImageElement>) {
        const deleteKey: string = event.currentTarget.alt;
        localStorage.removeItem(deleteKey);
        location.reload();
    }

    function completeNote(event: React.MouseEvent<HTMLDivElement>) {
        const naam = event.currentTarget.dataset.naam; 
        if (naam) {
            const storedValue = localStorage.getItem(naam);
            if (storedValue) {
                const parsedValue = JSON.parse(storedValue)
                setUpdate({
                    content : parsedValue.content,
                    importance : parsedValue.importance,
                    status : true,
                    urgent : parsedValue.urgent
                })
            }
            location.reload();
        } 
    }

    useEffect(() => {
        if (update.content) {
            const naam = props.title; 
            localStorage.setItem(naam, JSON.stringify(update));
        }
    }, [update, props.title]);

    return (
        <div className="note-box">
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
                <div
                    className="complete-click"
                    onClick={completeNote}
                    data-naam={props.title} 
                >
                    ✅
                </div>
            </div>

            <div className="delete-box">
                <img onClick={deleteNote} src={deleteIcon} alt={props.title} />
            </div>
        </div>
    );
}
