import { useState } from "react";

export default function AddData() {
    const [card, setCard] = useState({
        title: "",
        content: "",
        isImportant : false,
        isUrgent : false,
        isCompleted : false
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setCard((prevVal) => ({
            ...prevVal,
            [name]: value 
        }));
    }

    function submit() {
        localStorage.setItem(card.title,JSON.stringify( {
            content : card.content,
            importance : card.isImportant,
            urgent : card.isUrgent,
            status : card.isCompleted
        }));
        console.log(
            `Saved: ${localStorage.getItem(card.title)}`
        );
    }

    return (
        <div className="add-data">
            <form onSubmit={submit}> 
                <input
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    value={card.title}
                />
                <textarea
                    name="content"
                    placeholder="Content"
                    onChange={handleChange}
                    value={card.content}
                />

                <div className="tag">
                    <label>
                        <input
                            type="checkbox"
                            name="isImportant"
                            onChange={handleChange}
                            checked={card.isImportant}
                        />
                        Important
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="isUrgent"
                            onChange={handleChange}
                            checked={card.isUrgent}
                        />
                        Urgent
                    </label>
                </div>
                <button type="submit">+</button>
            </form>
            <div className="representation">
                <div className="shown-value">🚨 : Important</div>
                <div className="shown-value">💤 : Not Important</div>
                <div className="shown-value">⏰ : Urgent</div>
                <div className="shown-value">🐢 : Not Urgent</div>
            </div>
        </div>
    );
}
