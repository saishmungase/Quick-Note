import Note from './Note';

export default function NoteArea() {
    return (
        <div className='note-area'>
            {Object.entries(localStorage).map(([keys, value]) => {
                const parsedValue = JSON.parse(value);
                if (parsedValue.status == false){
                    return (
                        <Note 
                            key={keys}
                            title={keys}
                            content={parsedValue.content}
                            important={parsedValue.importance} 
                            urgent={parsedValue.urgent} 
                            status={parsedValue.status}
                        />
                    );
                }
            })}
        </div>
    );
}
