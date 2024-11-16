import Note from './Note';

export default function NoteArea() {
    return (
        <div className='note-area'>
            {Object.entries(localStorage).map(([keys, value]) => {
                const parsedValue = JSON.parse(value);
                return (
                    <Note 
                        key={keys}
                        title={keys}
                        content={parsedValue.content}
                        important={parsedValue.importance} 
                        urgent={parsedValue.urgent} 
                    />
                );
            })}
        </div>
    );
}
