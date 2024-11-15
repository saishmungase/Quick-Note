import { useState } from "react";

export default function AddData() {
    const [card, setCard] = useState({
        title: "",
        content: ""
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setCard((prevVal) => ({
            ...prevVal,
            [name]: value 
        }));
    }

    function submit() {
        localStorage.setItem(card.title, card.content);
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
                <button type="submit">+</button>
            </form>
        </div>
    );
}
